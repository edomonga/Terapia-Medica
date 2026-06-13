import React, { useState, useEffect, useCallback } from 'react';
import domande, { argomenti } from './domande';

// ─── CONFIG ────────────────────────────────────────────────────────────────
// Utenti autorizzati: aggiungi qui username e password dei tuoi colleghi
const UTENTI = {
  'edoardo':  'medicina2025',
  'enrica':  'acuradienricapiazza'
  'eleonora':  'cardiologia2027'
  // aggiungi altri: 'nomeutente': 'password'
};

const EXAM_N = 23;
const STORAGE_KEY = 'tm_session_v4';

// API key letta dalla variabile d'ambiente Vercel
// In locale metti una file .env con REACT_APP_ANTHROPIC_KEY=sk-ant-...
const API_KEY = process.env.REACT_APP_ANTHROPIC_KEY || '';

// ─── DESIGN TOKENS ─────────────────────────────────────────────────────────
const C = {
  paper:    '#FAFAF8',
  white:    '#FFFFFF',
  ink:      '#1A1A1A',
  ink2:     '#3D3D3D',
  ink3:     '#6B6B6B',
  ink4:     '#A0A0A0',
  rule:     '#E0DDD8',
  red:      '#8B1A2F',
  redLight: '#F9F0F2',
  redRule:  '#C4566A',
  green:    '#1A5C3A',
  greenBg:  '#F0F7F3',
  greenRule:'#5A9E7A',
  amber:    '#7A5200',
  amberBg:  '#FDF6E8',
  amberRule:'#C49A3C',
  slate:    '#3B4A5A',
  slateBg:  '#EFF3F7',
  slateRule:'#7A9AB8',
};

const F = {
  serif: "'Playfair Display', Georgia, serif",
  sans:  "'Inter', system-ui, sans-serif",
  mono:  "'IBM Plex Mono', monospace",
};

// ─── HELPERS ───────────────────────────────────────────────────────────────
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

function loadSession() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; }
  catch { return null; }
}
function saveSession(s) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {}
}
function clearSession() {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}

async function callClaude(system, userMsg, maxTokens = 1000) {
  if (!API_KEY) throw new Error('API key non configurata. Contatta l\'amministratore.');
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: maxTokens,
      system,
      messages: [{ role: 'user', content: userMsg }],
    }),
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error?.message || `Errore API ${res.status}`);
  }
  const data = await res.json();
  return data.content.map(b => b.text || '').join('');
}

async function correggi(domanda, risposta, rispostaCorretta) {
  const text = await callClaude(
    `Sei un professore di Terapia Medica all'Università Vita-Salute San Raffaele (UNISR).
Correggi la risposta dello studente rispetto alla risposta corretta della dispensa Piazza.
Rispondi SOLO con JSON valido, nessun testo fuori dal JSON, nessun markdown.
Formato esatto:
{"voto":"OTTIMO"|"BUONO"|"SUFFICIENTE"|"INSUFFICIENTE","punteggio":<0-10>,"feedback":"<3-5 righe: cosa era corretto, cosa mancava, risposta ideale>","concetti":["<c1>","<c2>","<c3>"]}`,
    `DOMANDA: ${domanda}\nRISPOSTA STUDENTE: ${risposta || "(nessuna)"}\nRISPOSTA DISPENSA: ${rispostaCorretta}`
  );
  return JSON.parse(text.replace(/```json|```/g, '').trim());
}

async function generaDomande(argomento, esistenti, n = 5) {
  const esempi = esistenti.slice(0, 4).map(d => `- ${d.domanda}`).join('\n');
  const text = await callClaude(
    `Sei un professore di Terapia Medica all'UNISR. Genera nuove domande d'esame a risposta breve (max 2 righe) basandoti sulla dispensa "Terapia Medica" di Enrica Piazza.
Le domande devono essere cliniche, precise, del livello degli appelli reali UNISR.
Rispondi SOLO con un array JSON valido, nessun testo fuori, nessun markdown.
Formato: [{"domanda":"<testo>","risposta":"<risposta corretta max 2 righe>"}]`,
    `Argomento: ${argomento}
Domande già presenti (non ripetere concetti identici):
${esempi}
Genera ${n} domande nuove e diverse su questo argomento.`,
    1500
  );
  const arr = JSON.parse(text.replace(/```json|```/g, '').trim());
  return arr.map((item, i) => ({
    id: 9000 + Math.floor(Math.random() * 9000) + i,
    argomento,
    domanda: item.domanda,
    risposta: item.risposta,
    generata: true,
  }));
}

// ─── VOTE CONFIG ───────────────────────────────────────────────────────────
const VOTE = {
  OTTIMO:        { bg: C.greenBg,  rule: C.greenRule,  text: C.green,  label: 'Ottimo',        score: 4 },
  BUONO:         { bg: C.slateBg,  rule: C.slateRule,  text: C.slate,  label: 'Buono',         score: 3 },
  SUFFICIENTE:   { bg: C.amberBg,  rule: C.amberRule,  text: C.amber,  label: 'Sufficiente',   score: 2 },
  INSUFFICIENTE: { bg: C.redLight, rule: C.redRule,    text: C.red,    label: 'Insufficiente', score: 0 },
};

// ─── PRIMITIVES ────────────────────────────────────────────────────────────
const Rule = ({ color = C.rule, my = 0 }) => (
  <div style={{ height: 1, backgroundColor: color, margin: `${my}px 0` }} />
);

const RedRule = () => (
  <div style={{ height: 2, backgroundColor: C.red, width: 48, marginBottom: 24 }} />
);

const Label = ({ children }) => (
  <div style={{ fontFamily: F.mono, fontSize: 10, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: C.ink4, marginBottom: 8 }}>
    {children}
  </div>
);

const Btn = ({ children, onClick, variant = 'primary', disabled, full, style: extra = {} }) => {
  const base = {
    fontFamily: F.sans, fontSize: 13, fontWeight: 600, letterSpacing: '.01em',
    border: 'none', borderRadius: 3, padding: '11px 22px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? .45 : 1,
    transition: 'opacity .15s',
    display: 'inline-flex', alignItems: 'center', gap: 8,
    width: full ? '100%' : undefined,
    justifyContent: full ? 'center' : undefined,
    ...extra,
  };
  const vs = {
    primary:   { background: C.ink,   color: C.white },
    secondary: { background: C.white, color: C.ink,  border: `1px solid ${C.rule}` },
    ghost:     { background: 'transparent', color: C.ink3, border: `1px solid ${C.rule}` },
    red:       { background: C.red,   color: C.white },
  };
  return <button style={{ ...base, ...vs[variant] }} onClick={onClick} disabled={disabled}>{children}</button>;
};

const FieldInput = ({ label, hint, type = 'text', error, ...props }) => (
  <div style={{ marginBottom: 20 }}>
    {label && <Label>{label}</Label>}
    <input
      type={type}
      {...props}
      style={{
        width: '100%', padding: '10px 12px',
        border: `1px solid ${error ? C.red : C.rule}`, borderRadius: 3,
        fontSize: 14, fontFamily: type === 'password' ? F.mono : F.sans,
        color: C.ink, background: C.white, outline: 'none',
        transition: 'border-color .15s',
      }}
      onFocus={e => e.target.style.borderColor = error ? C.red : C.ink}
      onBlur={e => e.target.style.borderColor = error ? C.red : C.rule}
    />
    {hint && <div style={{ fontSize: 11, color: C.ink4, marginTop: 5, lineHeight: 1.5 }}>{hint}</div>}
  </div>
);

const Spinner = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" style={{ animation: 'spin .7s linear infinite', flexShrink: 0 }}>
    <circle cx={7} cy={7} r={5.5} stroke="currentColor" strokeOpacity={.25} strokeWidth={2} fill="none" />
    <path d="M7 1.5a5.5 5.5 0 0 1 5.5 5.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" fill="none" />
  </svg>
);

// Masthead component reused across screens
const Masthead = ({ nome, onMenu, onLogout, extra }) => (
  <div style={{ background: C.white, borderBottom: `1px solid ${C.rule}` }}>
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 52 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontFamily: F.serif, fontSize: 16, fontWeight: 700, color: C.ink }}>Terapia Medica</span>
          {onMenu && (
            <button onClick={onMenu} style={{
              fontSize: 11, fontFamily: F.mono, letterSpacing: '.07em', textTransform: 'uppercase',
              color: C.ink3, background: 'none', border: `1px solid ${C.rule}`, borderRadius: 2,
              padding: '4px 10px', cursor: 'pointer',
            }}>
              Menu
            </button>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {extra}
          {nome && <span style={{ fontSize: 13, color: C.ink3 }}>{nome}</span>}
          {onLogout && (
            <button onClick={onLogout} style={{
              fontSize: 11, color: C.ink4, background: 'none', border: 'none',
              cursor: 'pointer', fontFamily: F.mono, letterSpacing: '.06em', textTransform: 'uppercase',
            }}>
              Esci
            </button>
          )}
        </div>
      </div>
      <div style={{ height: 2, backgroundColor: C.red }} />
    </div>
  </div>
);

// ─── LOGIN SCREEN ──────────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [err, setErr] = useState('');

  const attempt = () => {
    const u = username.trim().toLowerCase();
    if (UTENTI[u] && UTENTI[u] === pwd) {
      onLogin(u);
    } else {
      setErr('Username o password non corretti.');
      setPwd('');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: C.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <div style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: C.ink4, marginBottom: 16 }}>
          Università Vita-Salute San Raffaele
        </div>
        <h1 style={{ fontFamily: F.serif, fontSize: 32, fontWeight: 700, color: C.ink, lineHeight: 1.2, marginBottom: 6 }}>
          Terapia Medica
        </h1>
        <p style={{ fontSize: 14, color: C.ink3, marginBottom: 32, lineHeight: 1.6 }}>
          Piattaforma di preparazione all'esame
        </p>
        <RedRule />
        <FieldInput
          label="Username"
          placeholder="es. edoardo"
          value={username}
          onChange={e => { setUsername(e.target.value); setErr(''); }}
          onKeyDown={e => e.key === 'Enter' && attempt()}
          error={!!err}
        />
        <FieldInput
          label="Password"
          type="password"
          placeholder="——"
          value={pwd}
          onChange={e => { setPwd(e.target.value); setErr(''); }}
          onKeyDown={e => e.key === 'Enter' && attempt()}
          error={!!err}
        />
        {err && <div style={{ fontSize: 12, color: C.red, marginBottom: 14, fontFamily: F.mono }}>{err}</div>}
        <Btn onClick={attempt} full>Accedi</Btn>
      </div>
    </div>
  );
}

// ─── SETUP SCREEN ──────────────────────────────────────────────────────────
function SetupScreen({ username, onStart, onLogout }) {
  const [mode, setMode] = useState('argomento');
  const [selectedArgs, setSelectedArgs] = useState([]);
  const [numQ, setNumQ] = useState(10);

  const toggleArg = a => setSelectedArgs(p => p.includes(a) ? p.filter(x => x !== a) : [...p, a]);
  const allSel = selectedArgs.length === argomenti.length;

  const realPool = mode === 'argomento'
    ? domande.filter(d => selectedArgs.includes(d.argomento))
    : domande;
  const maxQ = realPool.length;

  const canStart = mode === 'esame' || mode === 'random' || (mode === 'argomento' && selectedArgs.length > 0);

  const go = () => {
    let pool;
    if (mode === 'esame') {
      pool = shuffle(domande).slice(0, EXAM_N);
    } else {
      pool = shuffle(realPool).slice(0, Math.min(numQ, maxQ));
    }
    onStart({ pool, isExam: mode === 'esame', argomentiScelti: mode === 'argomento' ? selectedArgs : argomenti });
  };

  // Nome display
  const nomeDisplay = username.charAt(0).toUpperCase() + username.slice(1);

  return (
    <div style={{ minHeight: '100vh', background: C.paper }}>
      <Masthead nome={nomeDisplay} onLogout={onLogout} />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontFamily: F.serif, fontSize: 30, fontWeight: 700, color: C.ink, marginBottom: 6, letterSpacing: '-.02em' }}>
          Buono studio, {nomeDisplay}.
        </h2>
        <p style={{ fontSize: 14, color: C.ink3, marginBottom: 40, lineHeight: 1.6 }}>
          Scegli modalità e argomenti, poi inizia la sessione.
        </p>

        {/* Mode */}
        <Label>Modalità</Label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 36 }}>
          {[
            { key: 'argomento', title: 'Per argomento',    sub: 'Scegli i capitoli' },
            { key: 'random',    title: 'Casuale',           sub: 'Mix di tutto il programma' },
            { key: 'esame',     title: 'Simulazione esame', sub: `${EXAM_N} domande · voto 18–30` },
          ].map(m => {
            const active = mode === m.key;
            return (
              <button key={m.key} onClick={() => setMode(m.key)} style={{
                background: active ? C.ink : C.white,
                border: `1px solid ${active ? C.ink : C.rule}`,
                borderRadius: 3, padding: '14px 16px', cursor: 'pointer', textAlign: 'left',
                transition: 'all .15s',
              }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: active ? C.white : C.ink, marginBottom: 3 }}>{m.title}</div>
                <div style={{ fontSize: 11, color: active ? 'rgba(255,255,255,.55)' : C.ink4 }}>{m.sub}</div>
              </button>
            );
          })}
        </div>

        {/* Argomenti — senza contatore */}
        {mode === 'argomento' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <Label>Argomenti</Label>
              <button onClick={() => setSelectedArgs(allSel ? [] : [...argomenti])} style={{
                fontSize: 11, color: C.red, background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: F.mono, letterSpacing: '.06em', textTransform: 'uppercase',
              }}>
                {allSel ? 'Deseleziona tutti' : 'Seleziona tutti'}
              </button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32, maxHeight: 280, overflowY: 'auto' }}>
              {argomenti.map(a => {
                const sel = selectedArgs.includes(a);
                return (
                  <button key={a} onClick={() => toggleArg(a)} style={{
                    background: sel ? C.ink : C.white,
                    border: `1px solid ${sel ? C.ink : C.rule}`,
                    borderRadius: 2, padding: '5px 12px', cursor: 'pointer',
                    fontSize: 12, fontFamily: F.sans, fontWeight: sel ? 600 : 400,
                    color: sel ? C.white : C.ink3,
                    transition: 'all .12s',
                  }}>
                    {a}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* Numero domande */}
        {mode !== 'esame' && (
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
              <Label>Numero di domande</Label>
              <span style={{ fontFamily: F.mono, fontSize: 18, fontWeight: 500, color: C.ink }}>{Math.min(numQ, maxQ)}</span>
            </div>
            <input type="range" min={1} max={Math.max(1, maxQ)} value={Math.min(numQ, maxQ)}
              onChange={e => setNumQ(+e.target.value)}
              style={{ width: '100%', accentColor: C.ink }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontFamily: F.mono, color: C.ink4, marginTop: 4 }}>
              <span>1</span><span>{Math.max(1, maxQ)}</span>
            </div>
          </div>
        )}

        <Rule my={0} />
        <div style={{ paddingTop: 28 }}>
          <Btn onClick={go} disabled={!canStart} style={{ minWidth: 200 }}>
            {mode === 'esame' ? 'Inizia simulazione esame' : 'Inizia sessione'}
          </Btn>
        </div>
      </div>
    </div>
  );
}

// ─── QUIZ SCREEN ────────────────────────────────────────────────────────────
function QuizScreen({ pool: initialPool, isExam, argomentiScelti, username, onEnd, onMenu }) {
  // Keep real questions first, then append generated ones
  const [realDone, setRealDone] = useState(false);
  const [pool, setPool] = useState(initialPool);
  const [current, setCurrent] = useState(0);
  const [risposta, setRisposta] = useState('');
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [genMsg, setGenMsg] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [err, setErr] = useState('');
  const [showRef, setShowRef] = useState(false);
  const [results, setResults] = useState([]);
  const [done, setDone] = useState(false);

  const q = pool[current];
  const pct = pool.length > 0 ? (current / pool.length) * 100 : 0;
  const nomeDisplay = username.charAt(0).toUpperCase() + username.slice(1);

  // Generate new questions when we've exhausted real ones
  useEffect(() => {
    if (isExam || generating || realDone) return;
    // Check if we're near the end of real (non-generated) questions
    const remaining = pool.slice(current).filter(d => !d.generata);
    if (remaining.length <= 2) {
      setRealDone(true);
      setGenerating(true);
      setGenMsg('Sto generando nuove domande…');
      // Pick a random argomento from the chosen ones
      const arg = argomentiScelti[Math.floor(Math.random() * argomentiScelti.length)];
      const esistenti = domande.filter(d => d.argomento === arg);
      generaDomande(arg, esistenti, 6)
        .then(nuove => {
          setPool(p => [...p, ...nuove]);
          setRealDone(false);
        })
        .catch(() => {})
        .finally(() => { setGenerating(false); setGenMsg(''); });
    }
  }, [current, pool, isExam, generating, realDone, argomentiScelti]);

  const handleSubmit = async () => {
    setErr(''); setLoading(true); setFeedback(null);
    try {
      const fb = await correggi(q.domanda, risposta, q.risposta);
      setFeedback(fb);
      setResults(p => [...p, { q, risposta, fb }]);
    } catch (e) {
      setErr(e.message || 'Errore di connessione. Riprova.');
    } finally { setLoading(false); }
  };

  const advance = useCallback(() => {
    if (current + 1 >= pool.length) setDone(true);
    else { setCurrent(c => c + 1); setRisposta(''); setFeedback(null); setErr(''); setShowRef(false); }
  }, [current, pool.length]);

  const handleSkip = () => {
    setResults(p => [...p, { q, risposta: '(saltata)', fb: { voto: 'INSUFFICIENTE', punteggio: 0, feedback: 'Domanda saltata.', concetti: [] } }]);
    advance();
  };

  if (done) return (
    <ResultsScreen results={results} pool={pool} isExam={isExam} username={username} onEnd={onEnd} onMenu={onMenu} />
  );

  const vv = feedback ? (VOTE[feedback.voto] || VOTE.SUFFICIENTE) : null;

  return (
    <div style={{ minHeight: '100vh', background: C.paper }}>
      <Masthead
        nome={nomeDisplay}
        onMenu={onMenu}
        extra={
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {isExam && <span style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: C.red }}>Esame</span>}
            <span style={{ fontFamily: F.mono, fontSize: 12, color: C.ink4 }}>{current + 1} / {pool.length}</span>
            {genMsg && <span style={{ fontFamily: F.mono, fontSize: 10, color: C.ink4 }}>{genMsg}</span>}
          </div>
        }
      />
      {/* Progress bar */}
      <div style={{ height: 2, background: C.rule }}>
        <div style={{ height: '100%', background: C.red, width: `${pct}%`, transition: 'width .4s ease' }} />
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 24px' }}>

        {/* Question card */}
        <div style={{ background: C.white, border: `1px solid ${C.rule}`, borderRadius: 4, padding: '32px 36px', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: C.red }}>{q.argomento}</span>
            {q.generata && (
              <span style={{ fontFamily: F.mono, fontSize: 9, letterSpacing: '.08em', textTransform: 'uppercase', color: C.ink4, borderLeft: `1px solid ${C.rule}`, paddingLeft: 10 }}>
                Generata
              </span>
            )}
            <span style={{ fontFamily: F.mono, fontSize: 9, color: C.ink4, marginLeft: 'auto' }}>#{q.id}</span>
          </div>

          <p style={{ fontFamily: F.serif, fontSize: 21, fontWeight: 600, lineHeight: 1.5, color: C.ink, marginBottom: 24, letterSpacing: '-.01em' }}>
            {q.domanda}
          </p>

          {!showRef
            ? <button onClick={() => setShowRef(true)} style={{
                fontSize: 11, fontFamily: F.mono, letterSpacing: '.06em', textTransform: 'uppercase',
                color: C.ink4, background: 'none', border: 'none', cursor: 'pointer',
                marginBottom: 20, textDecoration: 'underline',
              }}>
                Mostra risposta di riferimento
              </button>
            : <div style={{ background: C.paper, border: `1px solid ${C.rule}`, borderLeft: `3px solid ${C.red}`, padding: '12px 16px', marginBottom: 20, borderRadius: 2 }}>
                <div style={{ fontFamily: F.mono, fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase', color: C.ink4, marginBottom: 6 }}>
                  Risposta dispensa Piazza
                </div>
                <p style={{ fontSize: 13, color: C.ink2, lineHeight: 1.65, margin: 0 }}>{q.risposta}</p>
              </div>
          }

          <Label>La tua risposta</Label>
          <textarea
            value={risposta}
            onChange={e => setRisposta(e.target.value)}
            disabled={!!feedback || loading}
            placeholder="Rispondi in max 2 righe…"
            rows={3}
            style={{
              width: '100%', padding: '11px 13px',
              border: `1px solid ${C.rule}`, borderRadius: 3,
              fontSize: 15, fontFamily: F.sans, color: C.ink,
              background: feedback ? C.paper : C.white,
              resize: 'vertical', outline: 'none', lineHeight: 1.6,
            }}
            onFocus={e => !feedback && (e.target.style.borderColor = C.ink)}
            onBlur={e => (e.target.style.borderColor = C.rule)}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <span style={{ fontFamily: F.mono, fontSize: 10, color: C.ink4 }}>{risposta.length} caratteri</span>
          </div>

          {err && <p style={{ fontSize: 12, color: C.red, marginTop: 10, fontFamily: F.mono }}>{err}</p>}

          {!feedback && (
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              <Btn onClick={handleSubmit} disabled={loading}>
                {loading ? <><Spinner /> Correzione in corso…</> : 'Correggi risposta'}
              </Btn>
              {!isExam && (
                <Btn variant="ghost" onClick={handleSkip} disabled={loading}>Salta</Btn>
              )}
            </div>
          )}
        </div>

        {/* Feedback card */}
        {feedback && vv && (
          <div style={{ background: vv.bg, border: `1px solid ${vv.rule}`, borderRadius: 4, padding: '28px 32px', animation: 'fadeUp .25s ease' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
              <span style={{ fontFamily: F.serif, fontSize: 20, fontWeight: 700, color: vv.text }}>{vv.label}</span>
              <span style={{ fontFamily: F.mono, fontSize: 13, color: vv.text }}>{feedback.punteggio} / 10</span>
            </div>
            <Rule color={vv.rule} />
            <p style={{ fontSize: 14, lineHeight: 1.75, color: C.ink2, margin: '16px 0', paddingLeft: 16, borderLeft: `2px solid ${vv.rule}` }}>
              {feedback.feedback}
            </p>
            {feedback.concetti?.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
                {feedback.concetti.map((c, i) => (
                  <span key={i} style={{ fontFamily: F.mono, fontSize: 11, color: vv.text, background: vv.bg, border: `1px solid ${vv.rule}`, borderRadius: 2, padding: '3px 9px' }}>
                    {c}
                  </span>
                ))}
              </div>
            )}
            <div style={{ display: 'flex', gap: 10 }}>
              <Btn onClick={advance}>
                {current + 1 >= pool.length ? 'Vedi risultati' : 'Prossima domanda'}
              </Btn>
              <Btn variant="secondary" onClick={onMenu}>Menu principale</Btn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── RESULTS SCREEN ────────────────────────────────────────────────────────
function ResultsScreen({ results, pool, isExam, username, onEnd, onMenu }) {
  const [review, setReview] = useState(false);
  const nomeDisplay = username.charAt(0).toUpperCase() + username.slice(1);

  const counts = { OTTIMO: 0, BUONO: 0, SUFFICIENTE: 0, INSUFFICIENTE: 0 };
  let totalScore = 0;
  results.forEach(r => {
    if (r.fb?.voto) {
      counts[r.fb.voto] = (counts[r.fb.voto] || 0) + 1;
      totalScore += VOTE[r.fb.voto]?.score || 0;
    }
  });
  const maxScore = pool.length * 4;
  const pct = Math.round((totalScore / maxScore) * 100);
  const examGrade = isExam ? Math.min(30, Math.max(18, Math.round(18 + (pct / 100) * 12))) : null;
  const passed = examGrade >= 18;

  return (
    <div style={{ minHeight: '100vh', background: C.paper }}>
      <Masthead nome={nomeDisplay} onMenu={onMenu} />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: C.ink4, marginBottom: 12 }}>
          {isExam ? 'Simulazione esame · Risultato finale' : 'Sessione completata'}
        </div>

        <h2 style={{ fontFamily: F.serif, fontSize: 36, fontWeight: 700, color: isExam ? (passed ? C.green : C.red) : C.ink, marginBottom: 8, letterSpacing: '-.02em' }}>
          {isExam ? `${examGrade} / 30` : `${pct}% corretto`}
        </h2>
        <p style={{ fontSize: 14, color: C.ink3, marginBottom: 40 }}>
          {pool.length} domande · {nomeDisplay}
          {isExam && <span style={{ marginLeft: 12, color: passed ? C.green : C.red, fontWeight: 600 }}>
            {passed ? '— Sufficiente' : '— Non sufficiente'}
          </span>}
        </p>

        <Rule />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: C.rule, border: `1px solid ${C.rule}`, marginBottom: 40, marginTop: 1 }}>
          {Object.entries(counts).map(([voto, n]) => {
            const v = VOTE[voto];
            return (
              <div key={voto} style={{ background: C.white, padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: F.mono, fontSize: 28, fontWeight: 500, color: v.text, lineHeight: 1, marginBottom: 6 }}>{n}</div>
                <div style={{ fontFamily: F.mono, fontSize: 9, letterSpacing: '.08em', textTransform: 'uppercase', color: C.ink4 }}>{v.label}</div>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
          <Btn onClick={onMenu}>Menu principale</Btn>
          <Btn variant="secondary" onClick={onEnd}>Nuova sessione</Btn>
          <Btn variant="ghost" onClick={() => setReview(r => !r)}>
            {review ? 'Chiudi revisione' : 'Rivedi le risposte'}
          </Btn>
        </div>

        {review && results.map((r, i) => {
          const vv = VOTE[r.fb?.voto] || VOTE.INSUFFICIENTE;
          return (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.rule}`, borderRadius: 3, padding: '24px 28px', marginBottom: 12, animation: 'fadeUp .2s ease' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 10 }}>
                <span style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: vv.text }}>
                  {vv.label} · {r.fb?.punteggio}/10
                </span>
                <span style={{ fontFamily: F.mono, fontSize: 10, color: C.ink4 }}>{r.q.argomento}</span>
                {r.q.generata && <span style={{ fontFamily: F.mono, fontSize: 9, color: C.ink4 }}>· Generata</span>}
              </div>
              <p style={{ fontFamily: F.serif, fontSize: 16, fontWeight: 600, color: C.ink, marginBottom: 12, lineHeight: 1.4 }}>
                {r.q.domanda}
              </p>
              <div style={{ fontSize: 13, color: C.ink3, background: C.paper, border: `1px solid ${C.rule}`, borderRadius: 2, padding: '8px 12px', marginBottom: 10 }}>
                <span style={{ fontFamily: F.mono, fontSize: 9, textTransform: 'uppercase', letterSpacing: '.08em', color: C.ink4 }}>Tua risposta: </span>
                {r.risposta}
              </div>
              {r.fb?.feedback && (
                <p style={{ fontSize: 13, color: C.ink2, lineHeight: 1.65, borderLeft: `2px solid ${vv.rule}`, paddingLeft: 12, margin: 0 }}>
                  {r.fb.feedback}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── ROOT ──────────────────────────────────────────────────────────────────
export default function App() {
  const [username, setUsername] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY))?.username || null; }
    catch { return null; }
  });
  const [screen, setScreen] = useState('setup'); // setup | quiz
  const [session, setSession] = useState(null);

  const handleLogin = u => {
    saveSession({ username: u });
    setUsername(u);
  };

  const handleLogout = () => {
    clearSession();
    setUsername(null);
    setSession(null);
    setScreen('setup');
  };

  const handleStart = s => { setSession(s); setScreen('quiz'); };
  const handleMenu  = () => { setSession(null); setScreen('setup'); };

  if (!username) return <LoginScreen onLogin={handleLogin} />;

  if (screen === 'quiz' && session) {
    return (
      <QuizScreen
        {...session}
        username={username}
        onEnd={() => setScreen('setup')}
        onMenu={handleMenu}
      />
    );
  }

  return (
    <SetupScreen
      username={username}
      onStart={handleStart}
      onLogout={handleLogout}
    />
  );
}
