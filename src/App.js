import React, { useState, useCallback } from 'react';
import domande, { argomenti } from './domande';

// --- CONFIG ----------------------------------------------------------------
const UTENTI = {
  'edoardo': 'medicina2025',
  'enrica':   'pappagramma',
  'niccolo':  'gintonic',
  'eleonora':    'cardiologia2027',
  'martina':    'cannolosiciliano',
  'veronica':  'sonoscarsaapadel',
  'chiaram':  'babe',
  'matilde':  'matilde02'
};

const EXAM_N = 23;
const SESSION_KEY  = 'tm_session_v5';
const STATS_PREFIX = 'tm_stats_v5_';
const API_KEY = process.env.REACT_APP_ANTHROPIC_KEY || '';

// --- DESIGN ----------------------------------------------------------------
const C = {
  paper:'#FAFAF8', white:'#FFFFFF',
  ink:'#1A1A1A', ink2:'#3D3D3D', ink3:'#6B6B6B', ink4:'#A0A0A0',
  rule:'#E0DDD8',
  red:'#8B1A2F', redLight:'#F9F0F2', redRule:'#C4566A',
  green:'#1A5C3A', greenBg:'#F0F7F3', greenRule:'#5A9E7A',
  amber:'#7A5200', amberBg:'#FDF6E8', amberRule:'#C49A3C',
  slate:'#3B4A5A', slateBg:'#EFF3F7', slateRule:'#7A9AB8',
};
const F = {
  serif:"'Playfair Display', Georgia, serif",
  sans:"'Inter', system-ui, sans-serif",
  mono:"'IBM Plex Mono', monospace",
};
const VOTE = {
  OTTIMO:        { bg:C.greenBg,  rule:C.greenRule,  text:C.green,  label:'Ottimo',        score:4 },
  BUONO:         { bg:C.slateBg,  rule:C.slateRule,  text:C.slate,  label:'Buono',         score:3 },
  SUFFICIENTE:   { bg:C.amberBg,  rule:C.amberRule,  text:C.amber,  label:'Sufficiente',   score:2 },
  INSUFFICIENTE: { bg:C.redLight, rule:C.redRule,    text:C.red,    label:'Insufficiente', score:0 },
};

// --- HELPERS ---------------------------------------------------------------
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
const cap = s => (s && s.charAt(0).toUpperCase() + s.slice(1)) || '';

// Argomenti puliti (no undefined/null)
const argomentiPuliti = (argomenti || []).filter(a => typeof a === 'string' && a.length > 0);

function loadStats(username) {
  try { return JSON.parse(localStorage.getItem(STATS_PREFIX + username)) || {}; }
  catch { return {}; }
}
function saveStats(username, stats) {
  try { localStorage.setItem(STATS_PREFIX + username, JSON.stringify(stats)); } catch {}
}
function addResult(username, argomento, voto) {
  const stats = loadStats(username);
  if (!stats[argomento]) stats[argomento] = { OTTIMO:0, BUONO:0, SUFFICIENTE:0, INSUFFICIENTE:0, total:0 };
  stats[argomento][voto] = (stats[argomento][voto] || 0) + 1;
  stats[argomento].total = (stats[argomento].total || 0) + 1;
  saveStats(username, stats);
  return stats;
}
function loadSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)) || null; } catch { return null; }
}
function saveSession(s) { try { localStorage.setItem(SESSION_KEY, JSON.stringify(s)); } catch {} }
function clearSession() { try { localStorage.removeItem(SESSION_KEY); } catch {} }

async function callClaude(system, userMsg, maxTokens = 1000) {
  if (!API_KEY) throw new Error("API key non configurata. Contatta l'amministratore.");
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'x-api-key': API_KEY,
      'anthropic-version':'2023-06-01',
      'anthropic-dangerous-direct-browser-access':'true',
    },
   body: JSON.stringify({ model:'claude-haiku-4-5-20251001', max_tokens:400, system, messages:[{ role:'user', content:userMsg }] }),
  });
  if (!res.ok) { const e = await res.json().catch(()=>({})); throw new Error(e.error?.message || `Errore API ${res.status}`); }
  const data = await res.json();
  return data.content.map(b => b.text||'').join('');
}

async function correggi(domanda, risposta, rispostaCorretta) {
  const text = await callClaude(
    `Sei un professore di Terapia Medica all'UNISR che corregge le risposte di studenti del 5° anno di medicina che si preparano all'esame.

PRINCIPIO FONDAMENTALE: valuta SOLO quello che la domanda chiede esplicitamente. Non penalizzare mai per informazioni non richieste dalla domanda che lo studente non ha fornito.

CRITERI DI VALUTAZIONE:
- OTTIMO: la risposta copre tutto quello che la domanda chiede, anche se espressa con parole diverse dalla dispensa
- BUONO: la risposta copre la maggior parte di quello che chiede la domanda, manca qualcosa di esplicitamente richiesto
- SUFFICIENTE: la risposta coglie l'idea principale ma manca una parte significativa di quello che era chiesto
- INSUFFICIENTE: la risposta e' errata, fuori tema o vuota

REGOLE CRITICHE SUL PUNTEGGIO:
1. Se la domanda chiede N elementi di una lista (es. "3 farmaci", "2 controindicazioni") e lo studente fornisce N elementi corretti, anche se diversi da quelli della dispensa ma clinicamente validi, la risposta e' OTTIMO — non penalizzare perche' ha scelto elementi diversi dalla lista modello
2. Se lo studente aggiunge dettagli CORRETTI non richiesti dalla domanda, non cambia il voto (non premia ma non penalizza)
3. Se lo studente aggiunge dettagli ERRATI o IMPRECISI non richiesti, segnalalo nel feedback e penalizza proporzionalmente all'errore
4. Non penalizzare per mancanza di dettagli molecolari o biochimici avanzati se la domanda non li chiede esplicitamente
5. Non penalizzare per sinonimi corretti, nomi commerciali, o formulazioni diverse ma equivalenti
6. Il confronto va fatto con QUELLO CHE LA DOMANDA CHIEDE, non con la lunghezza o completezza della risposta modello

FEEDBACK:
- Inizia sempre con quello che era corretto
- Segnala solo le mancanze di cose ESPLICITAMENTE richieste dalla domanda
- Se lo studente ha aggiunto qualcosa di errato, spiegalo chiaramente
- Tono costruttivo e clinico, non accademico

Rispondi SOLO con JSON valido, nessun testo fuori dal JSON, nessun markdown.
Formato: {"voto":"OTTIMO"|"BUONO"|"SUFFICIENTE"|"INSUFFICIENTE","punteggio":<0-10>,"feedback":"<2-4 righe: prima il positivo, poi eventuali mancanze o errori aggiunti>","concetti":["<c1>","<c2>","<c3>"]}`,
    `DOMANDA: ${domanda}\nRISPOSTA STUDENTE: ${risposta||"(nessuna)"}\nRISPOSTA DISPENSA: ${rispostaCorretta}`
  );
  return JSON.parse(text.replace(/```json|```/g,'').trim());
}

// --- PRIMITIVES ------------------------------------------------------------
const Rule = ({ color=C.rule, my=0 }) => <div style={{ height:1, backgroundColor:color, margin:`${my}px 0` }} />;
const RedRule = () => <div style={{ height:2, backgroundColor:C.red, width:48, marginBottom:24 }} />;
const Label = ({ children }) => (
  <div style={{ fontFamily:F.mono, fontSize:10, fontWeight:500, letterSpacing:'.1em', textTransform:'uppercase', color:C.ink4, marginBottom:8 }}>{children}</div>
);

const Btn = ({ children, onClick, variant='primary', disabled, full, style:extra={} }) => {
  const base = {
    fontFamily:F.sans, fontSize:13, fontWeight:600, letterSpacing:'.01em',
    border:'none', borderRadius:3, padding:'11px 22px',
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .45 : 1,
    transition:'opacity .15s', display:'inline-flex', alignItems:'center', gap:8,
    width: full ? '100%' : undefined, justifyContent: full ? 'center' : undefined, ...extra,
  };
  const vs = {
    primary:   { background:C.ink,   color:C.white },
    secondary: { background:C.white, color:C.ink,  border:`1px solid ${C.rule}` },
    ghost:     { background:'transparent', color:C.ink3, border:`1px solid ${C.rule}` },
    red:       { background:C.red,   color:C.white },
  };
  return <button style={{ ...base, ...vs[variant] }} onClick={onClick} disabled={disabled}>{children}</button>;
};

const FieldInput = ({ label, type='text', error, ...props }) => (
  <div style={{ marginBottom:20 }}>
    {label && <Label>{label}</Label>}
    <input type={type} {...props} style={{
      width:'100%', padding:'10px 12px',
      border:`1px solid ${error ? C.red : C.rule}`, borderRadius:3,
      fontSize:14, fontFamily: type==='password' ? F.mono : F.sans,
      color:C.ink, background:C.white, outline:'none', transition:'border-color .15s',
    }}
    onFocus={e=>e.target.style.borderColor=error?C.red:C.ink}
    onBlur={e=>e.target.style.borderColor=error?C.red:C.rule}
    />
  </div>
);

const Spinner = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" style={{ animation:'spin .7s linear infinite', flexShrink:0 }}>
    <circle cx={7} cy={7} r={5.5} stroke="currentColor" strokeOpacity={.25} strokeWidth={2} fill="none"/>
    <path d="M7 1.5a5.5 5.5 0 0 1 5.5 5.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" fill="none"/>
  </svg>
);

const Masthead = ({ nome, onMenu, onLogout, extra }) => (
  <div style={{ background:C.white, borderBottom:`1px solid ${C.rule}` }}>
    <div style={{ maxWidth:760, margin:'0 auto', padding:'0 24px' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:52 }}>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <span style={{ fontFamily:F.serif, fontSize:16, fontWeight:700, color:C.ink }}>Terapia Medica</span>
          {onMenu && (
            <button onClick={onMenu} style={{
              fontSize:11, fontFamily:F.mono, letterSpacing:'.07em', textTransform:'uppercase',
              color:C.ink3, background:'none', border:`1px solid ${C.rule}`, borderRadius:2,
              padding:'4px 10px', cursor:'pointer',
            }}>Menu</button>
          )}
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          {extra}
          {nome && <span style={{ fontSize:13, color:C.ink3 }}>{nome}</span>}
          {onLogout && (
            <button onClick={onLogout} style={{
              fontSize:11, color:C.ink4, background:'none', border:'none',
              cursor:'pointer', fontFamily:F.mono, letterSpacing:'.06em', textTransform:'uppercase',
            }}>Esci</button>
          )}
        </div>
      </div>
      <div style={{ height:2, backgroundColor:C.red }} />
    </div>
  </div>
);

// --- LOGIN -----------------------------------------------------------------
function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [err, setErr] = useState('');

  const attempt = () => {
    const u = (username || '').trim().toLowerCase();
    if (UTENTI[u] && UTENTI[u] === pwd) onLogin(u);
    else { setErr('Username o password non corretti.'); setPwd(''); }
  };

  return (
    <div style={{ minHeight:'100vh', background:C.paper, display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}>
      <div style={{ width:'100%', maxWidth:360 }}>
        <div style={{ fontFamily:F.mono, fontSize:10, letterSpacing:'.12em', textTransform:'uppercase', color:C.ink4, marginBottom:16 }}>
          Universita Vita-Salute San Raffaele
        </div>
        <h1 style={{ fontFamily:F.serif, fontSize:32, fontWeight:700, color:C.ink, lineHeight:1.2, marginBottom:6 }}>Terapia Medica</h1>
        <p style={{ fontSize:14, color:C.ink3, marginBottom:32, lineHeight:1.6 }}>Piattaforma di preparazione all'esame</p>
        <RedRule />
        <FieldInput label="Username" placeholder="es. edoardo" value={username}
          onChange={e=>{ setUsername(e.target.value); setErr(''); }}
          onKeyDown={e=>e.key==='Enter'&&attempt()} error={!!err} />
        <FieldInput label="Password" type="password" placeholder="-------" value={pwd}
          onChange={e=>{ setPwd(e.target.value); setErr(''); }}
          onKeyDown={e=>e.key==='Enter'&&attempt()} error={!!err} />
        {err && <div style={{ fontSize:12, color:C.red, marginBottom:14, fontFamily:F.mono }}>{err}</div>}
        <Btn onClick={attempt} full>Accedi</Btn>
      </div>
    </div>
  );
}

// --- STATS SCREEN ----------------------------------------------------------
function StatsScreen({ username, onBack, onRetry }) {
  const stats = loadStats(username);
  const nomeDisplay = cap(username);
  const argsConDati = argomentiPuliti.filter(a => stats[a] && stats[a].total > 0);
  const totaleRisposte = argsConDati.reduce((s, a) => s + (stats[a].total||0), 0);

  const argSbagliati = argsConDati
    .filter(a => {
      const s = stats[a];
      return s && s.total > 0 && Math.round((s.INSUFFICIENTE||0) / s.total * 100) >= 30;
    })
    .sort((a, b) => {
      const pA = Math.round((stats[a].INSUFFICIENTE||0) / stats[a].total * 100);
      const pB = Math.round((stats[b].INSUFFICIENTE||0) / stats[b].total * 100);
      return pB - pA;
    });

  return (
    <div style={{ minHeight:'100vh', background:C.paper }}>
      <Masthead nome={nomeDisplay} onMenu={onBack} />
      <div style={{ maxWidth:760, margin:'0 auto', padding:'44px 24px' }}>
        <div style={{ fontFamily:F.mono, fontSize:10, letterSpacing:'.12em', textTransform:'uppercase', color:C.ink4, marginBottom:12 }}>
          Statistiche personali
        </div>
        <h2 style={{ fontFamily:F.serif, fontSize:28, fontWeight:700, color:C.ink, marginBottom:6 }}>
          {nomeDisplay}
        </h2>
        <p style={{ fontSize:14, color:C.ink3, marginBottom:36 }}>
          {totaleRisposte} risposte totali
        </p>

        {totaleRisposte === 0 ? (
          <div style={{ background:C.white, border:`1px solid ${C.rule}`, borderRadius:4, padding:'40px 32px', textAlign:'center' }}>
            <p style={{ fontFamily:F.serif, fontSize:18, color:C.ink3 }}>Nessuna statistica ancora.</p>
            <p style={{ fontSize:13, color:C.ink4, marginTop:8 }}>Completa almeno una sessione per vedere i dati.</p>
            <div style={{ marginTop:24 }}><Btn onClick={onBack} variant="secondary">Torna al menu</Btn></div>
          </div>
        ) : (
          <>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:1, background:C.rule, border:`1px solid ${C.rule}`, marginBottom:24 }}>
              {[
                { label:'Ottimo',        val: argsConDati.reduce((s,a)=>s+(stats[a].OTTIMO||0),0),        ...VOTE.OTTIMO },
                { label:'Buono',         val: argsConDati.reduce((s,a)=>s+(stats[a].BUONO||0),0),         ...VOTE.BUONO },
                { label:'Sufficiente',   val: argsConDati.reduce((s,a)=>s+(stats[a].SUFFICIENTE||0),0),   ...VOTE.SUFFICIENTE },
                { label:'Insufficiente', val: argsConDati.reduce((s,a)=>s+(stats[a].INSUFFICIENTE||0),0), ...VOTE.INSUFFICIENTE },
              ].map(x => (
                <div key={x.label} style={{ background:C.white, padding:'18px 16px', textAlign:'center' }}>
                  <div style={{ fontFamily:F.mono, fontSize:26, fontWeight:500, color:x.text, lineHeight:1, marginBottom:4 }}>{x.val}</div>
                  <div style={{ fontFamily:F.mono, fontSize:9, letterSpacing:'.08em', textTransform:'uppercase', color:C.ink4 }}>{x.label}</div>
                </div>
              ))}
            </div>

            {argSbagliati.length > 0 && (
              <div style={{ background:C.redLight, border:`1px solid ${C.redRule}`, borderRadius:4, padding:'20px 24px', marginBottom:28 }}>
                <div style={{ fontFamily:F.mono, fontSize:10, letterSpacing:'.1em', textTransform:'uppercase', color:C.red, marginBottom:8 }}>
                  Argomenti da ripassare
                </div>
                <p style={{ fontSize:13, color:C.ink2, marginBottom:16, lineHeight:1.5 }}>
                  Hai piu' del 30% di risposte insufficienti in: <strong>{argSbagliati.join(', ')}</strong>
                </p>
                <Btn variant="red" onClick={() => onRetry(argSbagliati)}>
                  Ripassa i piu' sbagliati
                </Btn>
              </div>
            )}

            <Label>Dettaglio per argomento</Label>
            <div style={{ marginTop:12 }}>
              {argsConDati.map(a => {
                const s = stats[a];
                const tot = s.total || 1;
                const pctOk = Math.round(((s.OTTIMO||0) + (s.BUONO||0)) / tot * 100);
                const barColor = pctOk >= 70 ? C.green : pctOk >= 40 ? C.amber : C.red;
                return (
                  <div key={a} style={{ background:C.white, border:`1px solid ${C.rule}`, borderRadius:3, padding:'18px 20px', marginBottom:8 }}>
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10 }}>
                      <span style={{ fontSize:13, fontWeight:600, color:C.ink }}>{a}</span>
                      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                        <span style={{ fontFamily:F.mono, fontSize:11, color:C.ink4 }}>{s.total} risposte</span>
                        <span style={{ fontFamily:F.mono, fontSize:12, fontWeight:600, color:barColor }}>{pctOk}%</span>
                        <button onClick={() => onRetry([a])} style={{
                          fontSize:10, fontFamily:F.mono, letterSpacing:'.06em', textTransform:'uppercase',
                          color:C.red, background:'none', border:`1px solid ${C.redRule}`, borderRadius:2,
                          padding:'3px 8px', cursor:'pointer',
                        }}>Ripassa</button>
                      </div>
                    </div>
                    <div style={{ height:4, background:C.rule, borderRadius:2, overflow:'hidden' }}>
                      <div style={{ height:'100%', width:`${pctOk}%`, background:barColor, borderRadius:2, transition:'width .4s ease' }} />
                    </div>
                    <div style={{ display:'flex', gap:16, marginTop:10 }}>
                      {['OTTIMO','BUONO','SUFFICIENTE','INSUFFICIENTE'].map(v => (
                        <span key={v} style={{ fontFamily:F.mono, fontSize:10, color: (s[v]||0) > 0 ? VOTE[v].text : C.ink4 }}>
                          {VOTE[v].label}: {s[v]||0}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// --- SETUP -----------------------------------------------------------------
function SetupScreen({ username, onStart, onLogout, onStats }) {
  const [mode, setMode] = useState('argomento');
  const [selectedArgs, setSelectedArgs] = useState([]);
  const [numQ, setNumQ] = useState(10);
  const [searchArg, setSearchArg] = useState('');

  const toggleArg = a => setSelectedArgs(p => p.includes(a) ? p.filter(x=>x!==a) : [...p,a]);
  const allSel = selectedArgs.length === argomentiPuliti.length;

  // RICERCA DIFENSIVA: controlla che a sia stringa prima di chiamare toLowerCase
  const argFiltered = argomentiPuliti.filter(a =>
    typeof a === 'string' && a.toLowerCase().includes((searchArg||'').toLowerCase())
  );

  const realPool = mode==='argomento'
    ? (domande||[]).filter(d => d && d.argomento && selectedArgs.includes(d.argomento))
    : (domande||[]);
  const maxQ = realPool.length;
  const canStart = mode==='esame' || mode==='random' || (mode==='argomento' && selectedArgs.length>0);
  const nomeDisplay = cap(username);

  const go = () => {
    let pool;
    if (mode==='esame') pool = shuffle(domande||[]).slice(0, EXAM_N);
    else pool = shuffle(realPool).slice(0, Math.min(numQ, maxQ));
    onStart({ pool, isExam:mode==='esame', argomentiScelti:mode==='argomento'?selectedArgs:argomentiPuliti });
  };

  return (
    <div style={{ minHeight:'100vh', background:C.paper }}>
      <Masthead nome={nomeDisplay} onLogout={onLogout} extra={
        <button onClick={onStats} style={{
          fontSize:11, fontFamily:F.mono, letterSpacing:'.07em', textTransform:'uppercase',
          color:C.ink3, background:'none', border:`1px solid ${C.rule}`, borderRadius:2,
          padding:'4px 10px', cursor:'pointer',
        }}>Statistiche</button>
      }/>

      <div style={{ maxWidth:760, margin:'0 auto', padding:'44px 24px' }}>
        <h2 style={{ fontFamily:F.serif, fontSize:28, fontWeight:700, color:C.ink, marginBottom:6, letterSpacing:'-.02em' }}>
          Buono studio, {nomeDisplay}.
        </h2>
        <p style={{ fontSize:14, color:C.ink3, marginBottom:36, lineHeight:1.6 }}>
          Scegli modalita e argomenti, poi inizia la sessione.
        </p>

        <Label>Modalita</Label>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:32 }}>
          {[
            { key:'argomento', title:'Per argomento',    sub:'Scegli i capitoli' },
            { key:'random',    title:'Casuale',           sub:'Mix di tutto il programma' },
            { key:'esame',     title:'Simulazione esame', sub:`${EXAM_N} domande - voto 18-30` },
          ].map(m => {
            const active = mode===m.key;
            return (
              <button key={m.key} onClick={()=>setMode(m.key)} style={{
                background: active ? C.ink : C.white,
                border:`1px solid ${active ? C.ink : C.rule}`,
                borderRadius:3, padding:'14px 16px', cursor:'pointer', textAlign:'left', transition:'all .15s',
              }}>
                <div style={{ fontSize:13, fontWeight:600, color:active?C.white:C.ink, marginBottom:3 }}>{m.title}</div>
                <div style={{ fontSize:11, color:active?'rgba(255,255,255,.55)':C.ink4 }}>{m.sub}</div>
              </button>
            );
          })}
        </div>

        {mode==='argomento' && (
          <>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
              <Label>Argomenti</Label>
              <button onClick={()=>setSelectedArgs(allSel?[]:[...argomentiPuliti])} style={{
                fontSize:11, color:C.red, background:'none', border:'none', cursor:'pointer',
                fontFamily:F.mono, letterSpacing:'.06em', textTransform:'uppercase',
              }}>{allSel?'Deseleziona tutti':'Seleziona tutti'}</button>
            </div>

            <input
              type="text"
              placeholder="Cerca argomento..."
              value={searchArg}
              onChange={e => setSearchArg(e.target.value || '')}
              style={{
                width:'100%', padding:'9px 12px', marginBottom:10,
                border:`1px solid ${C.rule}`, borderRadius:3,
                fontSize:13, fontFamily:F.sans, color:C.ink,
                background:C.white, outline:'none',
              }}
              onFocus={e=>e.target.style.borderColor=C.ink}
              onBlur={e=>e.target.style.borderColor=C.rule}
            />

            <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:28, maxHeight:240, overflowY:'auto' }}>
              {argFiltered.map(a => {
                const sel = selectedArgs.includes(a);
                const s = loadStats(username)[a];
                const hasDati = s && s.total > 0;
                const pctOk = hasDati ? Math.round(((s.OTTIMO||0)+(s.BUONO||0))/s.total*100) : null;
                return (
                  <button key={a} onClick={()=>toggleArg(a)} style={{
                    background: sel ? C.ink : C.white,
                    border:`1px solid ${sel ? C.ink : C.rule}`,
                    borderRadius:2, padding:'5px 12px', cursor:'pointer',
                    fontSize:12, fontFamily:F.sans, fontWeight:sel?600:400,
                    color: sel ? C.white : C.ink3, transition:'all .12s',
                    display:'flex', alignItems:'center', gap:7,
                  }}>
                    {a}
                    {hasDati && (
                      <span style={{
                        fontFamily:F.mono, fontSize:9,
                        color: sel ? 'rgba(255,255,255,.6)' : (pctOk>=70?C.green:pctOk>=40?C.amber:C.red),
                      }}>{pctOk}%</span>
                    )}
                  </button>
                );
              })}
              {argFiltered.length === 0 && (
                <span style={{ fontSize:12, color:C.ink4, fontFamily:F.mono }}>Nessun argomento trovato.</span>
              )}
            </div>
          </>
        )}

        {mode!=='esame' && (
          <div style={{ marginBottom:28 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:10 }}>
              <Label>Numero di domande</Label>
              <span style={{ fontFamily:F.mono, fontSize:18, fontWeight:500, color:C.ink }}>{Math.min(numQ,maxQ)}</span>
            </div>
            <input type="range" min={1} max={Math.max(1,maxQ)} value={Math.min(numQ,maxQ)}
              onChange={e=>setNumQ(+e.target.value)} style={{ width:'100%', accentColor:C.ink }} />
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:10, fontFamily:F.mono, color:C.ink4, marginTop:4 }}>
              <span>1</span><span>{Math.max(1,maxQ)}</span>
            </div>
          </div>
        )}

        <Rule my={0} />
        <div style={{ paddingTop:28 }}>
          <Btn onClick={go} disabled={!canStart} style={{ minWidth:200 }}>
            {mode==='esame' ? 'Inizia simulazione esame' : 'Inizia sessione'}
          </Btn>
        </div>
      </div>
    </div>
  );
}

// --- QUIZ ------------------------------------------------------------------
function QuizScreen({ pool:initialPool, isExam, username, onEnd, onMenu }) {
  const [pool] = useState(initialPool || []);
  const [current, setCurrent] = useState(0);
  const [risposta, setRisposta] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [err, setErr] = useState('');
  const [showRef, setShowRef] = useState(false);
  const [results, setResults] = useState([]);
  const [done, setDone] = useState(false);

  const q = pool[current];
  const pct = pool.length > 0 ? (current / pool.length) * 100 : 0;
  const nomeDisplay = cap(username);

  const handleSubmit = async () => {
    if (!q) return;
    setErr(''); setLoading(true); setFeedback(null);
    try {
      const fb = await correggi(q.domanda, risposta, q.risposta);
      setFeedback(fb);
      setResults(p => [...p, { q, risposta, fb }]);
      addResult(username, q.argomento, fb.voto);
    } catch(e) { setErr(e.message || 'Errore. Riprova.'); }
    finally { setLoading(false); }
  };

  const advance = useCallback(() => {
    if (current + 1 >= pool.length) setDone(true);
    else { setCurrent(c=>c+1); setRisposta(''); setFeedback(null); setErr(''); setShowRef(false); }
  }, [current, pool.length]);

  const handleSkip = () => {
    if (!q) return;
    setResults(p => [...p, { q, risposta:'(saltata)', fb:{ voto:'INSUFFICIENTE', punteggio:0, feedback:'Domanda saltata.', concetti:[] } }]);
    addResult(username, q.argomento, 'INSUFFICIENTE');
    advance();
  };

  if (done || !q) return <ResultsScreen results={results} pool={pool} isExam={isExam} username={username} onEnd={onEnd} onMenu={onMenu} />;

  const vv = feedback ? (VOTE[feedback.voto] || VOTE.SUFFICIENTE) : null;

  return (
    <div style={{ minHeight:'100vh', background:C.paper }}>
      <style>{`@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}*{box-sizing:border-box}`}</style>
      <Masthead nome={nomeDisplay} onMenu={onMenu} extra={
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          {isExam && <span style={{ fontFamily:F.mono, fontSize:10, letterSpacing:'.1em', textTransform:'uppercase', color:C.red }}>Esame</span>}
          <span style={{ fontFamily:F.mono, fontSize:12, color:C.ink4 }}>{current+1} / {pool.length}</span>
        </div>
      }/>
      <div style={{ height:2, background:C.rule }}>
        <div style={{ height:'100%', background:C.red, width:`${pct}%`, transition:'width .4s ease' }}/>
      </div>

      <div style={{ maxWidth:720, margin:'0 auto', padding:'36px 24px' }}>
        <div style={{ background:C.white, border:`1px solid ${C.rule}`, borderRadius:4, padding:'30px 34px', marginBottom:16 }}>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:18 }}>
            <span style={{ fontFamily:F.mono, fontSize:10, letterSpacing:'.1em', textTransform:'uppercase', color:C.red }}>{q.argomento || ''}</span>
            <span style={{ fontFamily:F.mono, fontSize:9, color:C.ink4, marginLeft:'auto' }}>#{q.id}</span>
          </div>

          <p style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, lineHeight:1.5, color:C.ink, marginBottom:22, letterSpacing:'-.01em' }}>
            {q.domanda || ''}
          </p>

          {!showRef
            ? <button onClick={()=>setShowRef(true)} style={{ fontSize:11, fontFamily:F.mono, letterSpacing:'.06em', textTransform:'uppercase', color:C.ink4, background:'none', border:'none', cursor:'pointer', marginBottom:18, textDecoration:'underline' }}>
                Mostra risposta di riferimento
              </button>
            : <div style={{ background:C.paper, border:`1px solid ${C.rule}`, borderLeft:`3px solid ${C.red}`, padding:'11px 15px', marginBottom:18, borderRadius:2 }}>
                <div style={{ fontFamily:F.mono, fontSize:9, letterSpacing:'.1em', textTransform:'uppercase', color:C.ink4, marginBottom:5 }}>Risposta dispensa Piazza</div>
                <p style={{ fontSize:13, color:C.ink2, lineHeight:1.65, margin:0 }}>{q.risposta || ''}</p>
              </div>
          }

          <Label>La tua risposta</Label>
          <textarea value={risposta} onChange={e=>setRisposta(e.target.value)} disabled={!!feedback||loading}
            placeholder="Rispondi in max 2 righe..." rows={3}
            style={{ width:'100%', padding:'11px 13px', border:`1px solid ${C.rule}`, borderRadius:3, fontSize:15, fontFamily:F.sans, color:C.ink, background:feedback?C.paper:C.white, resize:'vertical', outline:'none', lineHeight:1.6 }}
            onFocus={e=>{ if(!feedback) e.target.style.borderColor=C.ink; }}
            onBlur={e=>{ e.target.style.borderColor=C.rule; }}
          />
          <div style={{ display:'flex', justifyContent:'space-between', marginTop:5 }}>
            <span style={{ fontFamily:F.mono, fontSize:10, color:C.ink4 }}>{risposta.length} car.</span>
          </div>
          {err && <p style={{ fontSize:12, color:C.red, marginTop:10, fontFamily:F.mono }}>{err}</p>}

          {!feedback && (
            <div style={{ display:'flex', gap:10, marginTop:18 }}>
              <Btn onClick={handleSubmit} disabled={loading}>
                {loading ? <><Spinner /> Correzione...</> : 'Correggi risposta'}
              </Btn>
              {!isExam && <Btn variant="ghost" onClick={handleSkip} disabled={loading}>Salta</Btn>}
            </div>
          )}
        </div>

        {feedback && vv && (
          <div style={{ background:vv.bg, border:`1px solid ${vv.rule}`, borderRadius:4, padding:'26px 30px', animation:'fadeUp .25s ease' }}>
            <div style={{ display:'flex', alignItems:'baseline', gap:14, marginBottom:14 }}>
              <span style={{ fontFamily:F.serif, fontSize:19, fontWeight:700, color:vv.text }}>{vv.label}</span>
              <span style={{ fontFamily:F.mono, fontSize:13, color:vv.text }}>{feedback.punteggio} / 10</span>
            </div>
            <Rule color={vv.rule} />
            <p style={{ fontSize:14, lineHeight:1.75, color:C.ink2, margin:'14px 0', paddingLeft:14, borderLeft:`2px solid ${vv.rule}` }}>
              {feedback.feedback}
            </p>
            {(feedback.concetti||[]).length > 0 && (
              <div style={{ display:'flex', flexWrap:'wrap', gap:7, marginBottom:18 }}>
                {feedback.concetti.map((c,i) => (
                  <span key={i} style={{ fontFamily:F.mono, fontSize:11, color:vv.text, background:vv.bg, border:`1px solid ${vv.rule}`, borderRadius:2, padding:'3px 9px' }}>{c}</span>
                ))}
              </div>
            )}
            <div style={{ display:'flex', gap:10 }}>
              <Btn onClick={advance}>{current+1>=pool.length?'Vedi risultati':'Prossima domanda'}</Btn>
              <Btn variant="secondary" onClick={onMenu}>Menu</Btn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// --- RESULTS ---------------------------------------------------------------
function ResultsScreen({ results, pool, isExam, username, onEnd, onMenu }) {
  const [review, setReview] = useState(false);
  const nomeDisplay = cap(username);

  const counts = { OTTIMO:0, BUONO:0, SUFFICIENTE:0, INSUFFICIENTE:0 };
  let totalScore = 0;
  (results||[]).forEach(r => {
    if (r.fb?.voto) { counts[r.fb.voto]=(counts[r.fb.voto]||0)+1; totalScore+=VOTE[r.fb.voto]?.score||0; }
  });
  const maxScore = (pool||[]).length * 4;
  const pct = maxScore > 0 ? Math.round((totalScore/maxScore)*100) : 0;
  const examGrade = isExam ? Math.min(30, Math.max(18, Math.round(18+(pct/100)*12))) : null;
  const passed = examGrade >= 18;

  return (
    <div style={{ minHeight:'100vh', background:C.paper }}>
      <Masthead nome={nomeDisplay} onMenu={onMenu} />
      <div style={{ maxWidth:720, margin:'0 auto', padding:'44px 24px' }}>
        <div style={{ fontFamily:F.mono, fontSize:10, letterSpacing:'.12em', textTransform:'uppercase', color:C.ink4, marginBottom:12 }}>
          {isExam ? 'Simulazione esame - Risultato finale' : 'Sessione completata'}
        </div>
        <h2 style={{ fontFamily:F.serif, fontSize:34, fontWeight:700, color:isExam?(passed?C.green:C.red):C.ink, marginBottom:8, letterSpacing:'-.02em' }}>
          {isExam ? `${examGrade} / 30` : `${pct}% corretto`}
        </h2>
        <p style={{ fontSize:14, color:C.ink3, marginBottom:36 }}>
          {(pool||[]).length} domande - {nomeDisplay}
          {isExam && <span style={{ marginLeft:12, color:passed?C.green:C.red, fontWeight:600 }}>{passed?'- Sufficiente':'- Non sufficiente'}</span>}
        </p>

        <Rule />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:1, background:C.rule, border:`1px solid ${C.rule}`, marginBottom:36, marginTop:1 }}>
          {Object.entries(counts).map(([voto,n]) => {
            const v = VOTE[voto];
            return (
              <div key={voto} style={{ background:C.white, padding:'18px 14px', textAlign:'center' }}>
                <div style={{ fontFamily:F.mono, fontSize:26, fontWeight:500, color:v.text, lineHeight:1, marginBottom:4 }}>{n}</div>
                <div style={{ fontFamily:F.mono, fontSize:9, letterSpacing:'.08em', textTransform:'uppercase', color:C.ink4 }}>{v.label}</div>
              </div>
            );
          })}
        </div>

        <div style={{ display:'flex', gap:12, marginBottom:44, flexWrap:'wrap' }}>
          <Btn onClick={onMenu}>Menu principale</Btn>
          <Btn variant="secondary" onClick={onEnd}>Nuova sessione</Btn>
          <Btn variant="ghost" onClick={()=>setReview(r=>!r)}>{review?'Chiudi revisione':'Rivedi le risposte'}</Btn>
        </div>

        {review && (results||[]).map((r,i) => {
          const vv = VOTE[r.fb?.voto]||VOTE.INSUFFICIENTE;
          return (
            <div key={i} style={{ background:C.white, border:`1px solid ${C.rule}`, borderRadius:3, padding:'22px 26px', marginBottom:10, animation:'fadeUp .2s ease' }}>
              <div style={{ display:'flex', alignItems:'baseline', gap:12, marginBottom:8 }}>
                <span style={{ fontFamily:F.mono, fontSize:10, letterSpacing:'.08em', textTransform:'uppercase', color:vv.text }}>{vv.label} - {r.fb?.punteggio}/10</span>
                <span style={{ fontFamily:F.mono, fontSize:10, color:C.ink4 }}>{r.q?.argomento||''}</span>
              </div>
              <p style={{ fontFamily:F.serif, fontSize:15, fontWeight:600, color:C.ink, marginBottom:10, lineHeight:1.4 }}>{r.q?.domanda||''}</p>
              <div style={{ fontSize:13, color:C.ink3, background:C.paper, border:`1px solid ${C.rule}`, borderRadius:2, padding:'7px 11px', marginBottom:8 }}>
                <span style={{ fontFamily:F.mono, fontSize:9, textTransform:'uppercase', letterSpacing:'.08em', color:C.ink4 }}>Tua risposta: </span>{r.risposta}
              </div>
              {r.fb?.feedback && (
                <p style={{ fontSize:13, color:C.ink2, lineHeight:1.65, borderLeft:`2px solid ${vv.rule}`, paddingLeft:12, margin:0 }}>{r.fb.feedback}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- ROOT ------------------------------------------------------------------
export default function App() {
  const [username, setUsername] = useState(() => {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY))?.username || null; } catch { return null; }
  });
  const [screen, setScreen] = useState('setup');
  const [session, setSession] = useState(null);

  const handleLogin  = u => { saveSession({ username:u }); setUsername(u); };
  const handleLogout = () => { clearSession(); setUsername(null); setSession(null); setScreen('setup'); };
  const handleStart  = s => { setSession(s); setScreen('quiz'); };
  const handleMenu   = () => { setSession(null); setScreen('setup'); };
  const handleRetry  = (argsSbagliati) => {
    const pool = shuffle((domande||[]).filter(d => d && d.argomento && argsSbagliati.includes(d.argomento))).slice(0, 20);
    setSession({ pool, isExam:false, argomentiScelti:argsSbagliati });
    setScreen('quiz');
  };

  if (!username) return <LoginScreen onLogin={handleLogin} />;
  if (screen==='stats') return <StatsScreen username={username} onBack={()=>setScreen('setup')} onRetry={handleRetry} />;
  if (screen==='quiz' && session) return (
    <QuizScreen {...session} username={username} onEnd={()=>setScreen('setup')} onMenu={handleMenu} />
  );
  return <SetupScreen username={username} onStart={handleStart} onLogout={handleLogout} onStats={()=>setScreen('stats')} />;
}
