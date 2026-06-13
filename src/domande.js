// domande.js — database completo estratto dai PDF
// Formato: { id, argomento, domanda, risposta }
// Fonte: "Terapia Medica" dispensa Enrica Piazza (UNISR)

const domande = [
  // ─── 1. FEBBRE, ANTIPIRETICI E IPERTERMIA ───────────────────────────────
  { id: 1, argomento: "Febbre e antipiretici", domanda: "Quando NON si tratta la febbre?", risposta: "Quando è ben tollerata e utile come difesa: la febbre non va abbattuta di routine, ma solo se mal tollerata, molto elevata o nei soggetti fragili (cardiopatici, gravide, bambini con storia di convulsioni)." },
  { id: 2, argomento: "Febbre e antipiretici", domanda: "Indica 2 antipiretici con posologia.", risposta: "Paracetamolo 500-1000 mg ogni 6-8 h (max 3-4 g/die); ibuprofene 200-400 mg ogni 6-8 h." },
  { id: 3, argomento: "Febbre e antipiretici", domanda: "Bambino con febbre: cosa è meglio NON dare e perché?", risposta: "L'acido acetilsalicilico (aspirina), per il rischio di sindrome di Reye (encefalopatia + degenerazione epatica)." },
  { id: 4, argomento: "Febbre e antipiretici", domanda: "Bambino febbrile a 39°C con tosse/sinusite che diventa confuso e irritabile dopo un farmaco prescritto: quale farmaco?", risposta: "Aspirina → sindrome di Reye." },
  { id: 5, argomento: "Febbre e antipiretici", domanda: "Metabolita attivo della fenacetina ed esempio di posologia.", risposta: "Paracetamolo (acetaminofene); 500-1000 mg ogni 6-8 h, max 3-4 g/die." },
  { id: 6, argomento: "Febbre e antipiretici", domanda: "Prima linea nel colpo di calore.", risposta: "Raffreddamento fisico rapido (ghiaccio, coperte/immersione in acqua fredda) + reidratazione; NO antipiretici." },
  { id: 7, argomento: "Febbre e antipiretici", domanda: "Trattamento della sindrome neurolettica maligna.", risposta: "Sospendere il neurolettico, raffreddamento, idratazione, dantrolene (± bromocriptina) e benzodiazepine per l'agitazione." },
  { id: 8, argomento: "Febbre e antipiretici", domanda: "Paziente in terapia con amitriptilina con febbre >41,5°C: prima terapia?", risposta: "Sospendere il farmaco e raffreddare il paziente (sospetta sindrome ipertermica da serotoninergici/anticolinergici)." },
  { id: 9, argomento: "Febbre e antipiretici", domanda: "Paziente con tramadolo + antidepressivo (SSRI) sviluppa diarrea, confusione, crampi, ipotensione: cosa ha assunto?", risposta: "Un SSRI/serotoninergico → sindrome serotoninergica (sospendere e raffreddare)." },
  { id: 10, argomento: "Febbre e antipiretici", domanda: "Una donna in gravidanza ha febbre a 38,5°C mal tollerata: quale antipiretico preferisci e quale eviti?", risposta: "Preferire il paracetamolo (sicuro in gravidanza); evitare i FANS, soprattutto nel terzo trimestre (chiusura precoce del dotto di Botallo)." },
  { id: 11, argomento: "Febbre e antipiretici", domanda: "Qual è la dose massima giornaliera di paracetamolo nell'adulto e qual è l'organo bersaglio in caso di sovradosaggio?", risposta: "Max 3-4 g/die; in sovradosaggio è epatotossico (necrosi epatica), antidoto N-acetilcisteina." },

  // ─── 2. TERAPIA DEL DOLORE ───────────────────────────────────────────────
  { id: 12, argomento: "Terapia del dolore", domanda: "Nomina un FANS non selettivo, uno selettivo COX-2 e uno relativamente COX-1.", risposta: "Non selettivo: ibuprofene; COX-2 selettivo: etoricoxib (o celecoxib); più COX-1: ketorolac (o aspirina/indometacina)." },
  { id: 13, argomento: "Terapia del dolore", domanda: "Inibitori COX-2 con posologia.", risposta: "Etoricoxib 30-120 mg/die; celecoxib 200-400 mg/die." },
  { id: 14, argomento: "Terapia del dolore", domanda: "In quali condizioni i FANS accentuano la tossicità intestinale?", risposta: "Digiuno, uso prolungato/ad alte dosi, terapia multipla con FANS, associazione con steroidi, anticoagulanti o SSRI." },
  { id: 15, argomento: "Terapia del dolore", domanda: "Nomina 4 oppioidi forti e 2 deboli.", risposta: "Forti: morfina, ossicodone, fentanyl, buprenorfina. Deboli: codeina, tramadolo." },
  { id: 16, argomento: "Terapia del dolore", domanda: "In ordine decrescente di potenza: fentanyl, ossicodone, codeina.", risposta: "Fentanyl > ossicodone > codeina." },
  { id: 17, argomento: "Terapia del dolore", domanda: "Oppioide debole, agonista μ + inibizione reuptake serotonina/noradrenalina: quale farmaco?", risposta: "Tramadolo." },
  { id: 18, argomento: "Terapia del dolore", domanda: "Cosa associ all'ossicodone per ridurne la stipsi?", risposta: "Naloxone (associazione ossicodone+naloxone = Targin)." },
  { id: 19, argomento: "Terapia del dolore", domanda: "Paziente in morfina con controllo sub-ottimale aggiunge codeina: cosa ti aspetti?", risposta: "Nessun miglioramento: la codeina è un oppioide debole, non potenzia la morfina." },
  { id: 20, argomento: "Terapia del dolore", domanda: "Antidepressivo usato nel dolore neuropatico.", risposta: "Amitriptilina o duloxetina." },
  { id: 21, argomento: "Terapia del dolore", domanda: "Modalità di somministrazione preferibile del fentanyl nel dolore cronico.", risposta: "Transdermica (cerotto)." },
  { id: 22, argomento: "Terapia del dolore", domanda: "FANS al terzo trimestre di gravidanza: quale effetto sul feto?", risposta: "Chiusura precoce del dotto di Botallo (controindicati nel 3° trimestre)." },
  { id: 23, argomento: "Terapia del dolore", domanda: "Buprenorfina: cos'è?", risposta: "Oppioide forte agonista parziale del recettore μ (e antagonista κ); usata nel dolore cronico e nella dipendenza da oppioidi." },
  { id: 24, argomento: "Terapia del dolore", domanda: "Descrivi i tre gradini della scala OMS del dolore.", risposta: "1° FANS/paracetamolo; 2° oppioidi deboli (codeina, tramadolo) ± non-oppioidi; 3° oppioidi forti (morfina) ± non-oppioidi e adiuvanti." },
  { id: 25, argomento: "Terapia del dolore", domanda: "Quale effetto collaterale degli oppioidi NON va incontro a tolleranza e va sempre trattato in profilassi?", risposta: "La stipsi: va sempre prevenuta con lassativi, mentre nausea e sedazione tendono a ridursi nel tempo." },
  { id: 26, argomento: "Terapia del dolore", domanda: "Quali farmaci usi come adiuvanti nel dolore neuropatico?", risposta: "Antiepilettici (gabapentin, pregabalina) e antidepressivi (amitriptilina, duloxetina)." },

  // ─── 3. INFEZIONI ALTE VIE AEREE ─────────────────────────────────────────
  { id: 27, argomento: "Infezioni vie aeree superiori", domanda: "Bambino con mal di gola, essudato, febbre, NO tosse, linfonodi laterocervicali ingrossati: iter diagnostico-terapeutico.", risposta: "Sospetto SBEGA: applico il Centor score, eseguo tampone faringeo e tratto con amoxicillina (o penicillina G IM in dose unica)." },
  { id: 28, argomento: "Infezioni vie aeree superiori", domanda: "SBEGA: terapia di prima linea.", risposta: "Amoxicillina 50 mg/kg/die (max 1 g) x2 per 10 gg, oppure penicillina G benzatina IM monodose." },
  { id: 29, argomento: "Infezioni vie aeree superiori", domanda: "SBEGA con allergia a penicillina: seconda linea con dosaggi.", risposta: "Azitromicina 12 mg/kg/die (max 500 mg) x5 gg, oppure claritromicina, oppure clindamicina." },
  { id: 30, argomento: "Infezioni vie aeree superiori", domanda: "Dolore frontale alla digitopressione da 10 giorni: cosa dai?", risposta: "Sinusite batterica: amoxicillina-clavulanato 1 g ogni 8-12 h per 10 giorni." },
  { id: 31, argomento: "Infezioni vie aeree superiori", domanda: "Sinusite acuta senza beta-lattamici (allergia): cosa dai?", risposta: "Macrolide (claritromicina o azitromicina)." },
  { id: 32, argomento: "Infezioni vie aeree superiori", domanda: "Otite media acuta con versamento e bulging nel bambino: terapia.", risposta: "Amoxicillina 80-90 mg/kg/die per 7 gg (10 gg se <2 anni) + analgesia; se inefficace dopo 72 h → cefuroxime o ceftriaxone." },
  { id: 33, argomento: "Infezioni vie aeree superiori", domanda: "Otite media acuta senza bulging: cosa fare?", risposta: "Vigile attesa 48-72 h con analgesia; antibiotico solo se peggioramento o segni di bulging/otorrea." },
  { id: 34, argomento: "Infezioni vie aeree superiori", domanda: "Bambino con pertosse in fase catarrale: terapia.", risposta: "Azitromicina (10 mg/kg il 1° giorno poi 5 mg/kg per 4 gg) il prima possibile." },
  { id: 35, argomento: "Infezioni vie aeree superiori", domanda: "Nomina 3 farmaci per la tosse (classi diverse).", risposta: "Sedativi centrali (destrometorfano, codeina), mucolitici (acetilcisteina, bromexina), decongestionanti/antistaminici." },
  { id: 36, argomento: "Infezioni vie aeree superiori", domanda: "Faringotonsillite streptococcica: antibiotico di prima scelta e alternativa in allergia alle penicilline.", risposta: "Prima scelta amoxicillina (o penicillina); in allergia un macrolide come azitromicina." },
  { id: 37, argomento: "Infezioni vie aeree superiori", domanda: "Perché nella maggior parte delle faringiti acute NON è indicato l'antibiotico?", risposta: "Perché la maggior parte ha eziologia virale; l'antibiotico si riserva alle forme batteriche (streptococco) documentate o ad alta probabilità." },

  // ─── 4. INFLUENZA ────────────────────────────────────────────────────────
  { id: 38, argomento: "Influenza", domanda: "4 fattori di rischio per influenza complicata.", risposta: "Età <2 o >65 anni, gravidanza, immunodepressione, obesità, malattie croniche (cardiopolmonari, diabete), residenza in RSA." },
  { id: 39, argomento: "Influenza", domanda: "Effetti collaterali dello zanamivir.", risposta: "Broncospasmo e tosse (controindicato in asmatici/BPCO), cefalea, nausea." },
  { id: 40, argomento: "Influenza", domanda: "Effetti collaterali dell'oseltamivir.", risposta: "Nausea, vomito, dolore addominale, cefalea; raramente disturbi neuropsichiatrici (delirio nel bambino)." },
  { id: 41, argomento: "Influenza", domanda: "Effetti collaterali degli adamantani.", risposta: "Ansia, insonnia, allucinazioni, delirio." },
  { id: 42, argomento: "Influenza", domanda: "Classe di antivirali che dà alte resistenze dopo pochi giorni d'uso.", risposta: "Adamantani (amantadina/rimantadina)." },
  { id: 43, argomento: "Influenza", domanda: "Qual è il principale farmaco antivirale per l'influenza e quando è più efficace?", risposta: "Oseltamivir (inibitore della neuraminidasi); massima efficacia se iniziato entro 48 h dall'esordio dei sintomi." },

  // ─── 5. COVID-19 ──────────────────────────────────────────────────────────
  { id: 44, argomento: "COVID-19", domanda: "Antivirale orale per il COVID.", risposta: "Nirmatrelvir/ritonavir (Paxlovid)." },
  { id: 45, argomento: "COVID-19", domanda: "Quando dare il desametasone nel COVID?", risposta: "Solo nel paziente ospedalizzato che necessita di ossigeno: desametasone 6 mg/die per 10 gg." },
  { id: 46, argomento: "COVID-19", domanda: "Un anticitochinico approvato per il COVID e il suo target.", risposta: "Tocilizumab (anti-IL-6) o anakinra (antagonista del recettore IL-1)." },
  { id: 47, argomento: "COVID-19", domanda: "Quale biologico inficia la produzione di anticorpi anti-COVID (e risposta vaccinale)?", risposta: "Rituximab (anti-CD20)." },
  { id: 48, argomento: "COVID-19", domanda: "Effetto collaterale raro del vaccino a vettore virale per COVID.", risposta: "Trombosi con trombocitopenia (VITT), mediata da anticorpi anti-PF4." },
  { id: 49, argomento: "COVID-19", domanda: "Paziente COVID ipossiemico in ossigenoterapia a basso flusso: quale schema terapeutico?", risposta: "Remdesivir + desametasone 6 mg/die per circa 10 giorni." },
  { id: 50, argomento: "COVID-19", domanda: "Qual è l'antivirale orale precoce per COVID a rischio di progressione e una sua importante criticità?", risposta: "Nirmatrelvir/ritonavir (Paxlovid); attenzione alle numerose interazioni farmacologiche legate al ritonavir." },

  // ─── 6. POLMONITI ─────────────────────────────────────────────────────────
  { id: 51, argomento: "Polmoniti", domanda: "CAP senza allergie e senza fattori di rischio per MDR: terapia.", risposta: "Amoxicillina-clavulanato (o cefalosporina di 2ª/3ª gen.) + macrolide (azitromicina o claritromicina)." },
  { id: 52, argomento: "Polmoniti", domanda: "CAP in paziente allergico ai β-lattamici.", risposta: "Fluorochinolone respiratorio: levofloxacina 750 mg o moxifloxacina 400 mg." },
  { id: 53, argomento: "Polmoniti", domanda: "2 farmaci per CAP da MRSA.", risposta: "Vancomicina o linezolid (associati alla terapia per CAP standard)." },
  { id: 54, argomento: "Polmoniti", domanda: "Polmonite ab ingestis con ascesso: terapia.", risposta: "Piperacillina-tazobactam o carbapenemico + metronidazolo o clindamicina." },
  { id: 55, argomento: "Polmoniti", domanda: "HAP senza fattori di rischio MDR.", risposta: "Piperacillina-tazobactam (oppure cefepime/levofloxacina) a copertura di Pseudomonas." },
  { id: 56, argomento: "Polmoniti", domanda: "HAP >7 giorni (tardiva): terapia.", risposta: "Antipseudomonas: ceftazidime o piperacillina-tazobactam o meropenem + (levofloxacina/ciprofloxacina o amikacina)." },
  { id: 57, argomento: "Polmoniti", domanda: "HAP con MDR e sospetto MRSA.", risposta: "Carbapenemico (o pip-tazo) + (levofloxacina o amikacina) + (vancomicina/linezolid/teicoplanina)." },
  { id: 58, argomento: "Polmoniti", domanda: "Polmonite acuta in paziente epilettico in fenobarbital.", risposta: "Amoxicillina-clavulanato + azitromicina; evitare chinoloni e carbapenemici (abbassano la soglia convulsiva)." },
  { id: 59, argomento: "Polmoniti", domanda: "A cosa serve il CURB-65 e quali parametri valuta?", risposta: "Stratifica la gravità della CAP e la sede di cura: Confusione, Urea, Frequenza Respiratoria, Blood pressure, età ≥65 anni." },

  // ─── 7. TUBERCOLOSI ───────────────────────────────────────────────────────
  { id: 60, argomento: "Tubercolosi", domanda: "Terapia della TBC latente: farmaco, dose e durata.", risposta: "Isoniazide 5 mg/kg/die per 6-9 mesi, oppure rifampicina 10 mg/kg per 4 mesi, oppure entrambe per 3 mesi." },
  { id: 61, argomento: "Tubercolosi", domanda: "Farmaci della terapia iniziale della TBC attiva.", risposta: "Isoniazide + rifampicina + etambutolo + pirazinamide (fase intensiva 2 mesi)." },
  { id: 62, argomento: "Tubercolosi", domanda: "Isoniazide: quale effetto collaterale dà e come lo previeni?", risposta: "Neuropatia periferica; si previene con vitamina B6 (piridossina)." },
  { id: 63, argomento: "Tubercolosi", domanda: "Quale anti-TBC ha più interazioni farmacologiche?", risposta: "Rifampicina (potente induttore enzimatico del CYP450)." },
  { id: 64, argomento: "Tubercolosi", domanda: "Qual è lo schema standard della TBC polmonare e la sua durata?", risposta: "2 mesi di fase intensiva con H+R+Z+E, seguiti da 4 mesi di continuazione con H+R (6 mesi totali)." },
  { id: 65, argomento: "Tubercolosi", domanda: "Quale tossicità specifica va monitorata con l'etambutolo?", risposta: "La neurite ottica (alterazioni del visus e della discriminazione dei colori)." },

  // ─── 8. ENDOCARDITI ───────────────────────────────────────────────────────
  { id: 66, argomento: "Endocarditi infettive", domanda: "Endocardite da streptococco penicillino-sensibile su valvola nativa.", risposta: "Ceftriaxone 2 g IV/die per 4 settimane (± gentamicina per 2 settimane); vancomicina se allergico." },
  { id: 67, argomento: "Endocarditi infettive", domanda: "Endocardite da S. aureus meticillino-sensibile (MSSA) su valvola nativa.", risposta: "Oxacillina/nafcillina (± gentamicina opzionale)." },
  { id: 68, argomento: "Endocarditi infettive", domanda: "Endocardite da MSSA su valvola protesica.", risposta: "Oxacillina/nafcillina + rifampicina + gentamicina." },
  { id: 69, argomento: "Endocarditi infettive", domanda: "In quale endocardite si aggiunge rifampicina?", risposta: "Endocardite su valvola protesica da stafilococchi." },
  { id: 70, argomento: "Endocarditi infettive", domanda: "Endocardite da MRSA su valvola nativa.", risposta: "Vancomicina 30 mg/kg/die per 6 settimane (± gentamicina)." },
  { id: 71, argomento: "Endocarditi infettive", domanda: "Profilassi dell'endocardite prima di procedura odontoiatrica in paziente a rischio.", risposta: "Amoxicillina (o ampicillina) 2 g per os 30-60 min prima; se allergico azitromicina/claritromicina 500 mg o clindamicina 600 mg." },
  { id: 72, argomento: "Endocarditi infettive", domanda: "Perché nell'endocardite su protesi si aggiunge la rifampicina?", risposta: "Perché penetra bene nel biofilm e nei tessuti, utile contro i germi adesi al materiale protesico." },

  // ─── 9. IVU ───────────────────────────────────────────────────────────────
  { id: 73, argomento: "Infezioni vie urinarie", domanda: "Cistite non complicata: terapia con nome, dosaggio e durata.", risposta: "Prima linea: fosfomicina 3 g monodose, oppure nitrofurantoina 100 mg x2 per 5 gg." },
  { id: 74, argomento: "Infezioni vie urinarie", domanda: "Pielonefrite non complicata: farmaco di prima linea.", risposta: "Fluorochinolone: ciprofloxacina 500 mg x2 per 7 gg o levofloxacina 750 mg per 5 gg." },
  { id: 75, argomento: "Infezioni vie urinarie", domanda: "Pielonefrite in paziente gravida.", risposta: "Urinocoltura + test di gravidanza; ricovero ed empirica con β-lattamico (ceftriaxone); evitare fluorochinoloni e TMP-SMX." },
  { id: 76, argomento: "Infezioni vie urinarie", domanda: "Donna con 10 episodi di cistite/anno correlati al coito: profilassi.", risposta: "Profilassi post-coitale con nitrofurantoina 50-100 mg in dose singola." },
  { id: 77, argomento: "Infezioni vie urinarie", domanda: "Perché la nitrofurantoina non è indicata nella pielonefrite?", risposta: "Perché non raggiunge concentrazioni tissutali/parenchimali adeguate: agisce solo a livello urinario (cistite)." },

  // ─── 10. ANTIBIOTICI ──────────────────────────────────────────────────────
  { id: 78, argomento: "Principi di terapia antibiotica", domanda: "Farmaco attivo solo su Gram+, buon assorbimento orale e buona distribuzione tissutale.", risposta: "Linezolid." },
  { id: 79, argomento: "Principi di terapia antibiotica", domanda: "Un'indicazione per la vancomicina per os.", risposta: "Infezione da Clostridioides difficile (colite pseudomembranosa)." },
  { id: 80, argomento: "Principi di terapia antibiotica", domanda: "In quale sede NON si usa la daptomicina?", risposta: "Nel polmone (è inattivata dal surfattante)." },
  { id: 81, argomento: "Principi di terapia antibiotica", domanda: "3 effetti avversi dei fluorochinoloni.", risposta: "Tendinopatia/rottura tendinea, allungamento del QT, abbassamento della soglia convulsiva (+ disglicemie, fototossicità)." },
  { id: 82, argomento: "Principi di terapia antibiotica", domanda: "Effetti collaterali della gentamicina.", risposta: "Nefrotossicità, ototossicità, tossicità GI, blocco neuromuscolare." },
  { id: 83, argomento: "Principi di terapia antibiotica", domanda: "Antibiotico da non associare al metotrexato.", risposta: "Trimetoprim-sulfametossazolo (TMP-SMX), per antagonismo sui folati e tossicità midollare additiva." },
  { id: 84, argomento: "Principi di terapia antibiotica", domanda: "Quale cefalosporina di 3ª ha azione su Pseudomonas?", risposta: "Ceftazidime." },
  { id: 85, argomento: "Principi di terapia antibiotica", domanda: "Che differenza c'è tra terapia antibiotica empirica e mirata?", risposta: "L'empirica si basa sul sospetto clinico/epidemiologico prima dell'antibiogramma; la mirata segue l'isolamento del germe e la sua sensibilità." },

  // ─── 11. SEPSI ────────────────────────────────────────────────────────────
  { id: 86, argomento: "Sepsi e shock settico", domanda: "Tre azioni iniziali nella sepsi (sepsis six).", risposta: "Ossigenoterapia, emocolture (prima degli antibiotici) e antibioticoterapia empirica precoce; + fluidi, lattati, diuresi." },
  { id: 87, argomento: "Sepsi e shock settico", domanda: "Entro quanto tempo va iniziata la terapia antibiotica nella sepsi?", risposta: "Entro 1 ora dal riconoscimento (≤60 minuti)." },
  { id: 88, argomento: "Sepsi e shock settico", domanda: "Tre vasopressori nello shock settico.", risposta: "Noradrenalina (1ª scelta), vasopressina (ADH), adrenalina/dopamina come aggiunta." },
  { id: 89, argomento: "Sepsi e shock settico", domanda: "Cosa misuro nel sangue per stabilire la gravità della sepsi?", risposta: "Il lattato (la clearance dei lattati indica la risposta)." },
  { id: 90, argomento: "Sepsi e shock settico", domanda: "Definizione di shock settico.", risposta: "Sepsi con ipotensione persistente che richiede vasopressori per mantenere PAM ≥65 mmHg e lattati >2 mmol/L nonostante adeguata rianimazione volemica." },

  // ─── 12. SCA / STEMI ──────────────────────────────────────────────────────
  { id: 91, argomento: "Sindromi coronariche acute", domanda: "Tre farmaci da usare come DAPT (oltre all'aspirina) pre-PCI.", risposta: "Aspirina + uno tra ticagrelor 180 mg, prasugrel 60 mg (se diabetico) o clopidogrel 300-600 mg (se alto rischio emorragico)." },
  { id: 92, argomento: "Sindromi coronariche acute", domanda: "Tre farmaci che non possono mancare dopo uno STEMI.", risposta: "DAPT (aspirina + ticagrelor/prasugrel) per 12 mesi, statina ad alta intensità e ACE-inibitore (± β-bloccante)." },
  { id: 93, argomento: "Sindromi coronariche acute", domanda: "Almeno 3 controindicazioni alla trombolisi sistemica nell'infarto.", risposta: "Emorragia intracranica pregressa, ictus ischemico <3 mesi, dissezione aortica, trauma cranico recente, sanguinamento attivo." },
  { id: 94, argomento: "Sindromi coronariche acute", domanda: "Perché la morfina è rischiosa nell'infarto acuto?", risposta: "Rallenta lo svuotamento gastrico e l'assorbimento degli antiaggreganti orali (DAPT), riducendone l'efficacia." },
  { id: 95, argomento: "Sindromi coronariche acute", domanda: "STEMI a 3 ore da un centro hub: cosa fai sul territorio?", risposta: "Trombolisi farmacologica (se non controindicata) + DAPT, statina, controllo del dolore e ossigeno se necessario." },
  { id: 96, argomento: "Sindromi coronariche acute", domanda: "Dose di carico di ticagrelor e di clopidogrel nella SCA.", risposta: "Ticagrelor 180 mg (2 cp da 90 mg); clopidogrel 600 mg (2 cp da 300 mg)." },
  { id: 97, argomento: "Sindromi coronariche acute", domanda: "Per quanto tempo si prosegue di norma la DAPT dopo una SCA?", risposta: "Di solito 12 mesi, poi si prosegue con un singolo antiaggregante; la durata si modula sul rischio ischemico/emorragico." },

  // ─── 13. CARDIOPATIA ISCHEMICA CRONICA ───────────────────────────────────
  { id: 98, argomento: "Cardiopatia ischemica cronica", domanda: "Prima linea nell'angina variante (di Prinzmetal).", risposta: "Calcio-antagonista ad alto dosaggio (es. diltiazem 360 mg); se insufficiente aggiungere nitrato a lunga durata." },
  { id: 99, argomento: "Cardiopatia ischemica cronica", domanda: "Vasodilatatori sublinguali che il paziente può assumere prima di arrivare in ospedale.", risposta: "Nitroglicerina (trinitrina) sublinguale, ripetibile fino a 3 volte." },
  { id: 100, argomento: "Cardiopatia ischemica cronica", domanda: "Condizioni in cui si preferisce il bypass (CABG).", risposta: "Malattia multivasale estesa, diabete, alto rischio emorragico (per evitare DAPT prolungata)." },
  { id: 101, argomento: "Cardiopatia ischemica cronica", domanda: "Qual è la terapia antianginosa di prima linea per il controllo dei sintomi?", risposta: "I beta-bloccanti (e/o calcio-antagonisti); nitrati a breve durata per le crisi." },

  // ─── 14. DISLIPIDEMIE ─────────────────────────────────────────────────────
  { id: 102, argomento: "Dislipidemie", domanda: "Paziente con statine al massimo dosaggio: cosa aggiungi per ridurre ulteriormente le LDL?", risposta: "Ezetimibe; poi acido bempedoico; poi inibitore PCSK9 (evolocumab/alirocumab); infine inclisiran." },
  { id: 103, argomento: "Dislipidemie", domanda: "Meccanismo d'azione dell'ezetimibe.", risposta: "Riduce l'assorbimento intestinale del colesterolo bloccando il trasportatore NPC1L1." },
  { id: 104, argomento: "Dislipidemie", domanda: "Come agiscono gli inibitori di PCSK9?", risposta: "Bloccano PCSK9 impedendo la degradazione del recettore LDL epatico → più recettori → maggiore captazione di LDL." },
  { id: 105, argomento: "Dislipidemie", domanda: "Cos'è inclisiran?", risposta: "Piccolo RNA interferente (siRNA) che silenzia PCSK9; riduce le LDL con somministrazione semestrale." },
  { id: 106, argomento: "Dislipidemie", domanda: "Statina da NON usare nell'insufficienza renale grave.", risposta: "Rosuvastatina (escrezione renale)." },
  { id: 107, argomento: "Dislipidemie", domanda: "Effetti collaterali delle statine.", risposta: "Mialgie/miopatia (rara rabdomiolisi e miopatia autoimmune), aumento transaminasi, peggioramento del controllo glicemico." },
  { id: 108, argomento: "Dislipidemie", domanda: "Target LDL in uomo 60 anni diabetico non coronaropatico.", risposta: "<70 mg/dL (rischio alto); <55 mg/dL se rischio molto alto o danno d'organo." },
  { id: 109, argomento: "Dislipidemie", domanda: "Quando si sospende una statina per tossicità epatica?", risposta: "Quando le transaminasi superano 3 volte il limite superiore di norma." },
  { id: 110, argomento: "Dislipidemie", domanda: "Classi di farmaci per abbassare i trigliceridi in ordine di potenza.", risposta: "Fibrati > omega-3 > acido nicotinico > statine > ezetimibe." },

  // ─── 15. ARITMIE E FA ─────────────────────────────────────────────────────
  { id: 111, argomento: "Aritmie e fibrillazione atriale", domanda: "Farmaco per la cardioversione farmacologica nel paziente cardiopatico.", risposta: "Amiodarone (sicuro in cardiopatia strutturale e scompenso)." },
  { id: 112, argomento: "Aritmie e fibrillazione atriale", domanda: "Farmaci per il 'pill in the pocket'.", risposta: "Flecainide o propafenone per os, in pazienti senza cardiopatia strutturale." },
  { id: 113, argomento: "Aritmie e fibrillazione atriale", domanda: "Prima linea nella tachicardia parossistica sopraventricolare (TPSV).", risposta: "Manovre vagali, poi adenosina ev in bolo rapido." },
  { id: 114, argomento: "Aritmie e fibrillazione atriale", domanda: "Cos'è il CHA2DS2-VASc?", risposta: "Score del rischio tromboembolico nella FA, usato per decidere l'anticoagulazione." },
  { id: 115, argomento: "Aritmie e fibrillazione atriale", domanda: "Amiodarone: effetti collaterali a lungo termine.", risposta: "Disfunzione tiroidea (ipo/ipertiroidismo), fibrosi polmonare, microdepositi corneali, epatotossicità, proaritmia." },
  { id: 116, argomento: "Aritmie e fibrillazione atriale", domanda: "Su quali score basi la scelta di anticoagulare un paziente con FA non valvolare?", risposta: "CHA2DS2-VASc per il rischio tromboembolico, bilanciato con HAS-BLED per il rischio emorragico." },
  { id: 117, argomento: "Aritmie e fibrillazione atriale", domanda: "Effetti collaterali dell'adenosina.", risposta: "Flushing, dolore toracico, dispnea, breve asistolia/bradicardia; broncospasmo negli asmatici." },

  // ─── 16. SCOMPENSO CARDIACO ───────────────────────────────────────────────
  { id: 118, argomento: "Scompenso cardiaco", domanda: "Terapia dello scompenso per ridurre la mortalità: i quattro pilastri.", risposta: "ACE-i/ARNI (sacubitril-valsartan) + β-bloccante + antialdosteronico + SGLT2-inibitore." },
  { id: 119, argomento: "Scompenso cardiaco", domanda: "Cos'è il sacubitril e quando si usa?", risposta: "Inibitore della neprilisina; associato a valsartan nello scompenso a FE ridotta ancora sintomatico nonostante terapia ottimale." },
  { id: 120, argomento: "Scompenso cardiaco", domanda: "Meccanismo d'azione degli SGLT2-inibitori.", risposta: "Inibiscono il cotrasportatore sodio-glucosio SGLT2 nel tubulo prossimale → glicosuria e natriuresi." },
  { id: 121, argomento: "Scompenso cardiaco", domanda: "Paziente con ginecomastia in terapia per scompenso: quale farmaco sospettare?", risposta: "Spironolattone (sostituire con eplerenone, che dà meno ginecomastia)." },
  { id: 122, argomento: "Scompenso cardiaco", domanda: "Almeno 2 effetti collaterali delle glifozine.", risposta: "Infezioni genito-urinarie, deplezione volemica/ipotensione, chetoacidosi diabetica euglicemica." },
  { id: 123, argomento: "Scompenso cardiaco", domanda: "Qual è il vantaggio del sacubitril/valsartan rispetto al solo ACE-inibitore?", risposta: "Maggiore efficacia nel ridurre mortalità e ospedalizzazioni; agisce anche sulla ritenzione idrica." },

  // ─── 17. IPERTENSIONE ─────────────────────────────────────────────────────
  { id: 124, argomento: "Ipertensione arteriosa", domanda: "Prima linea anti-ipertensiva nel paziente sano senza fattori di rischio.", risposta: "A scelta tra ACE-i/ARB, calcio-antagonista o tiazidico; spesso in associazione (es. ACE-i + calcio-antagonista)." },
  { id: 125, argomento: "Ipertensione arteriosa", domanda: "Farmaco di uso comune che dà tosse cronica.", risposta: "ACE-inibitore (accumulo di bradichinina)." },
  { id: 126, argomento: "Ipertensione arteriosa", domanda: "3 farmaci per la crisi ipertensiva con via di somministrazione.", risposta: "Labetalolo ev, urapidil ev, nitroglicerina/nitroprussiato ev (clonidina, esmololo ev)." },
  { id: 127, argomento: "Ipertensione arteriosa", domanda: "Farmaci antipertensivi controindicati in gravidanza.", risposta: "ACE-inibitori e sartani (e tiazidici sconsigliati)." },
  { id: 128, argomento: "Ipertensione arteriosa", domanda: "Ipertensione resistente: prima linea aggiuntiva.", risposta: "Aggiungere spironolattone (antialdosteronico) al regime di 3 farmaci (ACE-i/ARB + Ca-antagonista + tiazidico)." },
  { id: 129, argomento: "Ipertensione arteriosa", domanda: "Effetti collaterali dei tiazidici.", risposta: "Ipokaliemia, iponatriemia, iperuricemia, iperglicemia, ipercalcemia, disfunzione erettile." },
  { id: 130, argomento: "Ipertensione arteriosa", domanda: "Stenosi dell'arteria renale bilaterale: perché evitare ACE-i e sartani?", risposta: "Bloccano la vasocostrizione dell'arteriola efferente che mantiene la GFR → insufficienza renale acuta." },
  { id: 131, argomento: "Ipertensione arteriosa", domanda: "Perché non si associano mai un ACE-inibitore e un sartano?", risposta: "Perché agiscono sullo stesso sistema (RAAS) senza beneficio aggiuntivo e con maggior rischio di iperkaliemia e danno renale." },

  // ─── 18. ANTICOAGULANTI ───────────────────────────────────────────────────
  { id: 132, argomento: "Anticoagulanti e antiaggreganti", domanda: "Tre indicazioni agli anticoagulanti orali diretti (DOAC).", risposta: "Prevenzione dell'ictus nella FA non valvolare, trattamento di TVP/EP, profilassi del TEV dopo chirurgia ortopedica maggiore." },
  { id: 133, argomento: "Anticoagulanti e antiaggreganti", domanda: "Emorragia attiva grave in paziente in Coumadin (warfarin): cosa fai?", risposta: "Sospendere il farmaco, vitamina K ev e, se grave, concentrato del complesso protrombinico (PCC)." },
  { id: 134, argomento: "Anticoagulanti e antiaggreganti", domanda: "Necrosi cutanea da warfarin: cosa è successo e cosa fai?", risposta: "Calo rapido della proteina C (stato pro-trombotico iniziale). Sospendere warfarin, dare eparina (EBPM) e vitamina K." },
  { id: 135, argomento: "Anticoagulanti e antiaggreganti", domanda: "Qual è il bersaglio del warfarin e come si monitora?", risposta: "Inibisce la sintesi vitamina K-dipendente dei fattori II, VII, IX, X; si monitora con INR (target 2-3)." },
  { id: 136, argomento: "Anticoagulanti e antiaggreganti", domanda: "Cita i bersagli dei DOAC.", risposta: "Dabigatran inibisce la trombina (IIa); rivaroxaban, apixaban ed edoxaban inibiscono il fattore Xa." },
  { id: 137, argomento: "Anticoagulanti e antiaggreganti", domanda: "In quale contesto i DOAC sono controindicati a favore del warfarin?", risposta: "Nella FA valvolare (protesi meccanica/stenosi mitralica) e nella sindrome da anticorpi antifosfolipidi." },

  // ─── 19. TEV / EP ─────────────────────────────────────────────────────────
  { id: 138, argomento: "Tromboembolismo venoso", domanda: "Durata minima della terapia anticoagulante per una TVP.", risposta: "Almeno 3 mesi (più a lungo se TEV recidivante o fattore di rischio persistente)." },
  { id: 139, argomento: "Tromboembolismo venoso", domanda: "Paziente con EP ad alto rischio (ipoteso, tachicardico): terapia.", risposta: "Trombolisi sistemica (rtPA) + eparina; ECMO/embolectomia se controindicazioni o instabilità refrattaria." },
  { id: 140, argomento: "Tromboembolismo venoso", domanda: "Qual è oggi la terapia di prima scelta nella TVP/EP non complicata?", risposta: "I DOAC, salvo controindicazioni (es. insufficienza renale grave, gravidanza, sindrome da antifosfolipidi)." },

  // ─── 20. ARTRITE REUMATOIDE ───────────────────────────────────────────────
  { id: 141, argomento: "Artrite reumatoide", domanda: "Paziente con AR: come imposti la terapia?", risposta: "Metotrexato 15 mg/settimana + acido folico 24 h dopo, con prednisone a basse dosi (bridge) da sospendere entro 6 mesi." },
  { id: 142, argomento: "Artrite reumatoide", domanda: "4 DMARD convenzionali in AR.", risposta: "Metotrexato, sulfasalazina, leflunomide, idrossiclorochina." },
  { id: 143, argomento: "Artrite reumatoide", domanda: "Quale vitamina dare il giorno dopo il metotrexato?", risposta: "Acido folico (folina, vitamina B9)." },
  { id: 144, argomento: "Artrite reumatoide", domanda: "Quale farmaco per AR dà crisi ipertensive, diarrea e cefalea?", risposta: "Leflunomide." },
  { id: 145, argomento: "Artrite reumatoide", domanda: "Donna gravida con nuova diagnosi di AR: cosa dai?", risposta: "Sulfasalazina (e/o idrossiclorochina), compatibili con la gravidanza; metotrexato e leflunomide sono controindicati." },
  { id: 146, argomento: "Artrite reumatoide", domanda: "Esami infettivologici prima di una terapia biologica per AR.", risposta: "Screening per tubercolosi (Quantiferon/Mantoux) ed epatiti B e C (HBV, HCV)." },
  { id: 147, argomento: "Artrite reumatoide", domanda: "Indica 3 anti-TNF.", risposta: "Infliximab, adalimumab, etanercept (anche golimumab, certolizumab pegol)." },
  { id: 148, argomento: "Artrite reumatoide", domanda: "Due anti-IL-6.", risposta: "Tocilizumab e sarilumab." },
  { id: 149, argomento: "Artrite reumatoide", domanda: "Effetto collaterale comune dei JAK-inibitori.", risposta: "Aumentato rischio di infezioni (es. herpes zoster); anche dislipidemia e citopenie." },
  { id: 150, argomento: "Artrite reumatoide", domanda: "Quale farmaco NON associare all'azatioprina e perché?", risposta: "Allopurinolo: inibisce la xantina ossidasi e fa accumulare i metaboliti dell'azatioprina → aplasia midollare." },
  { id: 151, argomento: "Artrite reumatoide", domanda: "Spondiloartrite assiale: terapia di prima e seconda linea.", risposta: "Prima linea: FANS a dose piena e continuativa. Seconda linea: biologici anti-TNF o anti-IL-17 (i DMARD convenzionali sono inefficaci sulla forma assiale)." },

  // ─── 21. VASCULITI ────────────────────────────────────────────────────────
  { id: 152, argomento: "Vasculiti e polimialgia", domanda: "Quale biologico è utile nell'arterite gigantocellulare e perché?", risposta: "Tocilizumab (anti-IL-6): consente una più rapida e sicura riduzione dello steroide, risparmiando dose cumulativa." },
  { id: 153, argomento: "Vasculiti e polimialgia", domanda: "Polimialgia reumatica con cefalea temporale: imposta la terapia.", risposta: "Sospetta arterite di Horton: glucocorticoidi (prednisone 40-60 mg/die se rischio ischemico) con scalo lento; tocilizumab se necessario." },
  { id: 154, argomento: "Vasculiti e polimialgia", domanda: "Granulomatosi con poliangioite (GPA): prima linea.", risposta: "Prednisone 1 mg/kg/die (o boli di metilprednisolone 500-1000 mg x3 se organi a rischio) + ciclofosfamide o rituximab." },

  // ─── 22. LES E CONNETTIVITI ───────────────────────────────────────────────
  { id: 155, argomento: "LES e connettiviti", domanda: "Terapia della nefrite lupica III-IV.", risposta: "Induzione con ciclofosfamide (o micofenolato) + corticosteroide; mantenimento con micofenolato/azatioprina." },
  { id: 156, argomento: "LES e connettiviti", domanda: "Quale farmaco per il LES dà tossicità retinica?", risposta: "Idrossiclorochina (maculopatia: serve monitoraggio oculistico)." },
  { id: 157, argomento: "LES e connettiviti", domanda: "Due farmaci per l'ipertensione polmonare nella sclerosi sistemica.", risposta: "Antagonisti dell'endotelina (bosentan/ambrisentan) e PDE5-inibitori (sildenafil/tadalafil)." },
  { id: 158, argomento: "LES e connettiviti", domanda: "Prima linea nel Raynaud da sclerosi sistemica.", risposta: "Calcio-antagonista diidropiridinico (es. nifedipina/amlodipina)." },
  { id: 159, argomento: "LES e connettiviti", domanda: "Quale farmaco di fondo si usa praticamente in tutti i pazienti con LES?", risposta: "L'idrossiclorochina." },
  { id: 160, argomento: "LES e connettiviti", domanda: "Perché nella sindrome da anticorpi antifosfolipidi si preferisce il warfarin ai DOAC?", risposta: "Perché i DOAC si sono dimostrati meno efficaci nel prevenire le recidive trombotiche in questa sindrome." },

  // ─── 23. IBD ──────────────────────────────────────────────────────────────
  { id: 161, argomento: "Malattie infiammatorie intestinali", domanda: "RCU lieve-moderata: terapia.", risposta: "Mesalazina orale 2,4-4,8 g/die + mesalazina topica (supposte/clismi)." },
  { id: 162, argomento: "Malattie infiammatorie intestinali", domanda: "RCU cortico-resistente: quale immunosoppressore prima dei biologici?", risposta: "Azatioprina (o 6-mercaptopurina)." },
  { id: 163, argomento: "Malattie infiammatorie intestinali", domanda: "RCU severa che non risponde ad azatioprina, paziente vuole solo terapia orale.", risposta: "JAK-inibitore orale (tofacitinib/upadacitinib)." },
  { id: 164, argomento: "Malattie infiammatorie intestinali", domanda: "Almeno 4 biologici approvati EMA per IBD.", risposta: "Infliximab, adalimumab, golimumab, vedolizumab (anche ustekinumab)." },
  { id: 165, argomento: "Malattie infiammatorie intestinali", domanda: "Cos'è vedolizumab e per cosa si usa?", risposta: "Anticorpo anti-integrina α4β7 (selettivo per l'intestino); RCU e Crohn." },
  { id: 166, argomento: "Malattie infiammatorie intestinali", domanda: "Crohn con sclerosi multipla: quale biologico?", risposta: "Vedolizumab (gut-selettivo); evitare gli anti-TNF, che possono peggiorare la demielinizzazione." },
  { id: 167, argomento: "Malattie infiammatorie intestinali", domanda: "Quali classi di farmaci si usano per indurre e mantenere la remissione nelle IBD moderate-gravi?", risposta: "Corticosteroidi per l'induzione; immunosoppressori (azatioprina) e biologici (anti-TNF) per il mantenimento." },

  // ─── 24. GERD E H. PYLORI ────────────────────────────────────────────────
  { id: 168, argomento: "GERD e H. pylori", domanda: "Almeno 3 effetti collaterali degli inibitori di pompa (PPI).", risposta: "Infezioni enteriche (C. difficile), malassorbimento di B12/Mg/calcio/ferro, polmonite, danno renale, ipergastrinemia." },
  { id: 169, argomento: "GERD e H. pylori", domanda: "Prima linea per H. pylori in Italia.", risposta: "Terapia quadruplice con bismuto (PPI + bismuto + tetraciclina + metronidazolo = Pylera) per 10-14 gg." },
  { id: 170, argomento: "GERD e H. pylori", domanda: "GERD non complicato: terapia.", risposta: "PPI a dose singola (es. pantoprazolo 40 mg) prima dei pasti per 4-8 settimane + stile di vita." },
  { id: 171, argomento: "GERD e H. pylori", domanda: "Inibitori dell'acidità di nuova classe (PCAB): cosa sono?", risposta: "Vonoprazan (revaprazan): bloccanti competitivi del potassio sulla pompa protonica." },
  { id: 172, argomento: "GERD e H. pylori", domanda: "Equivalenze tra PPI.", risposta: "Omeprazolo 20 mg ≈ pantoprazolo 40 mg ≈ lansoprazolo 30 mg ≈ esomeprazolo 40 mg ≈ rabeprazolo 20 mg." },

  // ─── 25. PANCREATITE ──────────────────────────────────────────────────────
  { id: 173, argomento: "Pancreatite", domanda: "Idratazione nella pancreatite acuta: quale liquido?", risposta: "Ringer lattato, con idratazione moderata (non aggressiva), titolata sul paziente." },
  { id: 174, argomento: "Pancreatite", domanda: "Due cause più frequenti di pancreatite acuta.", risposta: "Calcoli biliari e alcol." },
  { id: 175, argomento: "Pancreatite", domanda: "Farmaco principale della pancreatite autoimmune.", risposta: "Corticosteroide (prednisone 0,5-1 mg/kg/die) con scalo lento." },

  // ─── 26. CIRROSI ──────────────────────────────────────────────────────────
  { id: 176, argomento: "Cirrosi epatica", domanda: "Ascite di grado 2 di nuova diagnosi: quale diuretico e dosaggio?", risposta: "Spironolattone 100 mg/die (titolabile fino a 400 mg), ± furosemide." },
  { id: 177, argomento: "Cirrosi epatica", domanda: "Prima azione in paziente con cirrosi e ascite di grado 3.", risposta: "Paracentesi evacuativa con infusione di albumina (≈8 g per litro rimosso oltre i 5 L)." },
  { id: 178, argomento: "Cirrosi epatica", domanda: "Terapia dell'encefalopatia porto-sistemica.", risposta: "Trattare i fattori precipitanti + lattulosio (acidificazione del colon) + rifaximina; aminoacidi ramificati se refrattaria." },
  { id: 179, argomento: "Cirrosi epatica", domanda: "Classe di antibiotici per la peritonite batterica spontanea (PBS).", risposta: "Cefalosporine di 3ª generazione (es. cefotaxime/ceftriaxone) o piperacillina-tazobactam." },
  { id: 180, argomento: "Cirrosi epatica", domanda: "Due farmaci per la profilassi del sanguinamento delle varici esofagee.", risposta: "β-bloccante non selettivo (propranololo o carvedilolo); in alternativa legatura endoscopica." },

  // ─── 27. ANTIEMETICI E LASSATIVI ─────────────────────────────────────────
  { id: 181, argomento: "Antiemetici e farmaci GI", domanda: "Terapia antiemetica nel paziente con chemioterapia con cisplatino.", risposta: "Setrone (ondansetron) + desametasone ± antagonista NK1 (aprepitant)." },
  { id: 182, argomento: "Antiemetici e farmaci GI", domanda: "Effetti collaterali della metoclopramide.", risposta: "Sintomi extrapiramidali (distonia, parkinsonismo), iperprolattinemia, sonnolenza." },
  { id: 183, argomento: "Antiemetici e farmaci GI", domanda: "Paziente 75 anni in metoclopramide che sviluppa rigidità e amimia: cosa è successo?", risposta: "Parkinsonismo iatrogeno (sindrome extrapiramidale da metoclopramide); sospendere il farmaco." },
  { id: 184, argomento: "Antiemetici e farmaci GI", domanda: "Due lassativi osmotici.", risposta: "Lattulosio e macrogol (PEG/Movicol)." },

  // ─── 28. TIROIDE ──────────────────────────────────────────────────────────
  { id: 185, argomento: "Disfunzioni tiroidee", domanda: "Due farmaci che causano ipotiroidismo.", risposta: "Amiodarone e litio." },
  { id: 186, argomento: "Disfunzioni tiroidee", domanda: "Terapia della tireotossicosi grave da amiodarone.", risposta: "Tionamidi (metimazolo) + corticosteroide (per la forma tipo 2 distruttiva)." },
  { id: 187, argomento: "Disfunzioni tiroidee", domanda: "In quali condizioni tiroidee usi l'integrazione di selenio?", risposta: "Tiroidite di Hashimoto/autoimmune e ipotiroidismo subclinico (e orbitopatia di Basedow lieve)." },
  { id: 188, argomento: "Disfunzioni tiroidee", domanda: "In quali condizioni è necessario aumentare la dose di L-tiroxina?", risposta: "Gravidanza, malassorbimento (celiachia), farmaci che ne riducono l'assorbimento (PPI, ferro, calcio)." },
  { id: 189, argomento: "Disfunzioni tiroidee", domanda: "Qual è il tireostatico di prima scelta nell'ipertiroidismo e perché?", risposta: "Il metimazolo, per durata d'azione maggiore, effetto rapido e minori effetti collaterali rispetto al propiltiouracile." },

  // ─── 29. DIABETE MELLITO T2 ───────────────────────────────────────────────
  { id: 190, argomento: "Diabete mellito tipo 2", domanda: "Iperglicemia che non migliora con lo stile di vita: cosa dai?", risposta: "Metformina (prima linea)." },
  { id: 191, argomento: "Diabete mellito tipo 2", domanda: "Meccanismo delle glifozine (SGLT2-inibitori).", risposta: "Inibiscono il cotrasportatore SGLT2 nel tubulo prossimale → glicosuria, calo ponderale e natriuresi." },
  { id: 192, argomento: "Diabete mellito tipo 2", domanda: "Meccanismo d'azione delle sulfaniluree.", risposta: "Bloccano i canali del potassio ATP-dipendenti della β-cellula → depolarizzazione e rilascio di insulina." },
  { id: 193, argomento: "Diabete mellito tipo 2", domanda: "Chetoacidosi diabetica con K normale: cosa fai per il potassio?", risposta: "Aggiungere KCl ai liquidi (10-20 mEq/h) prima/durante l'insulina, perché l'insulina lo farà scendere; monitorare K ed ECG." },
  { id: 194, argomento: "Diabete mellito tipo 2", domanda: "Paziente con metformina che deve fare TC con contrasto: cosa è importante?", risposta: "Sospendere la metformina (rischio di acidosi lattica con il mezzo di contrasto/danno renale)." },
  { id: 195, argomento: "Diabete mellito tipo 2", domanda: "Quale classe preferisci nel diabetico con scompenso cardiaco o malattia renale cronica e perché?", risposta: "Gli SGLT2-inibitori (gliflozine), per il beneficio cardio-renale dimostrato." },
  { id: 196, argomento: "Diabete mellito tipo 2", domanda: "Quale classe associa controllo glicemico e calo ponderale con beneficio cardiovascolare?", risposta: "Gli agonisti del GLP-1 (es. semaglutide, liraglutide)." },

  // ─── 30. OSTEOPOROSI ──────────────────────────────────────────────────────
  { id: 197, argomento: "Osteoporosi", domanda: "Almeno due bisfosfonati orali.", risposta: "Alendronato, risedronato, ibandronato." },
  { id: 198, argomento: "Osteoporosi", domanda: "Come si somministra l'alendronato?", risposta: "1 volta/settimana, al mattino a digiuno con acqua povera di calcio; restare in piedi 30 min, non assumere cibo/farmaci per 30-60 min." },
  { id: 199, argomento: "Osteoporosi", domanda: "Denosumab: meccanismo e indicazione.", risposta: "Anticorpo anti-RANKL che blocca gli osteoclasti; osteoporosi (prevenzione di fratture) e metastasi ossee." },
  { id: 200, argomento: "Osteoporosi", domanda: "Farmaco per osteoporosi che, se sospeso bruscamente, dà il maggior rischio di frattura.", risposta: "Denosumab (rebound; va seguito da un bisfosfonato)." },
  { id: 201, argomento: "Osteoporosi", domanda: "Farmaco anabolico puro per l'osteoporosi.", risposta: "Teriparatide (analogo del PTH)." },
  { id: 202, argomento: "Osteoporosi", domanda: "Con quale dose/durata di steroide vanno dati i bisfosfonati?", risposta: "Se prednisone ≥5-7,5 mg/die (o equivalente) per ≥3 mesi." },

  // ─── 31. IPERCALCEMIA ─────────────────────────────────────────────────────
  { id: 203, argomento: "Ipercalcemia paraneoplastica", domanda: "Prima linea nell'ipercalcemia (oltre all'idratazione).", risposta: "Bisfosfonati ev (zoledronato); calcitonina per un effetto rapido; denosumab se refrattaria." },
  { id: 204, argomento: "Ipercalcemia paraneoplastica", domanda: "Paziente con K polmone, metastasi ossee, dolore, ipercalcemia: trattamento.", risposta: "Idratazione ± furosemide + bisfosfonato ev; calcitonina e steroide se severa; bisfosfonati anche per il dolore osseo." },

  // ─── 32. NEFROLOGIA / IRC ─────────────────────────────────────────────────
  { id: 205, argomento: "Nefrologia e IRC", domanda: "2 farmaci per l'iperfosfatemia nell'IRC.", risposta: "Chelanti del fosforo: sevelamer (resina) e carbonato/acetato di calcio (o carbonato di lantanio)." },
  { id: 206, argomento: "Nefrologia e IRC", domanda: "Terapia dell'iperkaliemia severa con alterazioni ECG.", risposta: "Calcio gluconato ev subito, poi insulina + glucosata (e β2-agonisti); rimozione con resine/diuretici o dialisi." },
  { id: 207, argomento: "Nefrologia e IRC", domanda: "Almeno 3 indicazioni alla dialisi d'urgenza.", risposta: "Iperkaliemia refrattaria (>6,5), acidosi metabolica severa, sovraccarico di fluidi refrattario, uremia sintomatica (pericardite/encefalopatia)." },
  { id: 208, argomento: "Nefrologia e IRC", domanda: "IRC grave con Hb 9,5: 2 trattamenti fondamentali.", risposta: "Ferro (preferibilmente ev) ed eritropoietina ricombinante (target Hb 10,5-11,5)." },
  { id: 209, argomento: "Nefrologia e IRC", domanda: "Quali due classi di farmaci rallentano la progressione della MRC con proteinuria?", risposta: "ACE-inibitori/sartani (riducono la proteinuria) e SGLT2-inibitori (nefroprotezione)." },

  // ─── 33. IPB E DISFUNZIONE ERETTILE ──────────────────────────────────────
  { id: 210, argomento: "IPB e disfunzione erettile", domanda: "2 farmaci per l'IPB.", risposta: "α-litico (tamsulosina/silodosina) e inibitore 5-α-reduttasi (finasteride/dutasteride)." },
  { id: 211, argomento: "IPB e disfunzione erettile", domanda: "Effetti collaterali degli α-litici.", risposta: "Ipotensione ortostatica, congestione nasale, aneiaculazione, sincope, IFIS (sindrome dell'iride a bandiera)." },
  { id: 212, argomento: "IPB e disfunzione erettile", domanda: "Controindicazioni assolute ai PDE5-inibitori.", risposta: "Uso di nitrati/donatori di NO, retinite pigmentosa, intolleranza al farmaco." },
  { id: 213, argomento: "IPB e disfunzione erettile", domanda: "Qual è il meccanismo degli inibitori della PDE5 nella disfunzione erettile e una controindicazione assoluta?", risposta: "Aumentano il GMP ciclico favorendo l'erezione; controindicati con i nitrati per il rischio di grave ipotensione." },

  // ─── 34. COMPLICANZE ANTITUMORALI ─────────────────────────────────────────
  { id: 214, argomento: "Complicanze terapia antitumorale", domanda: "Neutropenia febbrile: terapia empirica.", risposta: "Monoterapia con piperacillina-tazobactam (o cefepime/ceftazidime o carbapenemico) entro 1 h." },
  { id: 215, argomento: "Complicanze terapia antitumorale", domanda: "Neutropenia febbrile con persistenza/Gram+: cosa aggiungi?", risposta: "Vancomicina (es. piperacillina-tazobactam + vancomicina)." },
  { id: 216, argomento: "Complicanze terapia antitumorale", domanda: "Terapia per la prevenzione dell'iperuricemia da lisi tumorale.", risposta: "Idratazione + allopurinolo (prevenzione); rasburicase se iperuricemia già presente/alto rischio." },
  { id: 217, argomento: "Complicanze terapia antitumorale", domanda: "Paziente in pembrolizumab con miocardite immuno-relata: come tratti?", risposta: "Sospendere l'immunoterapia e dare alte dosi di corticosteroidi." },

  // ─── 35. INSONNIA ─────────────────────────────────────────────────────────
  { id: 218, argomento: "Insonnia", domanda: "Lemborexant: cos'è e dove si usa?", risposta: "Antagonista duale dei recettori dell'orexina (DORA); insonnia da inizio e mantenimento." },
  { id: 219, argomento: "Insonnia", domanda: "Trattamento della sindrome delle gambe senza riposo.", risposta: "Agonisti dopaminergici (pramipexolo/ropinirolo) o gabapentinoidi; clonazepam la sera nelle forme lievi." },
  { id: 220, argomento: "Insonnia", domanda: "Perché le benzodiazepine non sono ideali per l'insonnia cronica nell'anziano?", risposta: "Per rischio di tolleranza, dipendenza, cadute e deterioramento cognitivo; si preferiscono igiene del sonno e Z-drugs a breve termine." },

  // ─── 36. MISCELLANEA ──────────────────────────────────────────────────────
  { id: 221, argomento: "Miscellanea", domanda: "Principio attivo usato da 3000 anni come anti-infiammatorio.", risposta: "Colchicina." },
  { id: 222, argomento: "Miscellanea", domanda: "Dose minima di corticosteroidi che non dà effetti collaterali a lungo termine.", risposta: "≤7,5 mg/die di prednisone (o equivalente)." },
  { id: 223, argomento: "Miscellanea", domanda: "2 farmaci ipouricemizzanti.", risposta: "Allopurinolo e febuxostat (inibitori della xantina ossidasi)." },
  { id: 224, argomento: "Miscellanea", domanda: "Salbutamolo: classe e uso.", risposta: "β2-agonista a breve durata (SABA); broncodilatatore nell'asma/BPCO." },
  { id: 225, argomento: "Miscellanea", domanda: "Cosa dai in gravidanza per il reflusso?", risposta: "Antiacidi/alginati (es. Gaviscon); sucralfato; PPI (omeprazolo) se necessario, considerati sicuri." },
];

export const argomenti = [...new Set(domande.map(d => d.argomento))];
export default domande;
