// domande.js — database completo estratto dai PDF
// Formato: { id, argomento, domanda, risposta }
// Fonte: "Terapia Medica" dispensa Enrica Piazza (UNISR)

const domande = [
  // --- 1. FEBBRE, ANTIPIRETICI E IPERTERMIA -------------------------------
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

  // --- 2. TERAPIA DEL DOLORE -----------------------------------------------
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

  // --- 3. INFEZIONI ALTE VIE AEREE -----------------------------------------
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

  // --- 4. INFLUENZA --------------------------------------------------------
  { id: 38, argomento: "Influenza", domanda: "4 fattori di rischio per influenza complicata.", risposta: "Età <2 o >65 anni, gravidanza, immunodepressione, obesità, malattie croniche (cardiopolmonari, diabete), residenza in RSA." },
  { id: 39, argomento: "Influenza", domanda: "Effetti collaterali dello zanamivir.", risposta: "Broncospasmo e tosse (controindicato in asmatici/BPCO), cefalea, nausea." },
  { id: 40, argomento: "Influenza", domanda: "Effetti collaterali dell'oseltamivir.", risposta: "Nausea, vomito, dolore addominale, cefalea; raramente disturbi neuropsichiatrici (delirio nel bambino)." },
  { id: 41, argomento: "Influenza", domanda: "Effetti collaterali degli adamantani.", risposta: "Ansia, insonnia, allucinazioni, delirio." },
  { id: 42, argomento: "Influenza", domanda: "Classe di antivirali che dà alte resistenze dopo pochi giorni d'uso.", risposta: "Adamantani (amantadina/rimantadina)." },
  { id: 43, argomento: "Influenza", domanda: "Qual è il principale farmaco antivirale per l'influenza e quando è più efficace?", risposta: "Oseltamivir (inibitore della neuraminidasi); massima efficacia se iniziato entro 48 h dall'esordio dei sintomi." },

  // --- 5. COVID-19 ----------------------------------------------------------
  { id: 44, argomento: "COVID-19", domanda: "Antivirale orale per il COVID.", risposta: "Nirmatrelvir/ritonavir (Paxlovid)." },
  { id: 45, argomento: "COVID-19", domanda: "Quando dare il desametasone nel COVID?", risposta: "Solo nel paziente ospedalizzato che necessita di ossigeno: desametasone 6 mg/die per 10 gg." },
  { id: 46, argomento: "COVID-19", domanda: "Un anticitochinico approvato per il COVID e il suo target.", risposta: "Tocilizumab (anti-IL-6) o anakinra (antagonista del recettore IL-1)." },
  { id: 47, argomento: "COVID-19", domanda: "Quale biologico inficia la produzione di anticorpi anti-COVID (e risposta vaccinale)?", risposta: "Rituximab (anti-CD20)." },
  { id: 48, argomento: "COVID-19", domanda: "Effetto collaterale raro del vaccino a vettore virale per COVID.", risposta: "Trombosi con trombocitopenia (VITT), mediata da anticorpi anti-PF4." },
  { id: 49, argomento: "COVID-19", domanda: "Paziente COVID ipossiemico in ossigenoterapia a basso flusso: quale schema terapeutico?", risposta: "Remdesivir + desametasone 6 mg/die per circa 10 giorni." },
  { id: 50, argomento: "COVID-19", domanda: "Qual è l'antivirale orale precoce per COVID a rischio di progressione e una sua importante criticità?", risposta: "Nirmatrelvir/ritonavir (Paxlovid); attenzione alle numerose interazioni farmacologiche legate al ritonavir." },

  // --- 6. POLMONITI ---------------------------------------------------------
  { id: 51, argomento: "Polmoniti", domanda: "CAP senza allergie e senza fattori di rischio per MDR: terapia.", risposta: "Amoxicillina-clavulanato (o cefalosporina di 2ª/3ª gen.) + macrolide (azitromicina o claritromicina)." },
  { id: 52, argomento: "Polmoniti", domanda: "CAP in paziente allergico ai β-lattamici.", risposta: "Fluorochinolone respiratorio: levofloxacina 750 mg o moxifloxacina 400 mg." },
  { id: 53, argomento: "Polmoniti", domanda: "2 farmaci per CAP da MRSA.", risposta: "Vancomicina o linezolid (associati alla terapia per CAP standard)." },
  { id: 54, argomento: "Polmoniti", domanda: "Polmonite ab ingestis con ascesso: terapia.", risposta: "Piperacillina-tazobactam o carbapenemico + metronidazolo o clindamicina." },
  { id: 55, argomento: "Polmoniti", domanda: "HAP senza fattori di rischio MDR.", risposta: "Piperacillina-tazobactam (oppure cefepime/levofloxacina) a copertura di Pseudomonas." },
  { id: 56, argomento: "Polmoniti", domanda: "HAP >7 giorni (tardiva): terapia.", risposta: "Antipseudomonas: ceftazidime o piperacillina-tazobactam o meropenem + (levofloxacina/ciprofloxacina o amikacina)." },
  { id: 57, argomento: "Polmoniti", domanda: "HAP con MDR e sospetto MRSA.", risposta: "Carbapenemico (o pip-tazo) + (levofloxacina o amikacina) + (vancomicina/linezolid/teicoplanina)." },
  { id: 58, argomento: "Polmoniti", domanda: "Polmonite acuta in paziente epilettico in fenobarbital.", risposta: "Amoxicillina-clavulanato + azitromicina; evitare chinoloni e carbapenemici (abbassano la soglia convulsiva)." },
  { id: 59, argomento: "Polmoniti", domanda: "A cosa serve il CURB-65 e quali parametri valuta?", risposta: "Stratifica la gravità della CAP e la sede di cura: Confusione, Urea, Frequenza Respiratoria, Blood pressure, età ≥65 anni." },

  // --- 7. TUBERCOLOSI -------------------------------------------------------
  { id: 60, argomento: "Tubercolosi", domanda: "Terapia della TBC latente: farmaco, dose e durata.", risposta: "Isoniazide 5 mg/kg/die per 6-9 mesi, oppure rifampicina 10 mg/kg per 4 mesi, oppure entrambe per 3 mesi." },
  { id: 61, argomento: "Tubercolosi", domanda: "Farmaci della terapia iniziale della TBC attiva.", risposta: "Isoniazide + rifampicina + etambutolo + pirazinamide (fase intensiva 2 mesi)." },
  { id: 62, argomento: "Tubercolosi", domanda: "Isoniazide: quale effetto collaterale dà e come lo previeni?", risposta: "Neuropatia periferica; si previene con vitamina B6 (piridossina)." },
  { id: 63, argomento: "Tubercolosi", domanda: "Quale anti-TBC ha più interazioni farmacologiche?", risposta: "Rifampicina (potente induttore enzimatico del CYP450)." },
  { id: 64, argomento: "Tubercolosi", domanda: "Qual è lo schema standard della TBC polmonare e la sua durata?", risposta: "2 mesi di fase intensiva con H+R+Z+E, seguiti da 4 mesi di continuazione con H+R (6 mesi totali)." },
  { id: 65, argomento: "Tubercolosi", domanda: "Quale tossicità specifica va monitorata con l'etambutolo?", risposta: "La neurite ottica (alterazioni del visus e della discriminazione dei colori)." },

  // --- 8. ENDOCARDITI -------------------------------------------------------
  { id: 66, argomento: "Endocarditi infettive", domanda: "Endocardite da streptococco penicillino-sensibile su valvola nativa.", risposta: "Ceftriaxone 2 g IV/die per 4 settimane (± gentamicina per 2 settimane); vancomicina se allergico." },
  { id: 67, argomento: "Endocarditi infettive", domanda: "Endocardite da S. aureus meticillino-sensibile (MSSA) su valvola nativa.", risposta: "Oxacillina/nafcillina (± gentamicina opzionale)." },
  { id: 68, argomento: "Endocarditi infettive", domanda: "Endocardite da MSSA su valvola protesica.", risposta: "Oxacillina/nafcillina + rifampicina + gentamicina." },
  { id: 69, argomento: "Endocarditi infettive", domanda: "In quale endocardite si aggiunge rifampicina?", risposta: "Endocardite su valvola protesica da stafilococchi." },
  { id: 70, argomento: "Endocarditi infettive", domanda: "Endocardite da MRSA su valvola nativa.", risposta: "Vancomicina 30 mg/kg/die per 6 settimane (± gentamicina)." },
  { id: 71, argomento: "Endocarditi infettive", domanda: "Profilassi dell'endocardite prima di procedura odontoiatrica in paziente a rischio.", risposta: "Amoxicillina (o ampicillina) 2 g per os 30-60 min prima; se allergico azitromicina/claritromicina 500 mg o clindamicina 600 mg." },
  { id: 72, argomento: "Endocarditi infettive", domanda: "Perché nell'endocardite su protesi si aggiunge la rifampicina?", risposta: "Perché penetra bene nel biofilm e nei tessuti, utile contro i germi adesi al materiale protesico." },

  // --- 9. IVU ---------------------------------------------------------------
  { id: 73, argomento: "Infezioni vie urinarie", domanda: "Cistite non complicata: terapia con nome, dosaggio e durata.", risposta: "Prima linea: fosfomicina 3 g monodose, oppure nitrofurantoina 100 mg x2 per 5 gg." },
  { id: 74, argomento: "Infezioni vie urinarie", domanda: "Pielonefrite non complicata: farmaco di prima linea.", risposta: "Fluorochinolone: ciprofloxacina 500 mg x2 per 7 gg o levofloxacina 750 mg per 5 gg." },
  { id: 75, argomento: "Infezioni vie urinarie", domanda: "Pielonefrite in paziente gravida.", risposta: "Urinocoltura + test di gravidanza; ricovero ed empirica con β-lattamico (ceftriaxone); evitare fluorochinoloni e TMP-SMX." },
  { id: 76, argomento: "Infezioni vie urinarie", domanda: "Donna con 10 episodi di cistite/anno correlati al coito: profilassi.", risposta: "Profilassi post-coitale con nitrofurantoina 50-100 mg in dose singola." },
  { id: 77, argomento: "Infezioni vie urinarie", domanda: "Perché la nitrofurantoina non è indicata nella pielonefrite?", risposta: "Perché non raggiunge concentrazioni tissutali/parenchimali adeguate: agisce solo a livello urinario (cistite)." },

  // --- 10. ANTIBIOTICI ------------------------------------------------------
  { id: 78, argomento: "Principi di terapia antibiotica", domanda: "Farmaco attivo solo su Gram+, buon assorbimento orale e buona distribuzione tissutale.", risposta: "Linezolid." },
  { id: 79, argomento: "Principi di terapia antibiotica", domanda: "Un'indicazione per la vancomicina per os.", risposta: "Infezione da Clostridioides difficile (colite pseudomembranosa)." },
  { id: 80, argomento: "Principi di terapia antibiotica", domanda: "In quale sede NON si usa la daptomicina?", risposta: "Nel polmone (è inattivata dal surfattante)." },
  { id: 81, argomento: "Principi di terapia antibiotica", domanda: "3 effetti avversi dei fluorochinoloni.", risposta: "Tendinopatia/rottura tendinea, allungamento del QT, abbassamento della soglia convulsiva (+ disglicemie, fototossicità)." },
  { id: 82, argomento: "Principi di terapia antibiotica", domanda: "Effetti collaterali della gentamicina.", risposta: "Nefrotossicità, ototossicità, tossicità GI, blocco neuromuscolare." },
  { id: 83, argomento: "Principi di terapia antibiotica", domanda: "Antibiotico da non associare al metotrexato.", risposta: "Trimetoprim-sulfametossazolo (TMP-SMX), per antagonismo sui folati e tossicità midollare additiva." },
  { id: 84, argomento: "Principi di terapia antibiotica", domanda: "Quale cefalosporina di 3ª ha azione su Pseudomonas?", risposta: "Ceftazidime." },
  { id: 85, argomento: "Principi di terapia antibiotica", domanda: "Che differenza c'è tra terapia antibiotica empirica e mirata?", risposta: "L'empirica si basa sul sospetto clinico/epidemiologico prima dell'antibiogramma; la mirata segue l'isolamento del germe e la sua sensibilità." },

  // --- 11. SEPSI ------------------------------------------------------------
  { id: 86, argomento: "Sepsi e shock settico", domanda: "Tre azioni iniziali nella sepsi (sepsis six).", risposta: "Ossigenoterapia, emocolture (prima degli antibiotici) e antibioticoterapia empirica precoce; + fluidi, lattati, diuresi." },
  { id: 87, argomento: "Sepsi e shock settico", domanda: "Entro quanto tempo va iniziata la terapia antibiotica nella sepsi?", risposta: "Entro 1 ora dal riconoscimento (≤60 minuti)." },
  { id: 88, argomento: "Sepsi e shock settico", domanda: "Tre vasopressori nello shock settico.", risposta: "Noradrenalina (1ª scelta), vasopressina (ADH), adrenalina/dopamina come aggiunta." },
  { id: 89, argomento: "Sepsi e shock settico", domanda: "Cosa misuro nel sangue per stabilire la gravità della sepsi?", risposta: "Il lattato (la clearance dei lattati indica la risposta)." },
  { id: 90, argomento: "Sepsi e shock settico", domanda: "Definizione di shock settico.", risposta: "Sepsi con ipotensione persistente che richiede vasopressori per mantenere PAM ≥65 mmHg e lattati >2 mmol/L nonostante adeguata rianimazione volemica." },

  // --- 12. SCA / STEMI ------------------------------------------------------
  { id: 91, argomento: "Sindromi coronariche acute", domanda: "Tre farmaci da usare come DAPT (oltre all'aspirina) pre-PCI.", risposta: "Aspirina + uno tra ticagrelor 180 mg, prasugrel 60 mg (se diabetico) o clopidogrel 300-600 mg (se alto rischio emorragico)." },
  { id: 92, argomento: "Sindromi coronariche acute", domanda: "Tre farmaci che non possono mancare dopo uno STEMI.", risposta: "DAPT (aspirina + ticagrelor/prasugrel) per 12 mesi, statina ad alta intensità e ACE-inibitore (± β-bloccante)." },
  { id: 93, argomento: "Sindromi coronariche acute", domanda: "Almeno 3 controindicazioni alla trombolisi sistemica nell'infarto.", risposta: "Emorragia intracranica pregressa, ictus ischemico <3 mesi, dissezione aortica, trauma cranico recente, sanguinamento attivo." },
  { id: 94, argomento: "Sindromi coronariche acute", domanda: "Perché la morfina è rischiosa nell'infarto acuto?", risposta: "Rallenta lo svuotamento gastrico e l'assorbimento degli antiaggreganti orali (DAPT), riducendone l'efficacia." },
  { id: 95, argomento: "Sindromi coronariche acute", domanda: "STEMI a 3 ore da un centro hub: cosa fai sul territorio?", risposta: "Trombolisi farmacologica (se non controindicata) + DAPT, statina, controllo del dolore e ossigeno se necessario." },
  { id: 96, argomento: "Sindromi coronariche acute", domanda: "Dose di carico di ticagrelor e di clopidogrel nella SCA.", risposta: "Ticagrelor 180 mg (2 cp da 90 mg); clopidogrel 600 mg (2 cp da 300 mg)." },
  { id: 97, argomento: "Sindromi coronariche acute", domanda: "Per quanto tempo si prosegue di norma la DAPT dopo una SCA?", risposta: "Di solito 12 mesi, poi si prosegue con un singolo antiaggregante; la durata si modula sul rischio ischemico/emorragico." },

  // --- 13. CARDIOPATIA ISCHEMICA CRONICA -----------------------------------
  { id: 98, argomento: "Cardiopatia ischemica cronica", domanda: "Prima linea nell'angina variante (di Prinzmetal).", risposta: "Calcio-antagonista ad alto dosaggio (es. diltiazem 360 mg); se insufficiente aggiungere nitrato a lunga durata." },
  { id: 99, argomento: "Cardiopatia ischemica cronica", domanda: "Vasodilatatori sublinguali che il paziente può assumere prima di arrivare in ospedale.", risposta: "Nitroglicerina (trinitrina) sublinguale, ripetibile fino a 3 volte." },
  { id: 100, argomento: "Cardiopatia ischemica cronica", domanda: "Condizioni in cui si preferisce il bypass (CABG).", risposta: "Malattia multivasale estesa, diabete, alto rischio emorragico (per evitare DAPT prolungata)." },
  { id: 101, argomento: "Cardiopatia ischemica cronica", domanda: "Qual è la terapia antianginosa di prima linea per il controllo dei sintomi?", risposta: "I beta-bloccanti (e/o calcio-antagonisti); nitrati a breve durata per le crisi." },

  // --- 14. DISLIPIDEMIE -----------------------------------------------------
  { id: 102, argomento: "Dislipidemie", domanda: "Paziente con statine al massimo dosaggio: cosa aggiungi per ridurre ulteriormente le LDL?", risposta: "Ezetimibe; poi acido bempedoico; poi inibitore PCSK9 (evolocumab/alirocumab); infine inclisiran." },
  { id: 103, argomento: "Dislipidemie", domanda: "Meccanismo d'azione dell'ezetimibe.", risposta: "Riduce l'assorbimento intestinale del colesterolo bloccando il trasportatore NPC1L1." },
  { id: 104, argomento: "Dislipidemie", domanda: "Come agiscono gli inibitori di PCSK9?", risposta: "Bloccano PCSK9 impedendo la degradazione del recettore LDL epatico → più recettori → maggiore captazione di LDL." },
  { id: 105, argomento: "Dislipidemie", domanda: "Cos'è inclisiran?", risposta: "Piccolo RNA interferente (siRNA) che silenzia PCSK9; riduce le LDL con somministrazione semestrale." },
  { id: 106, argomento: "Dislipidemie", domanda: "Statina da NON usare nell'insufficienza renale grave.", risposta: "Rosuvastatina (escrezione renale)." },
  { id: 107, argomento: "Dislipidemie", domanda: "Effetti collaterali delle statine.", risposta: "Mialgie/miopatia (rara rabdomiolisi e miopatia autoimmune), aumento transaminasi, peggioramento del controllo glicemico." },
  { id: 108, argomento: "Dislipidemie", domanda: "Target LDL in uomo 60 anni diabetico non coronaropatico.", risposta: "<70 mg/dL (rischio alto); <55 mg/dL se rischio molto alto o danno d'organo." },
  { id: 109, argomento: "Dislipidemie", domanda: "Quando si sospende una statina per tossicità epatica?", risposta: "Quando le transaminasi superano 3 volte il limite superiore di norma." },
  { id: 110, argomento: "Dislipidemie", domanda: "Classi di farmaci per abbassare i trigliceridi in ordine di potenza.", risposta: "Fibrati > omega-3 > acido nicotinico > statine > ezetimibe." },

  // --- 15. ARITMIE E FA -----------------------------------------------------
  { id: 111, argomento: "Aritmie e fibrillazione atriale", domanda: "Farmaco per la cardioversione farmacologica nel paziente cardiopatico.", risposta: "Amiodarone (sicuro in cardiopatia strutturale e scompenso)." },
  { id: 112, argomento: "Aritmie e fibrillazione atriale", domanda: "Farmaci per il 'pill in the pocket'.", risposta: "Flecainide o propafenone per os, in pazienti senza cardiopatia strutturale." },
  { id: 113, argomento: "Aritmie e fibrillazione atriale", domanda: "Prima linea nella tachicardia parossistica sopraventricolare (TPSV).", risposta: "Manovre vagali, poi adenosina ev in bolo rapido." },
  { id: 114, argomento: "Aritmie e fibrillazione atriale", domanda: "Cos'è il CHA2DS2-VASc?", risposta: "Score del rischio tromboembolico nella FA, usato per decidere l'anticoagulazione." },
  { id: 115, argomento: "Aritmie e fibrillazione atriale", domanda: "Amiodarone: effetti collaterali a lungo termine.", risposta: "Disfunzione tiroidea (ipo/ipertiroidismo), fibrosi polmonare, microdepositi corneali, epatotossicità, proaritmia." },
  { id: 116, argomento: "Aritmie e fibrillazione atriale", domanda: "Su quali score basi la scelta di anticoagulare un paziente con FA non valvolare?", risposta: "CHA2DS2-VASc per il rischio tromboembolico, bilanciato con HAS-BLED per il rischio emorragico." },
  { id: 117, argomento: "Aritmie e fibrillazione atriale", domanda: "Effetti collaterali dell'adenosina.", risposta: "Flushing, dolore toracico, dispnea, breve asistolia/bradicardia; broncospasmo negli asmatici." },

  // --- 16. SCOMPENSO CARDIACO -----------------------------------------------
  { id: 118, argomento: "Scompenso cardiaco", domanda: "Terapia dello scompenso per ridurre la mortalità: i quattro pilastri.", risposta: "ACE-i/ARNI (sacubitril-valsartan) + β-bloccante + antialdosteronico + SGLT2-inibitore." },
  { id: 119, argomento: "Scompenso cardiaco", domanda: "Cos'è il sacubitril e quando si usa?", risposta: "Inibitore della neprilisina; associato a valsartan nello scompenso a FE ridotta ancora sintomatico nonostante terapia ottimale." },
  { id: 120, argomento: "Scompenso cardiaco", domanda: "Meccanismo d'azione degli SGLT2-inibitori.", risposta: "Inibiscono il cotrasportatore sodio-glucosio SGLT2 nel tubulo prossimale → glicosuria e natriuresi." },
  { id: 121, argomento: "Scompenso cardiaco", domanda: "Paziente con ginecomastia in terapia per scompenso: quale farmaco sospettare?", risposta: "Spironolattone (sostituire con eplerenone, che dà meno ginecomastia)." },
  { id: 122, argomento: "Scompenso cardiaco", domanda: "Almeno 2 effetti collaterali delle glifozine.", risposta: "Infezioni genito-urinarie, deplezione volemica/ipotensione, chetoacidosi diabetica euglicemica." },
  { id: 123, argomento: "Scompenso cardiaco", domanda: "Qual è il vantaggio del sacubitril/valsartan rispetto al solo ACE-inibitore?", risposta: "Maggiore efficacia nel ridurre mortalità e ospedalizzazioni; agisce anche sulla ritenzione idrica." },

  // --- 17. IPERTENSIONE -----------------------------------------------------
  { id: 124, argomento: "Ipertensione arteriosa", domanda: "Prima linea anti-ipertensiva nel paziente sano senza fattori di rischio.", risposta: "A scelta tra ACE-i/ARB, calcio-antagonista o tiazidico; spesso in associazione (es. ACE-i + calcio-antagonista)." },
  { id: 125, argomento: "Ipertensione arteriosa", domanda: "Farmaco di uso comune che dà tosse cronica.", risposta: "ACE-inibitore (accumulo di bradichinina)." },
  { id: 126, argomento: "Ipertensione arteriosa", domanda: "3 farmaci per la crisi ipertensiva con via di somministrazione.", risposta: "Labetalolo ev, urapidil ev, nitroglicerina/nitroprussiato ev (clonidina, esmololo ev)." },
  { id: 127, argomento: "Ipertensione arteriosa", domanda: "Farmaci antipertensivi controindicati in gravidanza.", risposta: "ACE-inibitori e sartani (e tiazidici sconsigliati)." },
  { id: 128, argomento: "Ipertensione arteriosa", domanda: "Ipertensione resistente: prima linea aggiuntiva.", risposta: "Aggiungere spironolattone (antialdosteronico) al regime di 3 farmaci (ACE-i/ARB + Ca-antagonista + tiazidico)." },
  { id: 129, argomento: "Ipertensione arteriosa", domanda: "Effetti collaterali dei tiazidici.", risposta: "Ipokaliemia, iponatriemia, iperuricemia, iperglicemia, ipercalcemia, disfunzione erettile." },
  { id: 130, argomento: "Ipertensione arteriosa", domanda: "Stenosi dell'arteria renale bilaterale: perché evitare ACE-i e sartani?", risposta: "Bloccano la vasocostrizione dell'arteriola efferente che mantiene la GFR → insufficienza renale acuta." },
  { id: 131, argomento: "Ipertensione arteriosa", domanda: "Perché non si associano mai un ACE-inibitore e un sartano?", risposta: "Perché agiscono sullo stesso sistema (RAAS) senza beneficio aggiuntivo e con maggior rischio di iperkaliemia e danno renale." },

  // --- 18. ANTICOAGULANTI ---------------------------------------------------
  { id: 132, argomento: "Anticoagulanti e antiaggreganti", domanda: "Tre indicazioni agli anticoagulanti orali diretti (DOAC).", risposta: "Prevenzione dell'ictus nella FA non valvolare, trattamento di TVP/EP, profilassi del TEV dopo chirurgia ortopedica maggiore." },
  { id: 133, argomento: "Anticoagulanti e antiaggreganti", domanda: "Emorragia attiva grave in paziente in Coumadin (warfarin): cosa fai?", risposta: "Sospendere il farmaco, vitamina K ev e, se grave, concentrato del complesso protrombinico (PCC)." },
  { id: 134, argomento: "Anticoagulanti e antiaggreganti", domanda: "Necrosi cutanea da warfarin: cosa è successo e cosa fai?", risposta: "Calo rapido della proteina C (stato pro-trombotico iniziale). Sospendere warfarin, dare eparina (EBPM) e vitamina K." },
  { id: 135, argomento: "Anticoagulanti e antiaggreganti", domanda: "Qual è il bersaglio del warfarin e come si monitora?", risposta: "Inibisce la sintesi vitamina K-dipendente dei fattori II, VII, IX, X; si monitora con INR (target 2-3)." },
  { id: 136, argomento: "Anticoagulanti e antiaggreganti", domanda: "Cita i bersagli dei DOAC.", risposta: "Dabigatran inibisce la trombina (IIa); rivaroxaban, apixaban ed edoxaban inibiscono il fattore Xa." },
  { id: 137, argomento: "Anticoagulanti e antiaggreganti", domanda: "In quale contesto i DOAC sono controindicati a favore del warfarin?", risposta: "Nella FA valvolare (protesi meccanica/stenosi mitralica) e nella sindrome da anticorpi antifosfolipidi." },

  // --- 19. TEV / EP ---------------------------------------------------------
  { id: 138, argomento: "Tromboembolismo venoso", domanda: "Durata minima della terapia anticoagulante per una TVP.", risposta: "Almeno 3 mesi (più a lungo se TEV recidivante o fattore di rischio persistente)." },
  { id: 139, argomento: "Tromboembolismo venoso", domanda: "Paziente con EP ad alto rischio (ipoteso, tachicardico): terapia.", risposta: "Trombolisi sistemica (rtPA) + eparina; ECMO/embolectomia se controindicazioni o instabilità refrattaria." },
  { id: 140, argomento: "Tromboembolismo venoso", domanda: "Qual è oggi la terapia di prima scelta nella TVP/EP non complicata?", risposta: "I DOAC, salvo controindicazioni (es. insufficienza renale grave, gravidanza, sindrome da antifosfolipidi)." },

  // --- 20. ARTRITE REUMATOIDE -----------------------------------------------
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

  // --- 21. VASCULITI --------------------------------------------------------
  { id: 152, argomento: "Vasculiti e polimialgia", domanda: "Quale biologico è utile nell'arterite gigantocellulare e perché?", risposta: "Tocilizumab (anti-IL-6): consente una più rapida e sicura riduzione dello steroide, risparmiando dose cumulativa." },
  { id: 153, argomento: "Vasculiti e polimialgia", domanda: "Polimialgia reumatica con cefalea temporale: imposta la terapia.", risposta: "Sospetta arterite di Horton: glucocorticoidi (prednisone 40-60 mg/die se rischio ischemico) con scalo lento; tocilizumab se necessario." },
  { id: 154, argomento: "Vasculiti e polimialgia", domanda: "Granulomatosi con poliangioite (GPA): prima linea.", risposta: "Prednisone 1 mg/kg/die (o boli di metilprednisolone 500-1000 mg x3 se organi a rischio) + ciclofosfamide o rituximab." },

  // --- 22. LES E CONNETTIVITI -----------------------------------------------
  { id: 155, argomento: "LES e connettiviti", domanda: "Terapia della nefrite lupica III-IV.", risposta: "Induzione con ciclofosfamide (o micofenolato) + corticosteroide; mantenimento con micofenolato/azatioprina." },
  { id: 156, argomento: "LES e connettiviti", domanda: "Quale farmaco per il LES dà tossicità retinica?", risposta: "Idrossiclorochina (maculopatia: serve monitoraggio oculistico)." },
  { id: 157, argomento: "LES e connettiviti", domanda: "Due farmaci per l'ipertensione polmonare nella sclerosi sistemica.", risposta: "Antagonisti dell'endotelina (bosentan/ambrisentan) e PDE5-inibitori (sildenafil/tadalafil)." },
  { id: 158, argomento: "LES e connettiviti", domanda: "Prima linea nel Raynaud da sclerosi sistemica.", risposta: "Calcio-antagonista diidropiridinico (es. nifedipina/amlodipina)." },
  { id: 159, argomento: "LES e connettiviti", domanda: "Quale farmaco di fondo si usa praticamente in tutti i pazienti con LES?", risposta: "L'idrossiclorochina." },
  { id: 160, argomento: "LES e connettiviti", domanda: "Perché nella sindrome da anticorpi antifosfolipidi si preferisce il warfarin ai DOAC?", risposta: "Perché i DOAC si sono dimostrati meno efficaci nel prevenire le recidive trombotiche in questa sindrome." },

  // --- 23. IBD --------------------------------------------------------------
  { id: 161, argomento: "Malattie infiammatorie intestinali", domanda: "RCU lieve-moderata: terapia.", risposta: "Mesalazina orale 2,4-4,8 g/die + mesalazina topica (supposte/clismi)." },
  { id: 162, argomento: "Malattie infiammatorie intestinali", domanda: "RCU cortico-resistente: quale immunosoppressore prima dei biologici?", risposta: "Azatioprina (o 6-mercaptopurina)." },
  { id: 163, argomento: "Malattie infiammatorie intestinali", domanda: "RCU severa che non risponde ad azatioprina, paziente vuole solo terapia orale.", risposta: "JAK-inibitore orale (tofacitinib/upadacitinib)." },
  { id: 164, argomento: "Malattie infiammatorie intestinali", domanda: "Almeno 4 biologici approvati EMA per IBD.", risposta: "Infliximab, adalimumab, golimumab, vedolizumab (anche ustekinumab)." },
  { id: 165, argomento: "Malattie infiammatorie intestinali", domanda: "Cos'è vedolizumab e per cosa si usa?", risposta: "Anticorpo anti-integrina α4β7 (selettivo per l'intestino); RCU e Crohn." },
  { id: 166, argomento: "Malattie infiammatorie intestinali", domanda: "Crohn con sclerosi multipla: quale biologico?", risposta: "Vedolizumab (gut-selettivo); evitare gli anti-TNF, che possono peggiorare la demielinizzazione." },
  { id: 167, argomento: "Malattie infiammatorie intestinali", domanda: "Quali classi di farmaci si usano per indurre e mantenere la remissione nelle IBD moderate-gravi?", risposta: "Corticosteroidi per l'induzione; immunosoppressori (azatioprina) e biologici (anti-TNF) per il mantenimento." },

  // --- 24. GERD E H. PYLORI ------------------------------------------------
  { id: 168, argomento: "GERD e H. pylori", domanda: "Almeno 3 effetti collaterali degli inibitori di pompa (PPI).", risposta: "Infezioni enteriche (C. difficile), malassorbimento di B12/Mg/calcio/ferro, polmonite, danno renale, ipergastrinemia." },
  { id: 169, argomento: "GERD e H. pylori", domanda: "Prima linea per H. pylori in Italia.", risposta: "Terapia quadruplice con bismuto (PPI + bismuto + tetraciclina + metronidazolo = Pylera) per 10-14 gg." },
  { id: 170, argomento: "GERD e H. pylori", domanda: "GERD non complicato: terapia.", risposta: "PPI a dose singola (es. pantoprazolo 40 mg) prima dei pasti per 4-8 settimane + stile di vita." },
  { id: 171, argomento: "GERD e H. pylori", domanda: "Inibitori dell'acidità di nuova classe (PCAB): cosa sono?", risposta: "Vonoprazan (revaprazan): bloccanti competitivi del potassio sulla pompa protonica." },
  { id: 172, argomento: "GERD e H. pylori", domanda: "Equivalenze tra PPI.", risposta: "Omeprazolo 20 mg ≈ pantoprazolo 40 mg ≈ lansoprazolo 30 mg ≈ esomeprazolo 40 mg ≈ rabeprazolo 20 mg." },

  // --- 25. PANCREATITE ------------------------------------------------------
  { id: 173, argomento: "Pancreatite", domanda: "Idratazione nella pancreatite acuta: quale liquido?", risposta: "Ringer lattato, con idratazione moderata (non aggressiva), titolata sul paziente." },
  { id: 174, argomento: "Pancreatite", domanda: "Due cause più frequenti di pancreatite acuta.", risposta: "Calcoli biliari e alcol." },
  { id: 175, argomento: "Pancreatite", domanda: "Farmaco principale della pancreatite autoimmune.", risposta: "Corticosteroide (prednisone 0,5-1 mg/kg/die) con scalo lento." },

  // --- 26. CIRROSI ----------------------------------------------------------
  { id: 176, argomento: "Cirrosi epatica", domanda: "Ascite di grado 2 di nuova diagnosi: quale diuretico e dosaggio?", risposta: "Spironolattone 100 mg/die (titolabile fino a 400 mg), ± furosemide." },
  { id: 177, argomento: "Cirrosi epatica", domanda: "Prima azione in paziente con cirrosi e ascite di grado 3.", risposta: "Paracentesi evacuativa con infusione di albumina (≈8 g per litro rimosso oltre i 5 L)." },
  { id: 178, argomento: "Cirrosi epatica", domanda: "Terapia dell'encefalopatia porto-sistemica.", risposta: "Trattare i fattori precipitanti + lattulosio (acidificazione del colon) + rifaximina; aminoacidi ramificati se refrattaria." },
  { id: 179, argomento: "Cirrosi epatica", domanda: "Classe di antibiotici per la peritonite batterica spontanea (PBS).", risposta: "Cefalosporine di 3ª generazione (es. cefotaxime/ceftriaxone) o piperacillina-tazobactam." },
  { id: 180, argomento: "Cirrosi epatica", domanda: "Due farmaci per la profilassi del sanguinamento delle varici esofagee.", risposta: "β-bloccante non selettivo (propranololo o carvedilolo); in alternativa legatura endoscopica." },

  // --- 27. ANTIEMETICI E LASSATIVI -----------------------------------------
  { id: 181, argomento: "Antiemetici e farmaci GI", domanda: "Terapia antiemetica nel paziente con chemioterapia con cisplatino.", risposta: "Setrone (ondansetron) + desametasone ± antagonista NK1 (aprepitant)." },
  { id: 182, argomento: "Antiemetici e farmaci GI", domanda: "Effetti collaterali della metoclopramide.", risposta: "Sintomi extrapiramidali (distonia, parkinsonismo), iperprolattinemia, sonnolenza." },
  { id: 183, argomento: "Antiemetici e farmaci GI", domanda: "Paziente 75 anni in metoclopramide che sviluppa rigidità e amimia: cosa è successo?", risposta: "Parkinsonismo iatrogeno (sindrome extrapiramidale da metoclopramide); sospendere il farmaco." },
  { id: 184, argomento: "Antiemetici e farmaci GI", domanda: "Due lassativi osmotici.", risposta: "Lattulosio e macrogol (PEG/Movicol)." },

  // --- 28. TIROIDE ----------------------------------------------------------
  { id: 185, argomento: "Disfunzioni tiroidee", domanda: "Due farmaci che causano ipotiroidismo.", risposta: "Amiodarone e litio." },
  { id: 186, argomento: "Disfunzioni tiroidee", domanda: "Terapia della tireotossicosi grave da amiodarone.", risposta: "Tionamidi (metimazolo) + corticosteroide (per la forma tipo 2 distruttiva)." },
  { id: 187, argomento: "Disfunzioni tiroidee", domanda: "In quali condizioni tiroidee usi l'integrazione di selenio?", risposta: "Tiroidite di Hashimoto/autoimmune e ipotiroidismo subclinico (e orbitopatia di Basedow lieve)." },
  { id: 188, argomento: "Disfunzioni tiroidee", domanda: "In quali condizioni è necessario aumentare la dose di L-tiroxina?", risposta: "Gravidanza, malassorbimento (celiachia), farmaci che ne riducono l'assorbimento (PPI, ferro, calcio)." },
  { id: 189, argomento: "Disfunzioni tiroidee", domanda: "Qual è il tireostatico di prima scelta nell'ipertiroidismo e perché?", risposta: "Il metimazolo, per durata d'azione maggiore, effetto rapido e minori effetti collaterali rispetto al propiltiouracile." },

  // --- 29. DIABETE MELLITO T2 -----------------------------------------------
  { id: 190, argomento: "Diabete mellito tipo 2", domanda: "Iperglicemia che non migliora con lo stile di vita: cosa dai?", risposta: "Metformina (prima linea)." },
  { id: 191, argomento: "Diabete mellito tipo 2", domanda: "Meccanismo delle glifozine (SGLT2-inibitori).", risposta: "Inibiscono il cotrasportatore SGLT2 nel tubulo prossimale → glicosuria, calo ponderale e natriuresi." },
  { id: 192, argomento: "Diabete mellito tipo 2", domanda: "Meccanismo d'azione delle sulfaniluree.", risposta: "Bloccano i canali del potassio ATP-dipendenti della β-cellula → depolarizzazione e rilascio di insulina." },
  { id: 193, argomento: "Diabete mellito tipo 2", domanda: "Chetoacidosi diabetica con K normale: cosa fai per il potassio?", risposta: "Aggiungere KCl ai liquidi (10-20 mEq/h) prima/durante l'insulina, perché l'insulina lo farà scendere; monitorare K ed ECG." },
  { id: 194, argomento: "Diabete mellito tipo 2", domanda: "Paziente con metformina che deve fare TC con contrasto: cosa è importante?", risposta: "Sospendere la metformina (rischio di acidosi lattica con il mezzo di contrasto/danno renale)." },
  { id: 195, argomento: "Diabete mellito tipo 2", domanda: "Quale classe preferisci nel diabetico con scompenso cardiaco o malattia renale cronica e perché?", risposta: "Gli SGLT2-inibitori (gliflozine), per il beneficio cardio-renale dimostrato." },
  { id: 196, argomento: "Diabete mellito tipo 2", domanda: "Quale classe associa controllo glicemico e calo ponderale con beneficio cardiovascolare?", risposta: "Gli agonisti del GLP-1 (es. semaglutide, liraglutide)." },

  // --- 30. OSTEOPOROSI ------------------------------------------------------
  { id: 197, argomento: "Osteoporosi", domanda: "Almeno due bisfosfonati orali.", risposta: "Alendronato, risedronato, ibandronato." },
  { id: 198, argomento: "Osteoporosi", domanda: "Come si somministra l'alendronato?", risposta: "1 volta/settimana, al mattino a digiuno con acqua povera di calcio; restare in piedi 30 min, non assumere cibo/farmaci per 30-60 min." },
  { id: 199, argomento: "Osteoporosi", domanda: "Denosumab: meccanismo e indicazione.", risposta: "Anticorpo anti-RANKL che blocca gli osteoclasti; osteoporosi (prevenzione di fratture) e metastasi ossee." },
  { id: 200, argomento: "Osteoporosi", domanda: "Farmaco per osteoporosi che, se sospeso bruscamente, dà il maggior rischio di frattura.", risposta: "Denosumab (rebound; va seguito da un bisfosfonato)." },
  { id: 201, argomento: "Osteoporosi", domanda: "Farmaco anabolico puro per l'osteoporosi.", risposta: "Teriparatide (analogo del PTH)." },
  { id: 202, argomento: "Osteoporosi", domanda: "Con quale dose/durata di steroide vanno dati i bisfosfonati?", risposta: "Se prednisone ≥5-7,5 mg/die (o equivalente) per ≥3 mesi." },

  // --- 31. IPERCALCEMIA -----------------------------------------------------
  { id: 203, argomento: "Ipercalcemia paraneoplastica", domanda: "Prima linea nell'ipercalcemia (oltre all'idratazione).", risposta: "Bisfosfonati ev (zoledronato); calcitonina per un effetto rapido; denosumab se refrattaria." },
  { id: 204, argomento: "Ipercalcemia paraneoplastica", domanda: "Paziente con K polmone, metastasi ossee, dolore, ipercalcemia: trattamento.", risposta: "Idratazione ± furosemide + bisfosfonato ev; calcitonina e steroide se severa; bisfosfonati anche per il dolore osseo." },

  // --- 32. NEFROLOGIA / IRC -------------------------------------------------
  { id: 205, argomento: "Nefrologia e IRC", domanda: "2 farmaci per l'iperfosfatemia nell'IRC.", risposta: "Chelanti del fosforo: sevelamer (resina) e carbonato/acetato di calcio (o carbonato di lantanio)." },
  { id: 206, argomento: "Nefrologia e IRC", domanda: "Terapia dell'iperkaliemia severa con alterazioni ECG.", risposta: "Calcio gluconato ev subito, poi insulina + glucosata (e β2-agonisti); rimozione con resine/diuretici o dialisi." },
  { id: 207, argomento: "Nefrologia e IRC", domanda: "Almeno 3 indicazioni alla dialisi d'urgenza.", risposta: "Iperkaliemia refrattaria (>6,5), acidosi metabolica severa, sovraccarico di fluidi refrattario, uremia sintomatica (pericardite/encefalopatia)." },
  { id: 208, argomento: "Nefrologia e IRC", domanda: "IRC grave con Hb 9,5: 2 trattamenti fondamentali.", risposta: "Ferro (preferibilmente ev) ed eritropoietina ricombinante (target Hb 10,5-11,5)." },
  { id: 209, argomento: "Nefrologia e IRC", domanda: "Quali due classi di farmaci rallentano la progressione della MRC con proteinuria?", risposta: "ACE-inibitori/sartani (riducono la proteinuria) e SGLT2-inibitori (nefroprotezione)." },

  // --- 33. IPB E DISFUNZIONE ERETTILE --------------------------------------
  { id: 210, argomento: "IPB e disfunzione erettile", domanda: "2 farmaci per l'IPB.", risposta: "α-litico (tamsulosina/silodosina) e inibitore 5-α-reduttasi (finasteride/dutasteride)." },
  { id: 211, argomento: "IPB e disfunzione erettile", domanda: "Effetti collaterali degli α-litici.", risposta: "Ipotensione ortostatica, congestione nasale, aneiaculazione, sincope, IFIS (sindrome dell'iride a bandiera)." },
  { id: 212, argomento: "IPB e disfunzione erettile", domanda: "Controindicazioni assolute ai PDE5-inibitori.", risposta: "Uso di nitrati/donatori di NO, retinite pigmentosa, intolleranza al farmaco." },
  { id: 213, argomento: "IPB e disfunzione erettile", domanda: "Qual è il meccanismo degli inibitori della PDE5 nella disfunzione erettile e una controindicazione assoluta?", risposta: "Aumentano il GMP ciclico favorendo l'erezione; controindicati con i nitrati per il rischio di grave ipotensione." },

  // --- 34. COMPLICANZE ANTITUMORALI -----------------------------------------
  { id: 214, argomento: "Complicanze terapia antitumorale", domanda: "Neutropenia febbrile: terapia empirica.", risposta: "Monoterapia con piperacillina-tazobactam (o cefepime/ceftazidime o carbapenemico) entro 1 h." },
  { id: 215, argomento: "Complicanze terapia antitumorale", domanda: "Neutropenia febbrile con persistenza/Gram+: cosa aggiungi?", risposta: "Vancomicina (es. piperacillina-tazobactam + vancomicina)." },
  { id: 216, argomento: "Complicanze terapia antitumorale", domanda: "Terapia per la prevenzione dell'iperuricemia da lisi tumorale.", risposta: "Idratazione + allopurinolo (prevenzione); rasburicase se iperuricemia già presente/alto rischio." },
  { id: 217, argomento: "Complicanze terapia antitumorale", domanda: "Paziente in pembrolizumab con miocardite immuno-relata: come tratti?", risposta: "Sospendere l'immunoterapia e dare alte dosi di corticosteroidi." },

  // --- 35. INSONNIA ---------------------------------------------------------
  { id: 218, argomento: "Insonnia", domanda: "Lemborexant: cos'è e dove si usa?", risposta: "Antagonista duale dei recettori dell'orexina (DORA); insonnia da inizio e mantenimento." },
  { id: 219, argomento: "Insonnia", domanda: "Trattamento della sindrome delle gambe senza riposo.", risposta: "Agonisti dopaminergici (pramipexolo/ropinirolo) o gabapentinoidi; clonazepam la sera nelle forme lievi." },
  { id: 220, argomento: "Insonnia", domanda: "Perché le benzodiazepine non sono ideali per l'insonnia cronica nell'anziano?", risposta: "Per rischio di tolleranza, dipendenza, cadute e deterioramento cognitivo; si preferiscono igiene del sonno e Z-drugs a breve termine." },

  // --- 36. MISCELLANEA ------------------------------------------------------
  { id: 221, argomento: "Miscellanea", domanda: "Principio attivo usato da 3000 anni come anti-infiammatorio.", risposta: "Colchicina." },
  { id: 222, argomento: "Miscellanea", domanda: "Dose minima di corticosteroidi che non dà effetti collaterali a lungo termine.", risposta: "≤7,5 mg/die di prednisone (o equivalente)." },
  { id: 223, argomento: "Miscellanea", domanda: "2 farmaci ipouricemizzanti.", risposta: "Allopurinolo e febuxostat (inibitori della xantina ossidasi)." },
  { id: 224, argomento: "Miscellanea", domanda: "Salbutamolo: classe e uso.", risposta: "β2-agonista a breve durata (SABA); broncodilatatore nell'asma/BPCO." },
  { id: 225, argomento: "Miscellanea", domanda: "Cosa dai in gravidanza per il reflusso?", risposta: "Antiacidi/alginati (es. Gaviscon); sucralfato; PPI (omeprazolo) se necessario, considerati sicuri." },
,

  // === NUOVE DOMANDE DALLA DISPENSA PIAZZA ===
// ─── FEBBRE E ANTIPIRETICI ────────────────────────────────────────────
  { id: 301, argomento: "Febbre e antipiretici", domanda: "Perché la febbre è evolutivamente conservata da 100 milioni di anni?", risposta: "Perché contribuisce all'attività del sistema immunitario (aumenta fagocitosi e citotossicità dei linfociti) e diminuisce la crescita batterica." },
  { id: 302, argomento: "Febbre e antipiretici", domanda: "Meccanismo d'azione comune a tutti gli antipiretici FANS.", risposta: "Inibiscono le COX e conseguentemente la sintesi di PGE2 a livello centrale (ipotalamo), abbassando il set-point termico." },
  { id: 303, argomento: "Febbre e antipiretici", domanda: "Perché i COXIB danno meno ulcere gastriche rispetto ai FANS classici?", risposta: "Perché inibiscono selettivamente la COX-2 risparmiando la COX-1 gastrica, che è responsabile della produzione di prostaglandine protettive della mucosa." },
  { id: 304, argomento: "Febbre e antipiretici", domanda: "Differenza tra febbre e ipertermia dal punto di vista fisiopatologico.", risposta: "La febbre comporta un innalzamento del set-point ipotalamico (mediato da PGE2); l'ipertermia è un aumento della temperatura corporea con set-point normale (es. colpo di calore, farmaci)." },
  { id: 305, argomento: "Febbre e antipiretici", domanda: "Perché nel colpo di calore NON si usano antipiretici?", risposta: "Perché il set-point ipotalamico è normale — gli antipiretici agiscono abbassando il set-point, ma nel colpo di calore il problema è la dispersione del calore, non il set-point." },
  { id: 306, argomento: "Febbre e antipiretici", domanda: "Terapia della sindrome serotoninergica da tramadolo + SSRI.", risposta: "Sospendere entrambi i farmaci, raffreddamento fisico, benzodiazepine per agitazione/mioclonie; nei casi gravi ciproeptadina (antagonista serotoninergico)." },

  // ─── TERAPIA DEL DOLORE ───────────────────────────────────────────────
  { id: 307, argomento: "Terapia del dolore", domanda: "Perché i FANS sono controindicati nell'insufficienza renale?", risposta: "Perché inibendo le prostaglandine renali riducono la vasodilatazione afferente necessaria a mantenere la GFR, peggiorando la funzione renale." },
  { id: 308, argomento: "Terapia del dolore", domanda: "Meccanismo d'azione del paracetamolo (diverso dai FANS).", risposta: "Inibisce la sintesi di PGE2 principalmente a livello centrale (SNC), con scarsa azione antiinfiammatoria periferica; non inibisce significativamente COX-1 o COX-2 periferiche." },
  { id: 309, argomento: "Terapia del dolore", domanda: "Effetti collaterali comuni a tutti gli oppioidi (da conoscere).", risposta: "Stipsi (non sviluppa tolleranza), nausea/vomito, sedazione, depressione respiratoria, ritenzione urinaria, miosi, dipendenza fisica." },
  { id: 310, argomento: "Terapia del dolore", domanda: "Perché la codeina non è efficace in alcuni pazienti?", risposta: "Perché è un profarmaco che richiede metabolizzazione da CYP2D6 a morfina; i metabolizzatori lenti (poor metabolizers) non la convertono e non ottengono analgesia." },
  { id: 311, argomento: "Terapia del dolore", domanda: "Antidoto degli oppioidi e suo meccanismo.", risposta: "Naloxone: antagonista competitivo puro dei recettori oppioidi μ, κ, δ; emivita breve (~30-90 min), può richiedere somministrazioni ripetute." },
  { id: 312, argomento: "Terapia del dolore", domanda: "Perché preferire il cerotto di fentanyl nel dolore cronico oncologico?", risposta: "Rilascio transdermico costante ogni 72h garantisce livelli plasmatici stabili senza picchi, con buona compliance; utile quando la via orale non è praticabile." },
  { id: 313, argomento: "Terapia del dolore", domanda: "Gabapentin e pregabalin: meccanismo nel dolore neuropatico.", risposta: "Legano la subunità α2δ dei canali del calcio voltaggio-dipendenti nei neuroni, riducendo il rilascio di neurotrasmettitori eccitatori nelle corna dorsali del midollo." },
  { id: 314, argomento: "Terapia del dolore", domanda: "Quando è indicato il ketorolac e per quanto tempo massimo?", risposta: "Dolore acuto moderato-severo (post-operatorio, colica renale); max 5 giorni per via parenterale per il rischio di tossicità renale e GI." },
  { id: 315, argomento: "Terapia del dolore", domanda: "Qual è il vantaggio dell'associazione ossicodone/naloxone (Targin) rispetto alla sola ossicodone?", risposta: "Il naloxone orale agisce localmente sull'intestino antagonizzando i recettori μ intestinali, riducendo la stipsi, senza ridurre l'analgesia sistemica (scarso assorbimento sistemico)." },

  // ─── INFEZIONI VIE AEREE SUPERIORI ────────────────────────────────────
  { id: 316, argomento: "Infezioni vie aeree superiori", domanda: "Score di Centor modificato (McIsaac): i 4 criteri principali.", risposta: "Essudato tonsillare, linfoadenopatia laterocervicale dolente, febbre >38°C, assenza di tosse. Ogni criterio = 1 punto; score ≥3 indica trattamento empirico o tampone." },
  { id: 317, argomento: "Infezioni vie aeree superiori", domanda: "Durata della terapia antibiotica per SBEGA e perché è importante rispettarla.", risposta: "10 giorni (amoxicillina) o monodose IM (penicillina G benzatina); la durata è fondamentale per eradicare lo streptococco e prevenire la febbre reumatica." },
  { id: 318, argomento: "Infezioni vie aeree superiori", domanda: "Perché nella maggior parte delle otiti medie acute si può aspettare 48-72h prima dell'antibiotico?", risposta: "Perché il 60-80% guarisce spontaneamente; la vigile attesa riduce l'uso di antibiotici e la selezione di resistenze, riservando la terapia ai casi che non migliorano." },
  { id: 319, argomento: "Infezioni vie aeree superiori", domanda: "Criterio per trattare una sinusite acuta con antibiotico.", risposta: "Sintomi persistenti >10 giorni senza miglioramento, oppure peggioramento dopo 5-7 giorni, o sintomi gravi (febbre >39°C, dolore intenso). Prima linea: amoxicillina-clavulanato." },
  { id: 320, argomento: "Infezioni vie aeree superiori", domanda: "Perché la pertosse va trattata in fase catarrale e non in fase parossistica?", risposta: "Perché in fase catarrale il batterio (Bordetella pertussis) è ancora presente e l'antibiotico può abbreviare la malattia; in fase parossistica l'antibiotico eradica il batterio ma non riduce i sintomi." },

  // ─── INFLUENZA ────────────────────────────────────────────────────────
  { id: 321, argomento: "Influenza", domanda: "Meccanismo d'azione degli inibitori della neuraminidasi.", risposta: "Inibiscono la neuraminidasi virale che scinde l'acido sialico, impedendo il rilascio dei virioni dalla cellula ospite e la diffusione del virus." },
  { id: 322, argomento: "Influenza", domanda: "Perché lo zanamivir è controindicato nei pazienti con BPCO o asma?", risposta: "Perché è somministrato per via inalatoria e può causare broncospasmo; in questi pazienti si preferisce oseltamivir orale." },
  { id: 323, argomento: "Influenza", domanda: "Perché gli adamantani (amantadina) non sono più usati nell'influenza A?", risposta: "Per l'altissima percentuale di resistenze sviluppate rapidamente (>99% dei ceppi circolanti H3N2 e H1N1 resistenti) e per i frequenti effetti collaterali neuropsichiatrici." },
  { id: 324, argomento: "Influenza", domanda: "Categorie per cui la vaccinazione antinfluenzale è raccomandata prioritariamente.", risposta: "Over 65, pazienti con malattie croniche (cardiache, polmonari, renali, diabete), immunodepressi, gravide, operatori sanitari, conviventi di soggetti a rischio." },
  { id: 325, argomento: "Influenza", domanda: "Come vengono selezionati i ceppi inclusi nel vaccino antinfluenzale ogni anno?", risposta: "Sulla base della sorveglianza OMS dei ceppi circolanti nell'emisfero opposto nella stagione precedente; il vaccino viene aggiornato ogni anno." },

  // ─── COVID-19 ─────────────────────────────────────────────────────────
  { id: 326, argomento: "COVID-19", domanda: "Quando è indicato il remdesivir nel COVID-19?", risposta: "Nel paziente ospedalizzato che necessita di ossigeno supplementare a basso flusso, in combinazione con desametasone 6 mg/die per 10 giorni." },
  { id: 327, argomento: "COVID-19", domanda: "Perché il ritonavir è presente nel Paxlovid (nirmatrelvir/ritonavir)?", risposta: "Il ritonavir non ha attività antivirale diretta sul SARS-CoV-2 ma è un inibitore del CYP3A4 che aumenta i livelli plasmatici del nirmatrelvir (boosting farmacocinetico)." },
  { id: 328, argomento: "COVID-19", domanda: "Meccanismo d'azione del nirmatrelvir.", risposta: "Inibitore della proteasi principale (Mpro/3CLpro) del SARS-CoV-2, impedisce il processamento dei poliproteine virali e la replicazione." },
  { id: 329, argomento: "COVID-19", domanda: "Quando è controindicato il desametasone nel COVID-19?", risposta: "Nel paziente che non necessita di ossigeno supplementare (malattia lieve): in questo caso i corticosteroidi possono essere dannosi, aumentando la replicazione virale." },
  { id: 330, argomento: "COVID-19", domanda: "Meccanismo della VITT (trombocitopenia trombotica) da vaccino a vettore virale.", risposta: "Formazione di anticorpi anti-PF4 che attivano le piastrine (simile alla HIT da eparina), causando trombocitopenia e trombosi paradossa; trattamento con IVIG e anticoagulanti non eparinici." },

  // ─── SINDROMI CORONARICHE ACUTE ───────────────────────────────────────
  { id: 331, argomento: "Sindromi coronariche acute", domanda: "Finestra temporale ottimale per la PCI primaria nello STEMI.", risposta: "Entro 90 minuti dal primo contatto medico (door-to-balloon time); se non raggiungibile entro 120 minuti, indicata trombolisi farmacologica." },
  { id: 332, argomento: "Sindromi coronariche acute", domanda: "Perché il prasugrel è controindicato nei pazienti con pregresso ictus/TIA?", risposta: "Perché studi clinici hanno dimostrato un aumento del rischio di eventi cerebrovascolari (possibile effetto paradosso); in questi pazienti si preferisce ticagrelor o clopidogrel." },
  { id: 333, argomento: "Sindromi coronariche acute", domanda: "Meccanismo d'azione del ticagrelor e differenza con clopidogrel.", risposta: "Ticagrelor è un antagonista reversibile e diretto del recettore P2Y12; clopidogrel è un profarmaco che richiede attivazione epatica (CYP2C19) e lega il recettore irreversibilmente." },
  { id: 334, argomento: "Sindromi coronariche acute", domanda: "Indicazioni ai nitrati nello STEMI e controindicazioni.", risposta: "Indicati per analgesia e controllo della pressione; controindicati nell'infarto del ventricolo destro (precarico-dipendente), ipotensione (PAS<90), uso recente di PDE5-inibitori." },
  { id: 335, argomento: "Sindromi coronariche acute", domanda: "Target di LDL dopo sindrome coronarica acuta e farmaco di prima scelta.", risposta: "LDL <55 mg/dL (o riduzione >50% dal basale); statina ad alta intensità (atorvastatina 40-80 mg o rosuvastatina 20-40 mg) da iniziare subito indipendentemente dal valore basale." },
  { id: 336, argomento: "Sindromi coronariche acute", domanda: "Ruolo dell'ossigeno supplementare nello STEMI.", risposta: "Va somministrato solo se SpO2 <94%; l'iperossia è dannosa perché causa vasocostrizione coronarica e può aumentare la zona di necrosi." },
  { id: 337, argomento: "Sindromi coronariche acute", domanda: "Quando aggiungere un ACE-inibitore dopo STEMI?", risposta: "Entro 24h, specialmente se FE ridotta (<40%), ipertensione, diabete o insufficienza renale; riduce il rimodellamento ventricolare e la mortalità." },

  // ─── CARDIOPATIA ISCHEMICA CRONICA ────────────────────────────────────
  { id: 338, argomento: "Cardiopatia ischemica cronica", domanda: "Meccanismo d'azione dei beta-bloccanti nell'angina stabile.", risposta: "Riducono la frequenza cardiaca e la contrattilità (effetto cronotropo e inotropo negativo), diminuendo il consumo di ossigeno miocardico; prolungano la diastole migliorando la perfusione coronarica." },
  { id: 339, argomento: "Cardiopatia ischemica cronica", domanda: "Meccanismo d'azione della ranolazina e quando usarla.", risposta: "Inibisce la corrente tardiva del sodio (INa tardiva) riducendo il sovraccarico di calcio intracellulare; usata nell'angina refrattaria come farmaco aggiuntivo senza effetti su FC e PA." },
  { id: 340, argomento: "Cardiopatia ischemica cronica", domanda: "Differenza tra angina stabile e instabile dal punto di vista fisiopatologico.", risposta: "Stabile: ischemia da stenosi fissa che si manifesta sotto sforzo, con soglia riproducibile. Instabile: rottura di placca con trombosi parziale, ischemia a riposo o con sforzo minimo, rischio elevato di IMA." },
  { id: 341, argomento: "Cardiopatia ischemica cronica", domanda: "Meccanismo d'azione dell'ivabradina e indicazione specifica.", risposta: "Inibisce selettivamente la corrente If (funny current) nel nodo del seno, riducendo la FC senza effetti inotropi; indicata nell'angina e nello scompenso quando i beta-bloccanti sono controindicati o insufficienti." },
  { id: 342, argomento: "Cardiopatia ischemica cronica", domanda: "Perché i calcio-antagonisti diidropiridinici sono preferiti nell'angina vasospastica?", risposta: "Perché causano vasodilatazione coronarica potente bloccando i canali del calcio nella muscolatura liscia vasale, contrastando lo spasmo coronarico; i beta-bloccanti sono controindicati (potenziano lo spasmo)." },
  { id: 343, argomento: "Cardiopatia ischemica cronica", domanda: "In quali pazienti si preferisce il CABG alla PCI?", risposta: "Malattia trivasale con diabete, malattia del tronco comune, ridotta funzione ventricolare; il CABG offre migliore sopravvivenza a lungo termine rispetto alla PCI in questi scenari." },

  // ─── DISLIPIDEMIE ─────────────────────────────────────────────────────
  { id: 344, argomento: "Dislipidemie", domanda: "Meccanismo d'azione delle statine.", risposta: "Inibiscono competitivamente la HMG-CoA reduttasi, enzima limitante della sintesi del colesterolo epatico; il calo del colesterolo intracellulare upregola i recettori LDL con maggiore captazione di LDL circolante." },
  { id: 345, argomento: "Dislipidemie", domanda: "Cosa fare se un paziente in statina sviluppa mialgie con CK elevata?", risposta: "Se CK <4x ULN: continuare con monitoraggio. Se CK 4-10x ULN: sospendere temporaneamente. Se CK >10x ULN o rabdomiolisi: sospendere immediatamente e idratare." },
  { id: 346, argomento: "Dislipidemie", domanda: "Meccanismo d'azione dell'acido bempedoico e vantaggio rispetto alle statine.", risposta: "Inibisce l'ATP-citrato liasi, a monte della HMG-CoA reduttasi nella sintesi del colesterolo; non viene attivato nel muscolo scheletrico, quindi non causa mialgie (utile negli intolleranti alle statine)." },
  { id: 347, argomento: "Dislipidemie", domanda: "Target LDL in paziente con pregresso infarto miocardico.", risposta: "LDL <55 mg/dL (rischio molto alto); se secondo evento cardiovascolare entro 2 anni nonostante terapia: considerare <40 mg/dL." },
  { id: 348, argomento: "Dislipidemie", domanda: "Cos'è la monacolina K e perché va considerata come una statina?", risposta: "È il principio attivo del riso rosso fermentato (integratore), con struttura identica alla lovastatina; stessa efficacia ipolipemizzante e stessi potenziali effetti collaterali (miopatie, epatotossicità)." },
  { id: 349, argomento: "Dislipidemie", domanda: "Perché i fibrati non vanno associati alle statine in genere?", risposta: "Il gemfibrozil inibisce la glucuronidazione delle statine aumentandone i livelli plasmatici con rischio di miopatia/rabdomiolisi; il fenofibrato è più sicuro ma richiede comunque cautela." },
  { id: 350, argomento: "Dislipidemie", domanda: "Ipercolesterolemia familiare omozigote: terapia di ultima linea quando farmaci insufficienti.", risposta: "LDL-aferesi (rimozione extracorporea delle LDL); in alternativa lomitapide (inibitore MTP) o evinacumab (anti-ANGPTL3) per ridurre ulteriormente le LDL." },

  // ─── ARITMIE E FA ─────────────────────────────────────────────────────
  { id: 351, argomento: "Aritmie e fibrillazione atriale", domanda: "Differenza tra cardioversione elettrica e farmacologica nella FA: quando preferire l'una o l'altra.", risposta: "Elettrica: più efficace (>90%), scelta in instabilità emodinamica. Farmacologica: preferita nel paziente stabile senza cardiopatia strutturale (flecainide/propafenone); amiodarone se cardiopatia." },
  { id: 352, argomento: "Aritmie e fibrillazione atriale", domanda: "Perché nella FA di durata >48h (o incerta) è necessaria l'anticoagulazione prima della cardioversione?", risposta: "Perché possono essersi formati trombi in auricola sinistra che la cardioversione potrebbe embolizzare; occorre anticoagulare per ≥3 settimane o eseguire eco-TEE per escludere trombi." },
  { id: 353, argomento: "Aritmie e fibrillazione atriale", domanda: "Meccanismo d'azione dell'amiodarone e perché è utile in presenza di cardiopatia strutturale.", risposta: "Classe III (blocca canali K, prolungando il potenziale d'azione) ma anche classi I, II, IV; non ha effetto inotropo negativo significativo, sicuro nello scompenso e nell'ipertrofia." },
  { id: 354, argomento: "Aritmie e fibrillazione atriale", domanda: "Score HAS-BLED: a cosa serve e cosa valuta.", risposta: "Stima il rischio emorragico nei pazienti in anticoagulazione per FA: Ipertensione, Anomalie renali/epatiche, Stroke, Bleeding, INR labile, Elderly (>65), Drugs/alcohol. Score ≥3 = alto rischio." },
  { id: 355, argomento: "Aritmie e fibrillazione atriale", domanda: "In quale FA il warfarin è preferito ai DOAC?", risposta: "FA valvolare (stenosi mitralica reumatica e protesi valvolare meccanica): i DOAC non sono approvati in questi contesti; il warfarin con target INR 2-3 (o 2.5-3.5 per protesi meccanica) resta lo standard." },
  { id: 356, argomento: "Aritmie e fibrillazione atriale", domanda: "Trattamento della tachicardia ventricolare polimorfa (torsade de pointes).", risposta: "Magnesio solfato ev (2 g in bolo); correggere ipokaliemia e ipomagnesiemia; se instabilità emodinamica: cardioversione elettrica; sospendere i farmaci che prolungano il QT." },
  { id: 357, argomento: "Aritmie e fibrillazione atriale", domanda: "Differenza tra flutter atriale e FA all'ECG.", risposta: "Flutter: attività atriale regolare a 'denti di sega' a 300 bpm con conduzione AV tipicamente 2:1 (FC ~150). FA: attività atriale irregolare e caotica >350 bpm con risposta ventricolare irregolare." },
  { id: 358, argomento: "Aritmie e fibrillazione atriale", domanda: "Quando impiantare un ICD in prevenzione primaria?", risposta: "FE ≤35% nonostante terapia medica ottimale per ≥3 mesi, in classe NYHA II-III, con aspettativa di vita >1 anno; riduce la mortalità per morte improvvisa aritmica." },

  // ─── SCOMPENSO CARDIACO ───────────────────────────────────────────────
  { id: 359, argomento: "Scompenso cardiaco", domanda: "Perché i beta-bloccanti vanno introdotti gradualmente nello scompenso e mai in fase acuta?", risposta: "Perché il loro effetto inotropo negativo acuto può precipitare lo scompenso; in fase stabile l'up-regulation dei recettori beta migliora la funzione ventricolare a lungo termine." },
  { id: 360, argomento: "Scompenso cardiaco", domanda: "Meccanismo con cui il sacubitril migliora lo scompenso.", risposta: "Inibisce la neprilisina, enzima che degrada BNP, ANP e altri peptidi natriuretici, potenziandone l'effetto: vasodilatazione, natriuresi, riduzione del rimodellamento ventricolare." },
  { id: 361, argomento: "Scompenso cardiaco", domanda: "Perché occorre un wash-out di 36h tra ACE-inibitore e sacubitril/valsartan?", risposta: "Per evitare il rischio di angioedema: sia ACE-inibitori che sacubitril aumentano i livelli di bradichinina (gli ACE-i ne riducono la degradazione, il sacubitril inibisce la neprilisina che la degrada)." },
  { id: 362, argomento: "Scompenso cardiaco", domanda: "Ruolo del ferro endovena nello scompenso cardiaco.", risposta: "La carenza di ferro (anche senza anemia) è frequente e peggiora la capacità funzionale; il ferro carbossimaltosio ev migliora sintomi, qualità di vita e riduce le ospedalizzazioni." },
  { id: 363, argomento: "Scompenso cardiaco", domanda: "Indicazione alla CRT (terapia di resincronizzazione cardiaca).", risposta: "Scompenso sintomatico (NYHA II-IV), FE ≤35%, QRS ≥150 ms (o 130-149 ms con morfologia LBBB), in ritmo sinusale; riduce la dissincronia ventricolare e migliora la FE." },
  { id: 364, argomento: "Scompenso cardiaco", domanda: "Classificazione NYHA dello scompenso: le 4 classi.", risposta: "I: nessuna limitazione. II: lieve limitazione con sforzi moderati. III: marcata limitazione con sforzi lievi. IV: sintomi a riposo, impossibilità a qualsiasi attività fisica." },

  // ─── IPERTENSIONE ARTERIOSA ───────────────────────────────────────────
  { id: 365, argomento: "Ipertensione arteriosa", domanda: "Meccanismo d'azione degli ACE-inibitori.", risposta: "Inibiscono l'enzima di conversione dell'angiotensina (ACE), bloccando la conversione di angiotensina I in angiotensina II (vasocostrittrice e stimolante l'aldosterone); riducono PA e proteggono reni e cuore." },
  { id: 366, argomento: "Ipertensione arteriosa", domanda: "Perché i sartani (ARB) non danno tosse a differenza degli ACE-inibitori?", risposta: "Perché bloccano direttamente il recettore AT1 dell'angiotensina II senza inibire l'ACE; la tosse da ACE-inibitori è causata dall'accumulo di bradichinina (non degradata dall'ACE), che i sartani non influenzano." },
  { id: 367, argomento: "Ipertensione arteriosa", domanda: "Perché i tiazidici sono meno efficaci nei pazienti di etnia africana come monoterapia con RAS-bloccanti?", risposta: "I pazienti afrodiscendenti hanno spesso ipertensione sodio-sensibile con bassa renina; i farmaci che bloccano il RAS sono meno efficaci in questo contesto, mentre calcio-antagonisti e tiazidici lo sono di più." },
  { id: 368, argomento: "Ipertensione arteriosa", domanda: "Definizione di ipertensione resistente e sua gestione.", risposta: "PA non controllata nonostante 3 farmaci (incluso un diuretico) a dosi ottimali. Aggiungere spironolattone (antialdosteronico) come 4° farmaco; escludere ipertensione secondaria (iperaldosteronismo, apnee notturne)." },
  { id: 369, argomento: "Ipertensione arteriosa", domanda: "Farmaci di prima scelta nell'ipertensione in gravidanza.", risposta: "Metildopa (più documentata), labetalolo, nifedipina a rilascio prolungato; controindicati ACE-inibitori, sartani, aliskiren (teratogeni)." },
  { id: 370, argomento: "Ipertensione arteriosa", domanda: "Meccanismo d'azione del nebivololo e suo vantaggio rispetto ad altri beta-bloccanti.", risposta: "Beta-bloccante selettivo β1 che stimola anche la produzione di NO endoteliale (vasodilatazione); migliore profilo metabolico (meno effetti su glicemia e lipidi) rispetto ai beta-bloccanti non selettivi." },
  { id: 371, argomento: "Ipertensione arteriosa", domanda: "Emergenza ipertensiva vs urgenza ipertensiva: differenza clinica e gestione.", risposta: "Emergenza: PA molto elevata con danno d'organo acuto (encefalopatia, IMA, dissezione aortica) → riduzione PA del 25% nella prima ora con farmaci ev. Urgenza: PA elevata senza danno d'organo → riduzione graduale in ore con farmaci orali." },

  // ─── PRINCIPI DI TERAPIA ANTIBIOTICA ─────────────────────────────────
  { id: 372, argomento: "Principi di terapia antibiotica", domanda: "Differenza tra antibiotici batteriostatici e battericidi: importanza clinica.", risposta: "Battericidi (beta-lattamici, aminoglicosidi, fluorochinoloni): uccidono i batteri; preferiti in immunodepressi, endocarditi, meningiti. Batteriostatici (macrolidi, tetracicline, linezolid): inibiscono la crescita, sufficienti in ospiti immunocompetenti." },
  { id: 373, argomento: "Principi di terapia antibiotica", domanda: "Meccanismo di resistenza ai beta-lattamici più comune.", risposta: "Produzione di beta-lattamasi (enzimi che idrolizzano l'anello beta-lattamico); nelle Gram-negative ESBL e carbapenemasi sono le più pericolose. Contrastabili con inibitori (clavulanato, sulbactam, tazobactam, avibactam)." },
  { id: 374, argomento: "Principi di terapia antibiotica", domanda: "Perché gli aminoglicosidi vengono somministrati in dose singola giornaliera?", risposta: "Perché hanno attività concentrazione-dipendente (più efficaci con picchi elevati) ed effetto post-antibiotico prolungato; la dose singola ottimizza l'efficacia e riduce la nefrotossicità rispetto a dosi frazionate." },
  { id: 375, argomento: "Principi di terapia antibiotica", domanda: "In quale infezione la daptomicina è assolutamente controindicata e perché?", risposta: "Nella polmonite: la daptomicina viene inattivata dal surfattante polmonare alveolare, perdendo completamente la sua attività antibatterica." },
  { id: 376, argomento: "Principi di terapia antibiotica", domanda: "Cos'è il de-escalation antibiotico e perché è importante?", risposta: "Consiste nel passare da una terapia empirica ad ampio spettro a una mirata e più ristretta dopo identificazione del patogeno e antibiogramma; riduce la pressione selettiva, le resistenze e i costi." },
  { id: 377, argomento: "Principi di terapia antibiotica", domanda: "Perché i carbapenemi abbassano la soglia convulsiva e in chi è particolarmente pericoloso?", risposta: "Antagonizzano i recettori GABA-A (soprattutto imipenem); particolarmente pericoloso in pazienti epilettici o con lesioni cerebrali. Il meropenem ha minor effetto proconvulsivante dell'imipenem." },
  { id: 378, argomento: "Principi di terapia antibiotica", domanda: "Tre classi di antibiotici con attività anti-MRSA.", risposta: "Glicopeptidi (vancomicina, teicoplanina), ossazolidinoni (linezolid), lipopeptidi (daptomicina); anche ceftarolina (cefalosporina V gen.) e tedizolid." },

  // ─── POLMONITI ────────────────────────────────────────────────────────
  { id: 379, argomento: "Polmoniti", domanda: "Definizione di polmonite nosocomiale (HAP) e healthcare-associated (HCAP).", risposta: "HAP: polmonite insorta ≥48h dopo il ricovero, non in incubazione all'ingresso. VAP: variante nel paziente intubato. HCAP: acquisita in contesti assistenziali (RSA, dialisi, ospedalizzazione recente)." },
  { id: 380, argomento: "Polmoniti", domanda: "Perché nella CAP grave si aggiunge un macrolide alla beta-lattamina?", risposta: "Per coprire i patogeni atipici (Legionella, Mycoplasma, Chlamydophila) che non rispondono ai beta-lattamici; la doppia copertura riduce la mortalità nella CAP grave." },
  { id: 381, argomento: "Polmoniti", domanda: "Criteri CURB-65: quando ospedalizzare.", risposta: "Score 0-1: gestione domiciliare. Score 2: considerare ospedalizzazione breve. Score ≥3: ospedalizzazione, valutare UTI. I parametri sono: Confusione, Urea >7 mmol/L, FR ≥30, PAS<90 o PAD≤60, età ≥65." },
  { id: 382, argomento: "Polmoniti", domanda: "Perché nella polmonite da Legionella si usano macrolidi o fluorochinoloni e non beta-lattamici?", risposta: "Legionella è un patogeno intracellulare; i beta-lattamici non penetrano nelle cellule e sono inefficaci. Macrolidi e fluorochinoloni raggiungono alte concentrazioni intracellulari." },
  { id: 383, argomento: "Polmoniti", domanda: "Trattamento della polmonite da Pneumocystis jirovecii (PCP) nell'immunodepresso.", risposta: "TMP-SMX ad alte dosi (15-20 mg/kg/die di TMP) per 21 giorni; aggiungere prednisone se PaO2 <70 mmHg. Profilassi con TMP-SMX 1 cp/die nei pazienti con CD4 <200 o in immunosoppressione cronica." },

  // ─── TUBERCOLOSI ──────────────────────────────────────────────────────
  { id: 384, argomento: "Tubercolosi", domanda: "Meccanismo d'azione dell'isoniazide.", risposta: "Inibisce la sintesi degli acidi micolici della parete cellulare micobatterica (tramite inibizione di InhA ed enoil-ACP reduttasi); batteriostatico sui bacilli quiescenti, battericida sui bacilli in replicazione." },
  { id: 385, argomento: "Tubercolosi", domanda: "Perché nella TBC si usano sempre almeno 4 farmaci in fase intensiva?", risposta: "Per prevenire la selezione di mutanti resistenti: la probabilità di resistenza spontanea a 4 farmaci simultanei è praticamente zero (prodotto delle singole probabilità)." },
  { id: 386, argomento: "Tubercolosi", domanda: "Monitoraggio obbligatorio durante terapia con etambutolo.", risposta: "Visus e discriminazione cromatica (rosso-verde) mensilmente; la neurite ottica è dose-dipendente e generalmente reversibile se il farmaco viene sospeso precocemente." },
  { id: 387, argomento: "Tubercolosi", domanda: "Perché la rifampicina è il farmaco più importante nello schema anti-TBC?", risposta: "È l'unico farmaco che uccide i bacilli in tutte le fasi metaboliche (replicanti, dormienti, intermittentemente attivi); è sterilizzante e la sua presenza è indispensabile per abbreviare la terapia a 6 mesi." },
  { id: 388, argomento: "Tubercolosi", domanda: "Definizione di TBC latente e quando trattarla.", risposta: "Infezione da M. tuberculosis senza malattia attiva (Quantiferon o Mantoux positivi, Rx torace negativo); trattare sempre prima di biologici/immunosoppressori, nei contatti recenti, nei migranti da aree ad alta endemia." },

  // ─── SEPSI E SHOCK SETTICO ────────────────────────────────────────────
  { id: 389, argomento: "Sepsi e shock settico", domanda: "Definizione di sepsi secondo i criteri Sepsis-3.", risposta: "Disfunzione d'organo pericolosa per la vita causata da una risposta dell'ospite disregolata a un'infezione; si identifica con un aumento acuto del SOFA score ≥2 punti." },
  { id: 390, argomento: "Sepsi e shock settico", domanda: "Perché i cristalloidi isottonici sono preferiti all'albumina come prima scelta nella sepsi?", risposta: "Per mancanza di evidenza di superiorità dell'albumina in termini di mortalità nei trial clinici (SAFE trial), a fronte di un costo molto superiore; l'albumina è considerata in casi selezionati (es. cirrosi)." },
  { id: 391, argomento: "Sepsi e shock settico", domanda: "Ruolo dei corticosteroidi nello shock settico refrattario.", risposta: "Idrocortisone 200 mg/die in infusione continua o dosi frazionate, se lo shock è refrattario ai vasopressori; riduce il tempo alla stabilizzazione emodinamica (risposta relativa ai corticosteroidi = CIRCI)." },
  { id: 392, argomento: "Sepsi e shock settico", domanda: "Perché la procalcitonina è utile nella gestione della sepsi batterica?", risposta: "Si eleva precocemente nelle infezioni batteriche gravi (non virali o fungine); utile per guidare la durata della terapia antibiotica (de-escalation quando scende >80% dal picco)." },

  // ─── ENDOCARDITI INFETTIVE ────────────────────────────────────────────
  { id: 393, argomento: "Endocarditi infettive", domanda: "Criteri maggiori di Duke per la diagnosi di endocardite infettiva.", risposta: "1) Emocolture positive con microrganismi tipici (2 di 2 o persistenti). 2) Evidenza di coinvolgimento endocardico all'ecocardiografia (vegetazioni, ascesso, deiscenza protesi) o nuovo rigurgito valvolare." },
  { id: 394, argomento: "Endocarditi infettive", domanda: "Perché nell'endocardite da S. aureus la terapia dura 6 settimane?", risposta: "Perché S. aureus è altamente virulento, penetra nel biofilm e può causare ascessi perivalvolari e metastasi settiche; la lunga durata è necessaria per sterilizzare completamente le vegetazioni." },
  { id: 395, argomento: "Endocarditi infettive", domanda: "Quando è indicata la chirurgia nell'endocardite infettiva?", risposta: "Scompenso cardiaco refrattario, infezione incontrollata (ascesso, fistola, aneurisma micotico), batteri difficili da eradicare (funghi, MRSA multiresistente), emboli settici ricorrenti nonostante terapia." },
  { id: 396, argomento: "Endocarditi infettive", domanda: "Batteri più frequentemente causa di endocardite su valvola nativa vs protesica precoce.", risposta: "Nativa: Streptococcus viridans (subacuta), S. aureus (acuta). Protesica precoce (<60 gg): S. epidermidis coagulasi-negativo, S. aureus (contaminazione intraoperatoria)." },

  // ─── INFEZIONI VIE URINARIE ───────────────────────────────────────────
  { id: 397, argomento: "Infezioni vie urinarie", domanda: "Perché la fosfomicina è ideale per la cistite non complicata?", risposta: "Monodose (3g in unica assunzione serale), alta concentrazione urinaria, attività su E. coli inclusi ceppi ESBL-produttori, scarso impatto sul microbiota intestinale, sicura in gravidanza." },
  { id: 398, argomento: "Infezioni vie urinarie", domanda: "Perché la nitrofurantoina non si usa nella pielonefrite?", risposta: "Non raggiunge concentrazioni tissutali e sieriche terapeutiche adeguate (si concentra solo nelle urine); non efficace per le infezioni del parenchima renale." },
  { id: 399, argomento: "Infezioni vie urinarie", domanda: "Quando trattare la batteriuria asintomatica?", risposta: "Solo in gravidanza (rischio di pielonefrite e parto prematuro) e prima di procedure urologiche invasive; in tutti gli altri casi (anziani, catetere, diabete) il trattamento non è indicato e aumenta le resistenze." },
  { id: 400, argomento: "Infezioni vie urinarie", domanda: "Ruolo degli estrogeni topici nella prevenzione delle IVU ricorrenti in menopausa.", risposta: "Il calo estrogenico in menopausa altera il microbiota vaginale (calo di Lactobacilli) aumentando la colonizzazione da enterobatteri; gli estrogeni topici ripristinano l'ecosistema vaginale riducendo le recidive." },

  // ─── DISFUNZIONI TIROIDEE ─────────────────────────────────────────────
  { id: 401, argomento: "Disfunzioni tiroidee", domanda: "Come va assunta la levotiroxina e perché a digiuno.", risposta: "Al mattino, 30-60 minuti prima di colazione, con solo acqua; il cibo (specialmente fibre, calcio, caffè) e alcuni farmaci (ferro, PPI, antiacidi) riducono l'assorbimento intestinale fino al 30-40%." },
  { id: 402, argomento: "Disfunzioni tiroidee", domanda: "Perché in gravidanza il fabbisogno di levotiroxina aumenta del 25-50%?", risposta: "Perché aumenta la TBG (globulina legante la tiroxina), la clearance renale dello iodio, il trasferimento di T4 al feto nel 1° trimestre e la degradazione di T4 da parte della placenta (desiodasi tipo 3)." },
  { id: 403, argomento: "Disfunzioni tiroidee", domanda: "Crisi tireotossica (storm tiroideo): trattamento d'emergenza.", risposta: "Propiltiouracile (blocca sintesi E conversione T4→T3) + ioduro di potassio (inibisce rilascio ormoni, dato 1h dopo PTU) + beta-bloccante (propranololo) + corticosteroide (desametasone) + supporto." },
  { id: 404, argomento: "Disfunzioni tiroidee", domanda: "Differenza tra ipotiroidismo subclinico e manifesto: quando trattare.", risposta: "Subclinico: TSH elevato con FT4 normale. Manifesto: TSH elevato con FT4 bassa. Trattare sempre il manifesto; nel subclinico trattare se TSH >10, sintomi, gravidanza o cardiopatia." },
  { id: 405, argomento: "Disfunzioni tiroidee", domanda: "Meccanismo con cui l'amiodarone causa disfunzione tiroidea.", risposta: "Contiene 37% di iodio (dose giornaliera libera ~6-12 mg/die vs fabbisogno 150 μg); può causare ipotiroidismo (eccesso iodio blocca sintesi = effetto Wolff-Chaikoff) o ipertiroidismo (tipo 1: eccesso substrato; tipo 2: tiroidite distruttiva)." },

  // ─── DIABETE MELLITO TIPO 2 ───────────────────────────────────────────
  { id: 406, argomento: "Diabete mellito tipo 2", domanda: "Perché la metformina è controindicata nella insufficienza renale grave (GFR<30)?", risposta: "Per il rischio di accumulo e acidosi lattica; la metformina è eliminata per via renale e il suo accumulo inibisce il complesso I mitocondriale aumentando la produzione di lattato." },
  { id: 407, argomento: "Diabete mellito tipo 2", domanda: "Meccanismo cardioprotettivo degli agonisti GLP-1 (es. semaglutide).", risposta: "Riducono PA, peso corporeo, infiammazione aterosclerotica; effetti diretti sul cuore (recettori GLP-1 cardiaci); dimostrata riduzione di eventi cardiovascolari maggiori (MACE) indipendentemente dal controllo glicemico." },
  { id: 408, argomento: "Diabete mellito tipo 2", domanda: "Quando preferire gli SGLT2-inibitori nel diabete tipo 2.", risposta: "In presenza di scompenso cardiaco (riducono ospedalizzazioni), IRC (nefroprotezione indipendente dalla glicemia), obesità (calo ponderale); anche come seconda linea dopo metformina in pazienti ad alto rischio CV." },
  { id: 409, argomento: "Diabete mellito tipo 2", domanda: "Target di HbA1c nel diabete tipo 2: quando essere meno stringenti.", risposta: "Target standard <7% (53 mmol/mol); meno stringente (<8%) negli anziani fragili, lunga durata di malattia, comorbidità severe, ipoglicemia ricorrente, aspettativa di vita limitata." },
  { id: 410, argomento: "Diabete mellito tipo 2", domanda: "Complicanze acute dell'ipoglicemia severa e trattamento.", risposta: "Neuroglicopenia (confusione, convulsioni, coma), aritmie, eventi cardiovascolari. Trattamento: glucosio orale se cosciente; glucagone IM/SC o glucosio ev (33% soluzione) se incosciente." },
  { id: 411, argomento: "Diabete mellito tipo 2", domanda: "Meccanismo della chetoacidosi diabetica e perché è rara nel tipo 2.", risposta: "Deficit assoluto di insulina → lipolisi → chetogenesi → acidosi metabolica con gap anionico aumentato. Rara nel tipo 2 perché la produzione insulinica residua sopprime la chetogenesi (ma possibile con SGLT2i = chetoacidosi euglicemica)." },

  // ─── OSTEOPOROSI ──────────────────────────────────────────────────────
  { id: 412, argomento: "Osteoporosi", domanda: "Meccanismo d'azione dei bisfosfonati e perché si somministrano a digiuno in posizione eretta.", risposta: "Inibiscono la farnesil-pirofosfato sintasi negli osteoclasti (via del mevalonato), inducendone l'apoptosi. A digiuno per massimizzare il ridotto assorbimento orale (1-3%); eretti per evitare esofagite da reflusso." },
  { id: 413, argomento: "Osteoporosi", domanda: "Effetto rebound del denosumab: cosa succede alla sospensione e come prevenirlo.", risposta: "Rapido riassorbimento osseo con calo della BMD e rischio elevato di fratture vertebrali multiple; prevenire somministrando un bisfosfonato (zoledronato) entro 6 mesi dall'ultima dose di denosumab." },
  { id: 414, argomento: "Osteoporosi", domanda: "Osteonecrosi della mandibola da bisfosfonati: fattori di rischio e prevenzione.", risposta: "Uso prolungato (>3 anni), bisfosfonati ev, procedure odontoiatriche invasive, radioterapia del cavo orale, glucocorticoidi. Prevenzione: visita odontoiatrica prima di iniziare, igiene orale rigorosa." },
  { id: 415, argomento: "Osteoporosi", domanda: "Differenza tra teriparatide e romosozumab come farmaci anabolici.", risposta: "Teriparatide (PTH 1-34): stimola la formazione ossea con attivazione degli osteoblasti; massimo 24 mesi. Romosozumab (anti-sclerostina): stimola la formazione E inibisce il riassorbimento contemporaneamente; massimo 12 mesi." },
  { id: 416, argomento: "Osteoporosi", domanda: "Quando preferire il calcitriolo al colecalciferolo nella supplementazione di vitamina D.", risposta: "Nell'IRC avanzata (deficit di idrossilazione renale 1-alfa) e nell'epatopatia grave (deficit di idrossilazione epatica 25); il calcitriolo è già la forma attiva e non richiede conversione." },

  // ─── ARTRITE REUMATOIDE ───────────────────────────────────────────────
  { id: 417, argomento: "Artrite reumatoide", domanda: "Perché il metotrexato si assume settimanalmente e non quotidianamente nell'AR?", risposta: "Per ridurre la tossicità cumulativa (mielotossicità, epatotossicità); la somministrazione settimanale sfrutta l'effetto antiproliferativo a lungo termine sui linfociti mantenendo un profilo di sicurezza accettabile." },
  { id: 418, argomento: "Artrite reumatoide", domanda: "Meccanismo d'azione di abatacept nell'AR.", risposta: "Proteina di fusione CTLA4-Ig che blocca la co-stimolazione T linfocitaria legando CD80/CD86 sulle APC, impedendo il segnale CD28 necessario per l'attivazione completa dei linfociti T." },
  { id: 419, argomento: "Artrite reumatoide", domanda: "Perché la sulfasalazina è uno dei DMARD sicuri in gravidanza?", risposta: "Non è teratogena alle dosi terapeutiche; è indicata nelle pazienti con AR che desiderano gravidanza insieme all'idrossiclorochina; il metotrexato e la leflunomide sono invece teratogeni e controindicati." },
  { id: 420, argomento: "Artrite reumatoide", domanda: "Differenza tra etanercept e gli altri anti-TNF (infliximab, adalimumab) nella struttura molecolare.", risposta: "Etanercept è una proteina di fusione recettore solubile TNF-Fc (non un anticorpo monoclonale); lega sia TNF-α che TNF-β (linfotossina). Gli altri sono anticorpi monoclonali che legano solo TNF-α." },
  { id: 421, argomento: "Artrite reumatoide", domanda: "Perché è necessario lo screening per HBV prima di terapia biologica e cosa fare se positivo.", risposta: "I biologici (specialmente rituximab) possono causare riattivazione dell'HBV con epatite fulminante. Se HBsAg+ o anti-HBc+: profilassi con entecavir o tenofovir per tutta la durata del biologico + 12 mesi dopo." },

  // ─── VASCULITI E POLIMIALGIA ──────────────────────────────────────────
  { id: 422, argomento: "Vasculiti e polimialgia", domanda: "Perché nell'arterite di Horton i corticosteroidi vanno iniziati PRIMA della biopsia?", risposta: "Per prevenire la cecità (neuropatia ottica ischemica anteriore), complicanza irreversibile che può insorgere nelle prime ore-giorni; la biopsia può essere eseguita fino a 2 settimane dopo l'inizio degli steroidi senza perdere sensibilità." },
  { id: 423, argomento: "Vasculiti e polimialgia", domanda: "Caratteristica clinica che distingue la polimialgia reumatica dall'arterite di Horton.", risposta: "La PMR è pura sindrome dolorosa (cingolo scapolare e pelvico, rigidità mattutina) senza coinvolgimento vascolare. L'arterite di Horton ha coinvolgimento dei grandi vasi con rischio ischemico (cefalea temporale, claudicatio, cecità)." },
  { id: 424, argomento: "Vasculiti e polimialgia", domanda: "Cos'è avacopan e perché è un risparmio di steroide nelle vasculiti ANCA?", risposta: "Inibitore orale del recettore C5a del complemento; nelle vasculiti ANCA-associate (GPA, MPA) permette di ridurre drasticamente la dose cumulativa di glucocorticoidi mantenendo l'efficacia, riducendo gli effetti collaterali steroidei." },

  // ─── LES E CONNETTIVITI ───────────────────────────────────────────────
  { id: 425, argomento: "LES e connettiviti", domanda: "Perché l'idrossiclorochina è usata praticamente in tutti i pazienti con LES.", risposta: "Riduce le riacutizzazioni, la mortalità, il rischio trombotico, il danno d'organo a lungo termine e permette di ridurre le dosi di steroide; ha anche effetti protettivi cardiovascolari e metabolici." },
  { id: 426, argomento: "LES e connettiviti", domanda: "Meccanismo d'azione del belimumab nel LES.", risposta: "Anticorpo monoclonale anti-BLyS (B Lymphocyte Stimulator/BAFF) che riduce la sopravvivenza dei linfociti B autoreattivi; approvato nel LES attivo non renale/neuropsichiatrico." },
  { id: 427, argomento: "LES e connettiviti", domanda: "Monitoraggio oculistico necessario con idrossiclorochina e perché.", risposta: "Visita oftalmica baseline e poi annuale dopo 5 anni (o prima se fattori di rischio); l'accumulo retinico causa maculopatia (danno irreversibile al bull's eye); il rischio aumenta con dose cumulativa >1000g e durata >10 anni." },
  { id: 428, argomento: "LES e connettiviti", domanda: "Trattamento del fenomeno di Raynaud grave refrattario ai calcio-antagonisti.", risposta: "Aggiungere PDE5-inibitore (sildenafil/tadalafil); nelle forme molto gravi con ulcere digitali: iloprost ev (PGI2 analogo), bosentan (anti-endotelina) per prevenzione delle ulcere." },
  { id: 429, argomento: "LES e connettiviti", domanda: "Miosite infiammatoria: farmaci di prima linea.", risposta: "Glucocorticoidi ad alte dosi (prednisone 1 mg/kg/die) come induzione; aggiungere precocemente metotrexato o azatioprina come risparmiatori di steroide; IVIG nelle forme refrattarie o con disfagia grave." },

  // ─── IBD ──────────────────────────────────────────────────────────────
  { id: 430, argomento: "Malattie infiammatorie intestinali", domanda: "Differenza tra RCU e Crohn dal punto di vista della distribuzione anatomica.", risposta: "RCU: interessa solo il colon, in modo continuo dal retto verso l'alto, con infiammazione mucosa/sottomucosa. Crohn: può coinvolgere tutto il tratto GI (bocca-ano), con distribuzione segmentaria e infiammazione transmurale (con stenosi e fistole)." },
  { id: 431, argomento: "Malattie infiammatorie intestinali", domanda: "Perché la budesonide è preferita al prednisone nell'ileo-Crohn lieve-moderato.", risposta: "Budesonide ha alto first-pass epatico (>90% metabolizzata) con minori effetti collaterali sistemici rispetto al prednisone; disponibile in formulazioni a rilascio ileale (Entocort) o colico (budesonide MMX)." },
  { id: 432, argomento: "Malattie infiammatorie intestinali", domanda: "Meccanismo d'azione di vedolizumab e perché è gut-selettivo.", risposta: "Anticorpo anti-integrina α4β7 che blocca il traffico leucocitario verso la mucosa intestinale (l'integrina α4β7 si lega alla MAdCAM-1 espressa solo nell'intestino); non causa immunosoppressione sistemica." },
  { id: 433, argomento: "Malattie infiammatorie intestinali", domanda: "Perché l'azatioprina richiede 3-6 mesi per mostrare effetto nelle IBD.", risposta: "È un profarmaco che viene convertito in 6-tioguanina nucleotidi attivi attraverso più passaggi enzimatici; l'accumulo cellulare di questi metaboliti richiede mesi per raggiungere concentrazioni terapeutiche nei linfociti." },
  { id: 434, argomento: "Malattie infiammatorie intestinali", domanda: "Cos'è la terapia 'top-down' nelle IBD e quando è indicata.", risposta: "Approccio che inizia con biologici (anti-TNF) precocemente senza passare per step terapeutici precedenti; indicato nei pazienti con malattia severa, fattori prognostici sfavorevoli (giovane età, malattia estesa, markers infiammatori elevati)." },

  // ─── GERD E H. PYLORI ────────────────────────────────────────────────
  { id: 435, argomento: "GERD e H. pylori", domanda: "Meccanismo d'azione dei PPI e perché vanno assunti prima dei pasti.", risposta: "Inibiscono irreversibilmente la pompa H+/K+-ATPasi delle cellule parietali (attivata dopo stimolazione dai pasti); vanno assunti 30-60 min prima del pasto per essere disponibili quando le pompe si attivano." },
  { id: 436, argomento: "GERD e H. pylori", domanda: "Differenza tra PPI e PCAB (vonoprazan) nel meccanismo d'azione.", risposta: "PPI: inibizione irreversibile covalente della pompa attiva (richiedono attivazione in ambiente acido). PCAB: inibizione competitiva reversibile del sito del potassio, attivi a qualsiasi pH, più rapidi e con minore variabilità interindividuale." },
  { id: 437, argomento: "GERD e H. pylori", domanda: "Quando richiedere una EGDS nel paziente con GERD.", risposta: "Sintomi d'allarme (disfagia, odinofagia, calo ponderale, anemia, ematemesi), mancata risposta ai PPI dopo 4-8 settimane, sintomi >5 anni (screening Barrett), età >55 anni con sintomi nuovi." },
  { id: 438, argomento: "GERD e H. pylori", domanda: "Test non invasivi per H. pylori: quali sono e quando usarli.", risposta: "Antigene fecale (accuratezza >95%, utile per diagnosi e controllo eradicazione). Urea breath test (gold standard non invasivo). Sierologia (solo per epidemiologia, non per eradicazione). Test fecale o breath test per confermare eradicazione 4 settimane dopo fine terapia." },
  { id: 439, argomento: "GERD e H. pylori", domanda: "Perché in Italia si usa la terapia quadruplice con bismuto come prima linea per H. pylori.", risposta: "Per l'elevata resistenza alla claritromicina in Italia (>15-20%), che rende la triplice terapia classica (PPI+claritromicina+amoxicillina) inefficace; il Pylera (bismuto+tetraciclina+metronidazolo) supera le resistenze." },

  // ─── PANCREATITE ──────────────────────────────────────────────────────
  { id: 440, argomento: "Pancreatite", domanda: "Perché il Ringer lattato è preferito alla fisiologica nell'idratazione della pancreatite acuta.", risposta: "Il Ringer lattato riduce la risposta infiammatoria sistemica e l'incidenza di SIRS rispetto alla fisiologica (salina); il pH più fisiologico del Ringer lattato è meglio tollerato dal pancreas infiammato." },
  { id: 441, argomento: "Pancreatite", domanda: "Perché gli antibiotici NON sono indicati di routine nella pancreatite acuta.", risposta: "Studi randomizzati non hanno dimostrato beneficio in termini di riduzione delle complicanze infettive o mortalità; gli antibiotici sono indicati solo in caso di necrosi infetta documentata (FNA con Gram+coltura positivi o bolle gassose alla TC)." },
  { id: 442, argomento: "Pancreatite", domanda: "Classificazione di Atlanta della pancreatite acuta: lieve, moderata, grave.", risposta: "Lieve: no disfunzione d'organo, no complicanze locali. Moderata: disfunzione d'organo transitoria (<48h) o complicanze locali senza insufficienza d'organo persistente. Grave: insufficienza d'organo persistente (>48h)." },
  { id: 443, argomento: "Pancreatite", domanda: "Pancreatite cronica: trattamento del dolore cronico.", risposta: "Scala OMS (FANS → oppioidi deboli → forti); enzimi pancreatici (riducono la stimolazione feedback del pancreas); in casi selezionati: blocco del plesso celiaco, chirurgia (derivazione o resezione)." },

  // ─── CIRROSI EPATICA ──────────────────────────────────────────────────
  { id: 444, argomento: "Cirrosi epatica", domanda: "Meccanismo fisiopatologico dell'ascite nella cirrosi.", risposta: "Ipertensione portale → vasodilatazione splancnica → riduzione del volume circolante effettivo → attivazione RAAS e sistema nervoso simpatico → ritenzione di sodio e acqua → ascite." },
  { id: 445, argomento: "Cirrosi epatica", domanda: "Perché lo spironolattone è il diuretico di prima scelta nell'ascite cirrotica.", risposta: "Perché nella cirrosi c'è iperaldosteronismo secondario; lo spironolattone (antialdosteronico) contrasta questo meccanismo fisiopatologico primario, mentre la furosemide agisce a valle come diuretico dell'ansa." },
  { id: 446, argomento: "Cirrosi epatica", domanda: "Sindrome epatorenale tipo 1: diagnosi e trattamento.", risposta: "Insufficienza renale acuta progressiva (raddoppio creatinina >2.5 mg/dL in <2 settimane) in paziente cirrotico con ascite, senza altra causa. Trattamento: terlipressina + albumina ev; trapianto epatico come terapia definitiva." },
  { id: 447, argomento: "Cirrosi epatica", domanda: "Profilassi primaria del sanguinamento da varici: quando iniziare.", risposta: "Varici medie-grandi (o piccole con segni rossi) e cirrosi Child B-C: iniziare beta-bloccante non selettivo (carvedilolo o propranololo) o legatura endoscopica; riducono la pressione portale e il rischio di sanguinamento." },
  { id: 448, argomento: "Cirrosi epatica", domanda: "Trattamento del sanguinamento acuto da varici esofagee.", risposta: "Terlipressina ev (o somatostatina/octreotide) + endoscopia urgente con legatura; profilassi antibiotica (norfloxacina o ceftriaxone) riduce la mortalità; TIPS se refrattario." },

  // ─── NEFROLOGIA E IRC ─────────────────────────────────────────────────
  { id: 449, argomento: "Nefrologia e IRC", domanda: "Perché gli SGLT2-inibitori sono nefroprotettivi indipendentemente dal controllo glicemico.", risposta: "Riducono la pressione intraglomerulare attraverso la vasocostrizione dell'arteriola afferente (mediata dalla tubulo-glomerular feedback), riducendo l'iperfiltrazione; effetto dimostrato anche nei non diabetici con CKD e proteinuria." },
  { id: 450, argomento: "Nefrologia e IRC", domanda: "Complicanze metaboliche dell'IRC da conoscere e loro trattamento.", risposta: "Anemia (EPO + ferro ev), iperfosfatemia (chelanti del fosforo), iperkaliemia (resine, dieta), acidosi metabolica (bicarbonato orale), iperparatiroidismo secondario (calcitriolo/paracalcitolo), ipertensione (ACE-i/ARB)." },
  { id: 451, argomento: "Nefrologia e IRC", domanda: "Perché l'acido etacrinico è preferito alla furosemide nell'IRC con allergia ai sulfamidici.", risposta: "La furosemide è un sulfamidico; l'acido etacrinico è l'unico diuretico dell'ansa non sulfamidico, usabile nei pazienti allergici; stessa efficacia come diuretico dell'ansa." },
  { id: 452, argomento: "Nefrologia e IRC", domanda: "Target di Hb nella terapia con EPO nell'IRC e perché non superarlo.", risposta: "Target Hb 10-11.5 g/dL; superare 12-13 g/dL aumenta il rischio di eventi trombotici, ictus e mortalità cardiovascolare (dimostrato nei trial CHOIR, CREATE, TREAT)." },

  // ─── IPB E DISFUNZIONE ERETTILE ──────────────────────────────────────
  { id: 453, argomento: "IPB e disfunzione erettile", domanda: "Meccanismo d'azione degli alfa-litici nell'IPB e effetti collaterali principali.", risposta: "Bloccano i recettori alfa-1 adrenergici nel collo vescicale e nella capsula prostatica, riducendo il tono muscolare liscio e migliorando il flusso urinario. ADR: ipotensione ortostatica (specialmente prima dose), aneiaculazione, IFIS." },
  { id: 454, argomento: "IPB e disfunzione erettile", domanda: "Meccanismo d'azione degli inibitori della 5-alfa-reduttasi e quando sono preferiti agli alfa-litici.", risposta: "Bloccano la conversione del testosterone in DHT (più potente), riducendo il volume prostatico del 20-30% in 6-12 mesi; preferiti nelle prostata voluminose (>40 mL), riducono il rischio di ritenzione urinaria acuta e chirurgia." },
  { id: 455, argomento: "IPB e disfunzione erettile", domanda: "Perché il tadalafil è l'unico PDE5-inibitore approvato anche per i LUTS/IPB.", risposta: "L'inibizione della PDE5 nella muscolatura liscia prostatica, uretrale e vescicale riduce il tono muscolare e migliora i sintomi del basso tratto urinario; tadalafil 5 mg/die è approvato per entrambe le indicazioni." },
  { id: 456, argomento: "IPB e disfunzione erettile", domanda: "Trattamento dell'eiaculazione precoce primaria: farmaci con evidenza.", risposta: "Dapoxetina (SSRI a breve emivita, on-demand 1-3h prima); SSRI cronici (paroxetina, sertralina) off-label; crema anestetica topica (lidocaina/prilocaina) per via topica." },

  // ─── COMPLICANZE TERAPIA ANTITUMORALE ────────────────────────────────
  { id: 457, argomento: "Complicanze terapia antitumorale", domanda: "Score MASCC: a cosa serve nella neutropenia febbrile.", risposta: "Stratifica il rischio di complicanze nella neutropenia febbrile; score ≥21 = basso rischio (possibile gestione orale/domiciliare); <21 = alto rischio (ricovero e terapia ev). Valuta sintomi, BPCO, ipotensione, scompenso, stato solido/ematologico." },
  { id: 458, argomento: "Complicanze terapia antitumorale", domanda: "Profilassi primaria con G-CSF: quando è indicata.", risposta: "Quando il rischio di neutropenia febbrile con il regime chemioterapico è >20%; o >10% in pazienti con fattori di rischio aggiuntivi (età >65, performance status ridotto, malattia avanzata, comorbidità)." },
  { id: 459, argomento: "Complicanze terapia antitumorale", domanda: "Sindrome da lisi tumorale: alterazioni metaboliche caratteristiche.", risposta: "Iperkaliemia, iperfosfatemia, iperuricemia, ipocalcemia (causata dall'iperfosfatemia); possono causare aritmie, insufficienza renale acuta, convulsioni. Trattamento: idratazione, allopurinolo/rasburicase, monitoraggio elettroliti." },
  { id: 460, argomento: "Complicanze terapia antitumorale", domanda: "Tossicità immune-relate (irAE) degli inibitori del checkpoint: come gestirle.", risposta: "Dipende dal grado: G1 continuare; G2 sospendere temporaneamente + corticosteroidi; G3-4 sospendere definitivamente + steroidi ad alte dosi (1-2 mg/kg/die prednisone); se refrattario: infliximab o micofenolato." },

  // ─── INSONNIA ─────────────────────────────────────────────────────────
  { id: 461, argomento: "Insonnia", domanda: "Prima linea non farmacologica nell'insonnia cronica.", risposta: "CBT-I (Cognitive Behavioral Therapy for Insomnia): comprende restrizione del sonno, controllo degli stimoli, igiene del sonno, tecniche di rilassamento, ristrutturazione cognitiva; superiore ai farmaci a lungo termine." },
  { id: 462, argomento: "Insonnia", domanda: "Meccanismo d'azione delle Z-drugs (zolpidem, zopiclone) e differenza con le benzodiazepine.", risposta: "Agonisti selettivi del sottotipo GABA-A contenente la subunità alfa-1 (responsabile della sedazione); minore effetto ansiolitico, miorilassante e anticonvulsivante rispetto alle BDZ che non hanno selettività di subunità." },
  { id: 463, argomento: "Insonnia", domanda: "Perché il ramelteon è utile nell'insonnia da desincronizzazione del ritmo circadiano.", risposta: "Agonista dei recettori MT1 e MT2 della melatonina nel nucleo soprachiasmatico; regola il ritmo circadiano senza causare dipendenza; particolarmente utile nell'insonnia da jet lag, turni di lavoro e nei pazienti anziani." },
  { id: 464, argomento: "Insonnia", domanda: "Perché le benzodiazepine sono problematiche per l'insonnia cronica nell'anziano.", risposta: "Aumentano il rischio di cadute e fratture (atassia, sedazione diurna), deterioramento cognitivo, delirium; sviluppo di tolleranza e dipendenza fisica; sopprimono il sonno REM e profondo; sindrome da astinenza alla sospensione." },

  // ─── ARTRITE PSORIASICA ───────────────────────────────────────────────
  { id: 465, argomento: "Artrite psoriasica", domanda: "Perché i DMARD convenzionali (metotrexato) non sono efficaci sulla forma assiale dell'artrite psoriasica.", risposta: "La spondiloartrite assiale è mediata principalmente da IL-17 e TNF a livello dell'entesi vertebrale, non dai meccanismi patogenetici (cellule T CD4) su cui agisce il metotrexato; quest'ultimo è utile solo sulle manifestazioni periferiche e cutanee." },
  { id: 466, argomento: "Artrite psoriasica", domanda: "Inibitore di PDE4 usato nell'artrite psoriasica: meccanismo e via di somministrazione.", risposta: "Apremilast: inibitore orale della fosfodiesterasi 4 (PDE4), che aumenta il cAMP intracellulare riducendo la produzione di citochine pro-infiammatorie (TNF, IL-17, IL-23); approvato per artrite psoriasica e psoriasi." },

  // ─── MISCELLANEA ──────────────────────────────────────────────────────
  { id: 467, argomento: "Miscellanea", domanda: "Gotta acuta: trattamento di prima scelta e meccanismo.", risposta: "Colchicina 1 mg al primo attacco poi 0.5 mg dopo 1h (o FANS ad alte dosi); la colchicina inibisce la polimerizzazione della tubulina nei neutrofili, bloccando la migrazione cellulare e la fagocitosi dei cristalli di urato." },
  { id: 468, argomento: "Miscellanea", domanda: "Perché il febuxostat è controindicato nei pazienti con cardiopatia ischemica.", risposta: "Lo studio CARES ha evidenziato un aumento della mortalità cardiovascolare rispetto all'allopurinolo; l'allopurinolo rimane il farmaco di prima scelta nell'iperuricemia, con febuxostat come alternativa solo in assenza di cardiopatia." },
  { id: 469, argomento: "Miscellanea", domanda: "Tre indicazioni cliniche della colchicina oltre alla gotta.", risposta: "Pericardite acuta e ricorrente (riduce le recidive), malattia di Behçet, febbre mediterranea familiare (FMF); anche in studio per eventi cardiovascolari (COLCOT trial)." },
  { id: 470, argomento: "Miscellanea", domanda: "Differenza tra farmaco generico e biosimilare.", risposta: "Generico: molecola chimica identica all'originatore (stessa struttura). Biosimilare: farmaco biologico (proteina) simile ma non identico all'originatore (stessa sequenza aminoacidica ma possibili differenze nella glicosilazione e struttura tridimensionale); richiede studi clinici di comparabilità." },
,

  // === DOMANDE MANCANTI DAI PDF - AGGIORNAMENTO COMPLETO ===
// ─── FEBBRE E ANTIPIRETICI (mancanti) ────────────────────────────────
  { id: 500, argomento: "Febbre e antipiretici", domanda: "Tramadolo associato ad antidepressivi: cosa succede?", risposta: "Sindrome serotoninergica (per accumulo di serotonina)." },

  // ─── TERAPIA DEL DOLORE (mancanti) ───────────────────────────────────
  { id: 501, argomento: "Terapia del dolore", domanda: "Paziente con diclofenac 75 mg x2 per lombalgia chiede altri 75 mg: cosa rispondi?", risposta: "No: la dose massima è 150 mg/die; eventualmente passare a un FANS topico o altra classe." },
  { id: 502, argomento: "Terapia del dolore", domanda: "Paziente con malattia di von Willebrand chiede ketorolac dopo intervento odontoiatrico: cosa fai?", risposta: "Lo eviti: i FANS inibiscono le piastrine e aumentano il rischio emorragico; usa paracetamolo ± oppioide debole." },
  { id: 503, argomento: "Terapia del dolore", domanda: "Paziente in ossicodone diventa stitico: come intervieni?", risposta: "Sostituire con ossicodone+naloxone (Targin); eventualmente lassativi." },

  // ─── INFEZIONI VIE AEREE SUPERIORI (mancanti) ────────────────────────
  { id: 504, argomento: "Infezioni vie aeree superiori", domanda: "Ragazzo 19 anni, febbre 39°C, linfoadenopatia cervicale dolente, tampone SBEGA+, allergico a penicillina: terapia?", risposta: "Azitromicina 12 mg/kg/die per 5 giorni (macrolide)." },
  { id: 505, argomento: "Infezioni vie aeree superiori", domanda: "Dolore frontale alla digitopressione da 48 h senza sintomi sistemici: cosa fai?", risposta: "Terapia sintomatica (analgesici, decongestionanti, lavaggi); è ragionevole attendere 7-10 gg prima dell'antibiotico." },
  { id: 506, argomento: "Infezioni vie aeree superiori", domanda: "Bambino con otalgia ma otoscopia negativa: cosa fai?", risposta: "Nessun antibiotico, vigile attesa 48-72 h." },
  { id: 507, argomento: "Infezioni vie aeree superiori", domanda: "Bambino 4 anni con tosse, raffreddore, essudato timpanico (no otalgia/otorrea/febbre): trattamento.", risposta: "Nessuna indicazione al trattamento antibiotico." },
  { id: 508, argomento: "Infezioni vie aeree superiori", domanda: "Almeno un antitussigeno ad azione diretta (centrale).", risposta: "Codeina, destrometorfano o clobutinolo." },

  // ─── INFLUENZA (mancanti) ─────────────────────────────────────────────
  { id: 509, argomento: "Influenza", domanda: "Influenza non complicata in soggetto sano: quando iniziare gli antivirali?", risposta: "Nelle forme non complicate in soggetti sani non c'è indicazione; gli antivirali si riservano ai pazienti a rischio entro 48 h dai sintomi." },
  { id: 510, argomento: "Influenza", domanda: "Donna anziana con recente influenza sviluppa delirio e allucinazioni: farmaco responsabile?", risposta: "Un adamantano (es. amantadina)." },
  { id: 511, argomento: "Influenza", domanda: "A quali categorie è raccomandata in particolare la vaccinazione antinfluenzale?", risposta: "Anziani (>65 anni), fragili/cronici, gravide e operatori sanitari." },

  // ─── COVID-19 (mancanti) ──────────────────────────────────────────────
  { id: 512, argomento: "COVID-19", domanda: "Nomina due antivirali usati nel COVID.", risposta: "Paxlovid (nirmatrelvir/ritonavir) e remdesivir." },
  { id: 513, argomento: "COVID-19", domanda: "Glucocorticoidi nel COVID a basso flusso vs alto flusso/intubazione.", risposta: "Basso flusso: desametasone 6 mg + remdesivir. Alto flusso/intubazione-ECMO: solo desametasone 6 mg; se non migliora → immunomodulatore." },
  { id: 514, argomento: "COVID-19", domanda: "Controindicazione assoluta al vaccino COVID.", risposta: "Reazione allergica grave/anafilassi al polietilenglicole (PEG) o a una dose precedente." },
  { id: 515, argomento: "COVID-19", domanda: "Vaccino AstraZeneca COVID: a quale categoria appartiene?", risposta: "Vaccino a vettore virale (adenovirus)." },
  { id: 516, argomento: "COVID-19", domanda: "Proteina del COVID bersaglio dei vaccini.", risposta: "La proteina Spike (S)." },
  { id: 517, argomento: "COVID-19", domanda: "Quale classe di immunomodulatori si usa nella tempesta citochinica del COVID grave?", risposta: "Anti-IL6 (tocilizumab) o anti-JAK (baricitinib), in aggiunta al corticosteroide." },

  // ─── POLMONITI (mancanti) ─────────────────────────────────────────────
  { id: 518, argomento: "Polmoniti", domanda: "CAP, paziente allergico ai sulfamidici che preferisce monoterapia.", risposta: "Monoterapia con fluorochinolone respiratorio (levofloxacina o moxifloxacina)." },
  { id: 519, argomento: "Polmoniti", domanda: "Polmonite da S. aureus meticillino-sensibile in cardiopatico: cosa dai?", risposta: "Amoxicillina-clavulanato 1 g ogni 8 h (oppure oxacillina/cefazolina)." },
  { id: 520, argomento: "Polmoniti", domanda: "Se allergico alla vancomicina, polmonite da MRSA: cosa dai?", risposta: "Linezolid (o teicoplanina)." },
  { id: 521, argomento: "Polmoniti", domanda: "2 farmaci per polmonite ab ingestis comunitaria.", risposta: "Amoxicillina-clavulanato o, in alternativa, levofloxacina/moxifloxacina ± clindamicina." },
  { id: 522, argomento: "Polmoniti", domanda: "HAP insorta da meno di 2 giorni, allergico ai β-lattamici.", risposta: "Fluorochinolone (levofloxacina/ciprofloxacina) ± aminoglicoside (amikacina); evitare β-lattamici." },
  { id: 523, argomento: "Polmoniti", domanda: "HAP senza rischio MDR, allergico ai chinoloni.", risposta: "Piperacillina-tazobactam; se tardiva, amikacina + ceftazidime o piperacillina-tazobactam." },
  { id: 524, argomento: "Polmoniti", domanda: "HAP, allergico alla vancomicina, sospetto MRSA: cosa dai?", risposta: "Linezolid o teicoplanina." },
  { id: 525, argomento: "Polmoniti", domanda: "Polmonite MRSA in insufficienza renale.", risposta: "Vancomicina con dose aggiustata sulla funzione renale (o linezolid, che non richiede aggiustamento)." },
  { id: 526, argomento: "Polmoniti", domanda: "Polmonite con pochi neutrofili e Gram+ (stafilococchi): terapia.", risposta: "Vancomicina 15 mg/kg ogni 12 h ev; eventualmente switch a linezolid." },
  { id: 527, argomento: "Polmoniti", domanda: "Polmonite ab ingestis comunitaria in paziente allergico ai fluorochinoloni.", risposta: "Amoxicillina-clavulanato (± clindamicina/metronidazolo)." },
  { id: 528, argomento: "Polmoniti", domanda: "Polmonite nosocomiale: perché si tende a scegliere il meropenem?", risposta: "Per coprire germi resistenti ed evitare lo sviluppo di resistenze; ampio spettro adatto alle infezioni nosocomiali." },

  // ─── TUBERCOLOSI (mancanti) ───────────────────────────────────────────
  { id: 529, argomento: "Tubercolosi", domanda: "Durata della terapia con isoniazide + rifampicina nella TBC latente.", risposta: "3 mesi (regime combinato settimanale/giornaliero)." },
  { id: 530, argomento: "Tubercolosi", domanda: "Quali farmaci anti-TBC si sospendono dopo i primi 2 mesi?", risposta: "Etambutolo e pirazinamide (si prosegue con isoniazide + rifampicina)." },
  { id: 531, argomento: "Tubercolosi", domanda: "Anti-TBC che sterilizza e quello che agisce più rapidamente.", risposta: "Sterilizza: rifampicina (e pirazinamide); agisce velocemente: isoniazide." },

  // ─── ENDOCARDITI (mancanti) ───────────────────────────────────────────
  { id: 532, argomento: "Endocarditi infettive", domanda: "Endocardite da S. viridans meticillino-sensibile su valvola nativa.", risposta: "Ceftriaxone (o penicillina) ± gentamicina; vancomicina se allergico ai β-lattamici." },
  { id: 533, argomento: "Endocarditi infettive", domanda: "Farmaco che si aggiunge spesso nell'endocardite su protesi da stafilococco.", risposta: "Rifampicina (+ gentamicina)." },
  { id: 534, argomento: "Endocarditi infettive", domanda: "Almeno 3 fattori di rischio cardiologici per endocardite.", risposta: "Valvola protesica, pregressa endocardite, cardiopatia congenita cianogena non corretta, trapianto cardiaco con valvulopatia." },
  { id: 535, argomento: "Endocarditi infettive", domanda: "Chi è a rischio di endocardite e va sottoposto a profilassi?", risposta: "Portatori di valvola protesica, pregressa endocardite, cardiopatie congenite cianogene; profilassi solo per procedure odontoiatriche che ledono la gengiva." },
  { id: 536, argomento: "Endocarditi infettive", domanda: "Profilassi endocardite in paziente con insufficienza mitralica prima di procedura odontoiatrica.", risposta: "Nessuna: l'insufficienza mitralica non è una condizione a rischio meritevole di profilassi." },
  { id: 537, argomento: "Endocarditi infettive", domanda: "Profilassi endocardite in portatore di valvola protesica prima di cistoscopia.", risposta: "Profilassi non routinaria per procedure genito-urinarie/endoscopiche; si valuta solo se infezione attiva." },
  { id: 538, argomento: "Endocarditi infettive", domanda: "Profilassi antibiotica prima di colonscopia.", risposta: "Non si esegue." },
  { id: 539, argomento: "Endocarditi infettive", domanda: "Endocardite su valvola nativa in paziente settico con fattori di rischio per Pseudomonas: quale terapia empirica?", risposta: "Vancomicina + meropenem." },

  // ─── IVU (mancanti) ───────────────────────────────────────────────────
  { id: 540, argomento: "Infezioni vie urinarie", domanda: "Cistite non complicata, 2ª linea, paziente che non può prendere fluorochinoloni.", risposta: "Amoxicillina-clavulanato o cefalosporina orale per 3-7 gg (oppure TMP-SMX 160+800 x2 per 3 gg)." },
  { id: 541, argomento: "Infezioni vie urinarie", domanda: "IVU non complicata che non ha risposto alla fosfomicina: 2ª linea.", risposta: "Ciprofloxacina 250 mg x2 per 3 gg, oppure amoxicillina-clavulanato/cefalosporina per 3-7 gg." },
  { id: 542, argomento: "Infezioni vie urinarie", domanda: "Eziologia più frequente della cistite.", risposta: "Escherichia coli (uropatogeno)." },
  { id: 543, argomento: "Infezioni vie urinarie", domanda: "Donna con IVU che risponde al bactrim ma ricade dopo 7 giorni: cosa fai?", risposta: "Urinocoltura con antibiogramma; nel frattempo cambio classe (es. ciprofloxacina o nitrofurantoina)." },
  { id: 544, argomento: "Infezioni vie urinarie", domanda: "Terapia post-coito per IVU ricorrente: almeno due farmaci.", risposta: "Nitrofurantoina 50-100 mg, TMP-SMX 40+200 mg o cefalexina 250 mg, in dose singola dopo il rapporto." },
  { id: 545, argomento: "Infezioni vie urinarie", domanda: "Indicazione alla profilassi antibiotica nella cistite ricorrente.", risposta: "Quando misure comportamentali, igieniche e non antibiotiche (es. mannosio, estrogeni topici) hanno fallito." },
  { id: 546, argomento: "Infezioni vie urinarie", domanda: "Fattori di rischio per IVU ricorrente.", risposta: "Sesso femminile, attività sessuale/uso di spermicidi, menopausa (carenza estrogenica), anomalie/ostruzioni urinarie, diabete, catetere." },
  { id: 547, argomento: "Infezioni vie urinarie", domanda: "Pielonefrite non complicata in paziente epilettico.", risposta: "Evitare i chinoloni (soglia convulsiva): emocolture/urinocoltura + TMP-SMX o β-lattamico." },

  // ─── PRINCIPI DI TERAPIA ANTIBIOTICA (mancanti) ──────────────────────
  { id: 548, argomento: "Principi di terapia antibiotica", domanda: "Classe attiva solo su Gram+ senza azione sui Gram-.", risposta: "Glicopeptidi (vancomicina, teicoplanina), lipopeptidi (daptomicina), ossazolidinoni (linezolid)." },
  { id: 549, argomento: "Principi di terapia antibiotica", domanda: "2 farmaci inibitori delle carbapenemasi (associati ai β-lattamici).", risposta: "Avibactam e vaborbactam (es. ceftazidime-avibactam, meropenem-vaborbactam)." },
  { id: 550, argomento: "Principi di terapia antibiotica", domanda: "Le cefalosporine: dai un quadro di classe/uso.", risposta: "Battericidi β-lattamici; 1ª gen. Gram+, 3ª gen. (ceftriaxone) ampio spettro, ceftazidime/cefepime anti-Pseudomonas, ceftarolina anti-MRSA." },
  { id: 551, argomento: "Principi di terapia antibiotica", domanda: "Quale classe di antibiotici si presta meglio all'infusione continua e perché?", risposta: "Le penicilline semisintetiche (es. piperacillina), perché hanno attività tempo-dipendente; i carbapenemi meno." },

  // ─── SEPSI (mancanti) ─────────────────────────────────────────────────
  { id: 552, argomento: "Sepsi e shock settico", domanda: "Step terapeutici della sepsi.", risposta: "O2 e monitoraggio saturazione, emocolture + lattati, antibiotico empirico entro 1 h, rianimazione volemica con cristalloidi, eventuali vasopressori." },
  { id: 553, argomento: "Sepsi e shock settico", domanda: "Albumina nello shock settico se i cristalloidi sono insufficienti? Perché?", risposta: "Si può aggiungere, ma non vi sono dati solidi di superiorità rispetto ai cristalloidi; questi restano la prima scelta." },
  { id: 554, argomento: "Sepsi e shock settico", domanda: "Target di diuresi nella sepsi.", risposta: "≥0,5 ml/kg/h." },

  // ─── SCA (mancanti) ───────────────────────────────────────────────────
  { id: 555, argomento: "Sindromi coronariche acute", domanda: "Angina instabile: prima linea.", risposta: "Dipende dal rischio: alto rischio → carico di aspirina + DAPT e coronarografia entro 24 h; molto alto/instabile → coronarografia urgente (entro 2 h)." },
  { id: 556, argomento: "Sindromi coronariche acute", domanda: "Paziente con tachicardia ventricolare prima dell'angioplastica: cosa fai?", risposta: "Defibrillazione/cardioversione elettrica per ripristinare il ritmo." },
  { id: 557, argomento: "Sindromi coronariche acute", domanda: "STEMI con asistolia all'ECG: cosa fai?", risposta: "RCP con adrenalina 1 mg ogni 3-5 min; se refrattario, ECMO se candidabile." },
  { id: 558, argomento: "Sindromi coronariche acute", domanda: "STEMI che sviluppa aritmia ipocinetica (bradiaritmia): cosa fai?", risposta: "Pacemaker temporaneo (transcutaneo/transvenoso)." },
  { id: 559, argomento: "Sindromi coronariche acute", domanda: "3 dispositivi di supporto circolatorio nell'infarto esteso.", risposta: "Contropulsatore aortico (IABP), Impella, ECMO." },
  { id: 560, argomento: "Sindromi coronariche acute", domanda: "DAPT di mantenimento dopo stent dopo 1 anno in paziente a basso rischio emorragico.", risposta: "Si può proseguire aspirina + ticagrelor (DAPT estesa); altrimenti SAPT con aspirina." },
  { id: 561, argomento: "Sindromi coronariche acute", domanda: "Secondo antiaggregante in DAPT in paziente ad altissimo rischio emorragico.", risposta: "Clopidogrel (più maneggevole di ticagrelor/prasugrel)." },
  { id: 562, argomento: "Sindromi coronariche acute", domanda: "Quale malattia iatrogena è caratterizzata da anticorpi anti-PF4?", risposta: "Trombocitopenia indotta da eparina (HIT) — anche la VITT post-vaccino a vettore virale." },
  { id: 563, argomento: "Sindromi coronariche acute", domanda: "In che situazione usi la ranolazina?", risposta: "Angina cronica stabile refrattaria, come anti-ischemico aggiuntivo (non riduce frequenza/pressione)." },
  { id: 564, argomento: "Sindromi coronariche acute", domanda: "Dose di carico di ticagrelor e di clopidogrel nella SCA.", risposta: "Ticagrelor 180 mg (2 cp da 90 mg); clopidogrel 600 mg (2 cp da 300 mg)." },
  { id: 565, argomento: "Sindromi coronariche acute", domanda: "Per quanto tempo si prosegue di norma la DAPT dopo una SCA?", risposta: "Di solito 12 mesi, poi si prosegue con un singolo antiaggregante; la durata si modula sul rischio ischemico/emorragico." },

  // ─── CARDIOPATIA ISCHEMICA CRONICA (mancanti) ────────────────────────
  { id: 566, argomento: "Cardiopatia ischemica cronica", domanda: "Condizioni in cui si preferisce l'angioplastica (PCI) al bypass.", risposta: "Malattia coronarica localizzata, funzione ventricolare conservata, alto rischio chirurgico." },
  { id: 567, argomento: "Cardiopatia ischemica cronica", domanda: "Vasodilatatori sublinguali che il paziente può assumere prima di arrivare in ospedale.", risposta: "Nitroglicerina (trinitrina) sublinguale, ripetibile fino a 3 volte." },
  { id: 568, argomento: "Cardiopatia ischemica cronica", domanda: "Quali due classi di farmaci modificano la prognosi nel paziente coronaropatico cronico?", risposta: "Antiaggregante (ASA) e statina ad alta intensità; utili anche ACE-inibitori nei soggetti a rischio." },

  // ─── DISLIPIDEMIE (mancanti) ──────────────────────────────────────────
  { id: 569, argomento: "Dislipidemie", domanda: "Dove uso l'acido bempedoico?", risposta: "Riduzione delle LDL in associazione a statine o nell'intolleranza alle statine (inibisce l'ATP-citrato liasi)." },
  { id: 570, argomento: "Dislipidemie", domanda: "Farmaci da non assumere insieme alle statine.", risposta: "Fibrati (gemfibrozil), ciclosporina, macrolidi/azoli (inibitori CYP3A4), digossina, warfarin." },
  { id: 571, argomento: "Dislipidemie", domanda: "3 farmaci per correggere rispettivamente LDL, HDL/TG.", risposta: "LDL: statina (atorvastatina/rosuvastatina). TG: fibrati (fenofibrato) e omega-3. HDL: acido nicotinico (scarsa evidenza)." },
  { id: 572, argomento: "Dislipidemie", domanda: "Cos'è il fenofibrato e per cosa lo usi?", risposta: "Fibrato agonista PPAR-alfa; usato per ipertrigliceridemia (riduce TG e aumenta lievemente HDL)." },
  { id: 573, argomento: "Dislipidemie", domanda: "Target LDL nell'ipercolesterolemia familiare omozigote ad alto rischio: primo step.", risposta: "<100 mg/dL come primo obiettivo (poi più stringente)." },
  { id: 574, argomento: "Dislipidemie", domanda: "Quale statina per ridurre le LDL del ~30-40% (da 160 a 100)?", risposta: "Atorvastatina 10-20 mg o rosuvastatina 5-10 mg (intensità moderata)." },
  { id: 575, argomento: "Dislipidemie", domanda: "Statina per ridurre le LDL >50%.", risposta: "Atorvastatina 40-80 mg o rosuvastatina 20-40 mg (alta intensità)." },
  { id: 576, argomento: "Dislipidemie", domanda: "Paziente con atorvastatina 10 mg in prevenzione primaria, risposta scarsa (200→185): cosa fai?", risposta: "Titolare la statina (atorvastatina 40 mg): è sottodosata, ha poco senso aggiungere ezetimibe." },
  { id: 577, argomento: "Dislipidemie", domanda: "Paziente in atorva 80/simva 40 senza calo delle LDL: cosa fai?", risposta: "Aggiungo ezetimibe 10 mg." },
  { id: 578, argomento: "Dislipidemie", domanda: "Paziente con atorvastatina 80 mg e TG >210: cosa aggiungi?", risposta: "Aggiungere acidi grassi omega-3 (PUFA) 1 g x2." },
  { id: 579, argomento: "Dislipidemie", domanda: "Donna 38 anni con LDL >225 e TG molto elevati: cosa fai?", risposta: "Statina ad alta intensità + omega-3 (e/o fibrato per i TG); sospetta forma familiare." },
  { id: 580, argomento: "Dislipidemie", domanda: "Qual è l'effetto collaterale muscolare delle statine da monitorare?", risposta: "La miopatia/rabdomiolisi, con aumento delle CPK e mialgie." },

  // ─── ARITMIE E FA (mancanti) ──────────────────────────────────────────
  { id: 581, argomento: "Aritmie e fibrillazione atriale", domanda: "Cardioversione farmacologica in paziente con FA parossistica e FE 45%.", risposta: "Amiodarone (flecainide/propafenone controindicati per la cardiopatia/FE ridotta)." },
  { id: 582, argomento: "Aritmie e fibrillazione atriale", domanda: "Due controindicazioni al pill in the pocket.", risposta: "Cardiopatia strutturale/disfunzione VS e mancata risposta al test in ospedale (o insorgenza non databile)." },
  { id: 583, argomento: "Aritmie e fibrillazione atriale", domanda: "Il più rapido tra gli antiaritmici.", risposta: "Flecainide (per la cardioversione della FA)." },
  { id: 584, argomento: "Aritmie e fibrillazione atriale", domanda: "Farmaco per abbassare la FC in acuto in donna con FA, scompenso e FE 37%.", risposta: "β-bloccante (a basse dosi); se controindicato/inefficace, digossina." },
  { id: 585, argomento: "Aritmie e fibrillazione atriale", domanda: "Paziente in verapamil con rate control non ottimale: quale farmaco aggiungi?", risposta: "Digossina." },
  { id: 586, argomento: "Aritmie e fibrillazione atriale", domanda: "β-bloccanti in FA per il controllo del ritmo/frequenza.", risposta: "Sì nel paziente non asmatico: in acuto metoprololo/atenololo, in cronico bisoprololo/carvedilolo." },
  { id: 587, argomento: "Aritmie e fibrillazione atriale", domanda: "Effetti collaterali dell'ivabradina.", risposta: "Fosfeni/disturbi visivi, bradicardia, blocco AV, fibrillazione atriale, cefalea." },
  { id: 588, argomento: "Aritmie e fibrillazione atriale", domanda: "Donna in PS dispnoica in FA con trombi in auricola, durata incerta: cosa fai?", risposta: "Anticoagulante per 3-4 settimane, poi eco-TEE di controllo: se i trombi sono scomparsi, cardioversione elettrica." },
  { id: 589, argomento: "Aritmie e fibrillazione atriale", domanda: "Donna ipotesa con flutter atriale: cosa fai?", risposta: "Eco-TEE: in assenza di trombi, cardioversione elettrica; se trombi presenti, anticoagulante e poi rivalutazione." },
  { id: 590, argomento: "Aritmie e fibrillazione atriale", domanda: "FA con tempistica indeterminata (durata non databile): condotta.", risposta: "Anticoagulazione per ≥3 settimane (o eco-TEE) prima dell'eventuale cardioversione." },
  { id: 591, argomento: "Aritmie e fibrillazione atriale", domanda: "Condizione cardiologica non ischemica in cui fare attenzione coi calcio-antagonisti.", risposta: "Malattia del nodo del seno e disfunzione/scompenso (per l'effetto bradicardizzante e inotropo negativo)." },
  { id: 592, argomento: "Aritmie e fibrillazione atriale", domanda: "Perché nella FA non valvolare si preferiscono i DOAC al warfarin?", risposta: "Per la maggiore maneggevolezza (niente monitoraggio INR), minori interazioni e minor rischio di emorragie maggiori." },

  // ─── SCOMPENSO CARDIACO (mancanti) ───────────────────────────────────
  { id: 593, argomento: "Scompenso cardiaco", domanda: "NYHA II e FE 30% in terapia farmacologica massimale: cosa fare?", risposta: "Impianto di ICD (± CRT se QRS largo); in caso avanzato, LVAD o trapianto." },
  { id: 594, argomento: "Scompenso cardiaco", domanda: "Terapia anti-ipertensiva nello scompenso.", risposta: "ACE-i/ARB (o ARNI) + β-bloccante + diuretico; antialdosteronico se grave." },
  { id: 595, argomento: "Scompenso cardiaco", domanda: "Quali β-bloccanti può usare un paziente in ACE-i per scompenso?", risposta: "Bisoprololo, carvedilolo o metoprololo succinato, titolati dalla dose minima." },
  { id: 596, argomento: "Scompenso cardiaco", domanda: "Cosa monitorare dopo trasfusione in paziente con scompenso?", risposta: "Sovraccarico di volume (TACO) e TRALI; trasfondere lentamente, considerare diuretico." },
  { id: 597, argomento: "Scompenso cardiaco", domanda: "Quale farmaco usi per il controllo della congestione/edemi nello scompenso?", risposta: "I diuretici dell'ansa (furosemide), per ridurre il sovraccarico di volume." },

  // ─── IPERTENSIONE (mancanti) ──────────────────────────────────────────
  { id: 598, argomento: "Ipertensione arteriosa", domanda: "Due classi di antipertensivi senza curva dose-risposta per l'effetto ipotensivante.", risposta: "ACE-inibitori e sartani (ARB)." },
  { id: 599, argomento: "Ipertensione arteriosa", domanda: "ACE-i e sartani: cosa non associare e perché.", risposta: "Non associarli tra loro né con antialdosteronici/FANS: rischio di iperkaliemia e peggioramento della funzione renale." },
  { id: 600, argomento: "Ipertensione arteriosa", domanda: "Antipertensivo con edemi come effetto collaterale.", risposta: "Calcio-antagonisti diidropiridinici (es. amlodipina)." },
  { id: 601, argomento: "Ipertensione arteriosa", domanda: "Antipertensivo in cardiomiopatia ischemica.", risposta: "ACE-inibitore + β-bloccante." },
  { id: 602, argomento: "Ipertensione arteriosa", domanda: "Terapia anti-ipertensiva in paziente con diabete e IRC.", risposta: "ACE-i o sartano (± calcio-antagonista); evitare tiazidici e β-bloccanti come prima scelta." },
  { id: 603, argomento: "Ipertensione arteriosa", domanda: "Paziente in ACE-i che desidera una gravidanza: lo cambi? Con cosa?", risposta: "Sì: ACE-i/ARB controindicati. Si passa a metildopa, labetalolo o nifedipina." },
  { id: 604, argomento: "Ipertensione arteriosa", domanda: "Ipertensione mal controllata in afrodiscendente già in ACE-i: cosa aggiungi?", risposta: "Calcio-antagonista o diuretico tiazidico." },
  { id: 605, argomento: "Ipertensione arteriosa", domanda: "Ragazzo di 28 anni con PA 150/95 misurata a casa: cosa consigli?", risposta: "Rimisurare/monitoraggio domiciliare (diario, eventuale Holter pressorio); modifiche dello stile di vita e rivalutazione." },
  { id: 606, argomento: "Ipertensione arteriosa", domanda: "Paziente iperteso in ACE-i ben controllato che sviluppa IPB: cosa fai?", risposta: "Non sostituisco l'ACE-i; aggiungo un α-litico uroselettivo (silodosina/tamsulosina)." },
  { id: 607, argomento: "Ipertensione arteriosa", domanda: "Iperuricemico/iperteso con attacco acuto di gotta: antipertensivo di scelta.", risposta: "Evitare i tiazidici (peggiorano l'uricemia); preferire ACE-i/sartano o calcio-antagonista (losartan ha effetto uricosurico)." },
  { id: 608, argomento: "Ipertensione arteriosa", domanda: "Caso di nefropatia ipertensiva con creatinina 1,24 e proteinuria: farmaco per migliorare la funzione renale.", risposta: "ACE-inibitore o sartano (nefroprotezione: riducono proteinuria e progressione)." },
  { id: 609, argomento: "Ipertensione arteriosa", domanda: "Donna in ramipril 5 mg che sviluppa danno renale acuto: cosa è successo e come indaghi?", risposta: "Probabile stenosi renale/ipoperfusione: il blocco del RAS ha ridotto la GFR. Monitoro creatinina/GFR e sospendo se aumento >30%." },

  // ─── ANTICOAGULANTI E ANTIAGGREGANTI (mancanti) ──────────────────────
  { id: 610, argomento: "Anticoagulanti e antiaggreganti", domanda: "Antiaggregante nel diabete (prevenzione).", risposta: "Aspirina a basse dosi (in prevenzione secondaria; in primaria solo se alto rischio CV)." },
  { id: 611, argomento: "Anticoagulanti e antiaggreganti", domanda: "2 caratteristiche che fanno preferire ticagrelor a prasugrel.", risposta: "Età >75 anni e pregresso ictus/TIA (il prasugrel è controindicato in queste condizioni)." },
  { id: 612, argomento: "Anticoagulanti e antiaggreganti", domanda: "Due antiaggreganti inibitori delle fosfodiesterasi.", risposta: "Dipiridamolo e cilostazolo." },
  { id: 613, argomento: "Anticoagulanti e antiaggreganti", domanda: "Inibitore della glicoproteina IIb/IIIa.", risposta: "Abciximab, eptifibatide, tirofiban." },
  { id: 614, argomento: "Anticoagulanti e antiaggreganti", domanda: "Quale parametro valuti se somministri warfarin?", risposta: "L'INR (target 2-3)." },
  { id: 615, argomento: "Anticoagulanti e antiaggreganti", domanda: "Paziente in FA con acenocumarolo, INR 5,0 ed epistassi: cosa fai?", risposta: "Tamponamento locale, sospendere/ridurre l'acenocumarolo e monitorare l'INR; vitamina K se sanguinamento significativo." },
  { id: 616, argomento: "Anticoagulanti e antiaggreganti", domanda: "Donna con sindrome da anticorpi antifosfolipidi (LES) in warfarin che scopre una gravidanza: cambi terapia?", risposta: "Sì: il warfarin è teratogeno. Si passa a eparina a basso peso molecolare (+ ASA)." },
  { id: 617, argomento: "Anticoagulanti e antiaggreganti", domanda: "Alimenti da evitare con la vitamina K se prendo Coumadin.", risposta: "Verdure a foglia verde ricche di vitamina K (spinaci, broccoli, cavoli, lattuga), per non ridurre l'effetto anticoagulante." },
  { id: 618, argomento: "Anticoagulanti e antiaggreganti", domanda: "Emorragia da Coumadin: condotta.", risposta: "Sospensione, vitamina K; nelle emorragie maggiori PCC (o plasma fresco congelato)." },

  // ─── TROMBOEMBOLISMO VENOSO (mancanti) ────────────────────────────────
  { id: 619, argomento: "Tromboembolismo venoso", domanda: "TVP: terapia.", risposta: "Anticoagulante: DOAC (es. apixaban/rivaroxaban) o EBPM seguita da DOAC/warfarin, per almeno 3 mesi." },
  { id: 620, argomento: "Tromboembolismo venoso", domanda: "Embolia polmonare senza ipotensione (basso rischio): terapia.", risposta: "Solo anticoagulante: DOAC diretto se a rapida azione, altrimenti EBPM come ponte; gestione anche domiciliare (Hestia 0)." },
  { id: 621, argomento: "Tromboembolismo venoso", domanda: "Terapia dell'EP in paziente con Hestia score 0.", risposta: "Anticoagulazione domiciliare con DOAC (basso rischio, gestibile a domicilio)." },
  { id: 622, argomento: "Tromboembolismo venoso", domanda: "Paziente post-volo con EP, PA 130/90, FC 105, SatO2 92%, FR 37 (rischio intermedio).", risposta: "Anticoagulazione (EBPM/DOAC) con monitoraggio stretto; trombolisi solo se deterioramento emodinamico." },
  { id: 623, argomento: "Tromboembolismo venoso", domanda: "Qual è oggi la terapia di prima scelta nella TVP/EP non complicata?", risposta: "I DOAC, salvo controindicazioni (es. insufficienza renale grave, gravidanza, sindrome da antifosfolipidi)." },

  // ─── ARTRITE REUMATOIDE (mancanti) ───────────────────────────────────
  { id: 624, argomento: "Artrite reumatoide", domanda: "Donna 55 anni, prima linea AR con dosaggio.", risposta: "Metotrexato 10-15 mg/settimana (fino a 20-25 mg) + acido folico 5 mg 24 h dopo." },
  { id: 625, argomento: "Artrite reumatoide", domanda: "DMARD convenzionale per AR con dosaggio.", risposta: "Metotrexato 10-25 mg/sett, sulfasalazina 500-3000 mg/die, leflunomide 10-20 mg/die, idrossiclorochina 200-400 mg/die." },
  { id: 626, argomento: "Artrite reumatoide", domanda: "Farmaco per AR somministrabile per os, sc e IM.", risposta: "Metotrexato." },
  { id: 627, argomento: "Artrite reumatoide", domanda: "Dose massima di metotrexato nell'AR.", risposta: "25 mg/settimana." },
  { id: 628, argomento: "Artrite reumatoide", domanda: "AR trattata con metotrexato: quali esami e monitoraggio?", risposta: "Emocromo (pancitopenia) e transaminasi a 2-4 settimane, poi ogni 3 mesi; più creatinina." },
  { id: 629, argomento: "Artrite reumatoide", domanda: "Meccanismo della leflunomide.", risposta: "Inibisce la diidroorotato deidrogenasi → blocca la sintesi de novo delle pirimidine nei linfociti." },
  { id: 630, argomento: "Artrite reumatoide", domanda: "Leflunomide in paziente che desidera gravidanza: cosa fai?", risposta: "Wash-out con colestiramina (8 g x3 per 11 gg) e verifica dei livelli plasmatici prima del concepimento." },
  { id: 631, argomento: "Artrite reumatoide", domanda: "Effetti collaterali della sulfasalazina.", risposta: "Nausea/vomito, leucopenia, colorazione arancione delle urine, oligospermia reversibile; allergica nei sensibili ai sulfamidici." },
  { id: 632, argomento: "Artrite reumatoide", domanda: "Effetti collaterali della ciclosporina.", risposta: "Nefrotossicità, ipertensione, ipertrofia gengivale, irsutismo, epatotossicità, disturbi GI." },
  { id: 633, argomento: "Artrite reumatoide", domanda: "Tossicità dell'azatioprina.", risposta: "Mielotossicità, epatotossicità, tossicità GI; rash, rischio linfomi." },
  { id: 634, argomento: "Artrite reumatoide", domanda: "Paziente con Quantiferon positivo deve iniziare un biologico: cosa fai?", risposta: "Profilassi con isoniazide (+ vitamina B6); il biologico si avvia dopo il 1° mese di isoniazide." },
  { id: 635, argomento: "Artrite reumatoide", domanda: "Spondiloartrite assiale: terapia di prima linea.", risposta: "FANS a dose piena e continuativa." },
  { id: 636, argomento: "Artrite reumatoide", domanda: "Spondiloartrite assiale: seconda linea.", risposta: "Biologici anti-TNF o anti-IL-17 (i DMARD convenzionali sono inefficaci sulla forma assiale)." },
  { id: 637, argomento: "Artrite reumatoide", domanda: "DMARD utilizzabili nell'artrite psoriasica.", risposta: "Metotrexato, leflunomide, sulfasalazina (i DMARD convenzionali agiscono sulla forma periferica)." },
  { id: 638, argomento: "Artrite reumatoide", domanda: "Anti-TNF NON anticorpo monoclonale.", risposta: "Etanercept (proteina di fusione recettore-Fc)." },
  { id: 639, argomento: "Artrite reumatoide", domanda: "Anti-TNF usati sia per AR che per IBD.", risposta: "Infliximab, adalimumab, golimumab." },
  { id: 640, argomento: "Artrite reumatoide", domanda: "Controindicazione cardiaca agli anti-TNF.", risposta: "Scompenso cardiaco moderato-severo (NYHA III-IV): gli anti-TNF lo peggiorano." },
  { id: 641, argomento: "Artrite reumatoide", domanda: "Effetto collaterale comune del tocilizumab.", risposta: "Aumento delle transaminasi/dislipidemia e maggiore rischio di infezioni (con riduzione della PCR che può mascherarle)." },
  { id: 642, argomento: "Artrite reumatoide", domanda: "Come agiscono e una malattia per: tocilizumab, rituximab, adalimumab, ixekizumab.", risposta: "Tocilizumab anti-IL-6 (AR); rituximab anti-CD20 (AR/linfomi); adalimumab anti-TNF (AR/IBD); ixekizumab anti-IL-17 (psoriasi/spondiloartrite)." },
  { id: 643, argomento: "Artrite reumatoide", domanda: "Anti-CTLA4 per i tumori e analogo usato in AR.", risposta: "Tumori: ipilimumab. AR: abatacept (modula CD80/86)." },
  { id: 644, argomento: "Artrite reumatoide", domanda: "In cosa si usa ustekinumab e qual è il target?", risposta: "Anti-IL-12/23; psoriasi, artrite psoriasica e malattia di Crohn." },
  { id: 645, argomento: "Artrite reumatoide", domanda: "Effetti collaterali del prednisone (terapia cronica).", risposta: "Osteoporosi, iperglicemia/diabete, ipertensione, ritenzione idrica, ulcere, infezioni, cataratta/glaucoma, alterazioni dell'umore." },
  { id: 646, argomento: "Artrite reumatoide", domanda: "Quale biologico inficia la risposta anticorpale (es. vaccini)?", risposta: "Rituximab (deplezione dei linfociti B)." },
  { id: 647, argomento: "Artrite reumatoide", domanda: "Paziente in cortisone per AR che prende un farmaco settimanale a digiuno, in piedi: quale?", risposta: "Bisfosfonato orale (es. alendronato), per la prevenzione dell'osteoporosi steroidea." },

  // ─── ARTRITE PSORIASICA (mancanti) ───────────────────────────────────
  { id: 648, argomento: "Artrite psoriasica", domanda: "Guselkumab: cos'è e per cosa è rimborsato?", risposta: "Anticorpo anti-IL-23; psoriasi (e artrite psoriasica)." },
  { id: 649, argomento: "Artrite psoriasica", domanda: "Anticorpi anti-IL-17 somministrabili sc nell'artrite psoriasica.", risposta: "Secukinumab e ixekizumab (anche bimekizumab)." },
  { id: 650, argomento: "Artrite psoriasica", domanda: "Cos'è ixekizumab?", risposta: "Anticorpo monoclonale anti-IL-17; psoriasi e artrite psoriasica/spondiloartrite, 80 mg/mese sc." },

  // ─── LES E CONNETTIVITI (mancanti) ───────────────────────────────────
  { id: 651, argomento: "LES e connettiviti", domanda: "Indicazioni del rituximab nel LES.", risposta: "Nefrite lupica refrattaria (III-IV) o malattia non responsiva alla prima linea." },
  { id: 652, argomento: "LES e connettiviti", domanda: "Donna con LES e anticorpi antifosfolipidi ad alto titolo senza trombosi né aborti: terapia.", risposta: "Idrossiclorochina + aspirina a basse dosi (profilassi primaria del rischio trombotico)." },
  { id: 653, argomento: "LES e connettiviti", domanda: "Terapia del lupus cutaneo subacuto.", risposta: "Fotoprotezione, idrossiclorochina e steroidi topici; nelle forme gravi dapsone o talidomide." },
  { id: 654, argomento: "LES e connettiviti", domanda: "Meccanismo del micofenolato mofetile.", risposta: "Inibisce l'inosina monofosfato deidrogenasi → blocca la sintesi de novo delle purine nei linfociti." },
  { id: 655, argomento: "LES e connettiviti", domanda: "Interstiziopatia polmonare da sclerosi sistemica/connettiviti: farmaco e dose massima.", risposta: "Micofenolato mofetile fino a 3 g/die, oppure ciclofosfamide; nintedanib come antifibrotico." },
  { id: 656, argomento: "LES e connettiviti", domanda: "Antifibrotico nella fibrosi polmonare.", risposta: "Nintedanib (o pirfenidone)." },

  // ─── IBD (mancanti) ───────────────────────────────────────────────────
  { id: 657, argomento: "Malattie infiammatorie intestinali", domanda: "RCU riacutizzata lieve-moderata: terapia.", risposta: "Mesalazina orale + topica; se insufficiente, corticosteroidi (budesonide MMX o sistemici)." },
  { id: 658, argomento: "Malattie infiammatorie intestinali", domanda: "Quale farmaco tentare nella RCU prima dei biologici?", risposta: "Mesalazina (aminosalicilati) e corticosteroidi." },
  { id: 659, argomento: "Malattie infiammatorie intestinali", domanda: "Due steroidi topici per IBD.", risposta: "Budesonide MMX e beclometasone dipropionato." },
  { id: 660, argomento: "Malattie infiammatorie intestinali", domanda: "RCU che diventa steroide-dipendente: cosa fare?", risposta: "Introdurre azatioprina (risparmiatore di steroide); se inefficace, biologico." },
  { id: 661, argomento: "Malattie infiammatorie intestinali", domanda: "RCU fulminante in terapia con infliximab + steroidi: cosa fai?", risposta: "Attendere la risposta entro 3-7 giorni; se assente, colectomia (chirurgia)." },
  { id: 662, argomento: "Malattie infiammatorie intestinali", domanda: "Crohn lieve solo rettale/ileale: terapia di induzione.", risposta: "Corticosteroide topico: budesonide MMX (e mesalazina nelle forme coliche)." },
  { id: 663, argomento: "Malattie infiammatorie intestinali", domanda: "Due immunosoppressori convenzionali nel Crohn lieve steroide-dipendente.", risposta: "Azatioprina e metotrexato." },
  { id: 664, argomento: "Malattie infiammatorie intestinali", domanda: "Crohn senza biologici e senza steroide: cosa usi?", risposta: "Immunosoppressori convenzionali (azatioprina/6-MP o metotrexato)." },
  { id: 665, argomento: "Malattie infiammatorie intestinali", domanda: "3 classi/target di biologici per il Crohn.", risposta: "Anti-TNF (infliximab/adalimumab), anti-integrina alfa4beta7 (vedolizumab), anti-IL-12/23 (ustekinumab)." },
  { id: 666, argomento: "Malattie infiammatorie intestinali", domanda: "Adalimumab: cos'è e 3 patologie in cui è approvato.", risposta: "Anti-TNF-alfa; AR, psoriasi/artrite psoriasica, spondilite anchilosante, Crohn, RCU." },
  { id: 667, argomento: "Malattie infiammatorie intestinali", domanda: "Paziente con artrite sieronegativa, uveite e Crohn, dopo fallimento di steroide e immunosoppressori: cosa fai?", risposta: "Anti-TNF (es. infliximab/adalimumab), efficace su intestino, articolazioni e uveite." },
  { id: 668, argomento: "Malattie infiammatorie intestinali", domanda: "Uveite nel Crohn: cosa dai?", risposta: "Anti-TNF (adalimumab/infliximab) ± steroide topico." },
  { id: 669, argomento: "Malattie infiammatorie intestinali", domanda: "Quali sono gli aminosalicilati usati nelle IBD e in quale forma sono più efficaci?", risposta: "Sulfasalazina e mesalazina (5-ASA); particolarmente utili nella colite ulcerosa." },

  // ─── GERD E H. PYLORI (mancanti) ─────────────────────────────────────
  { id: 670, argomento: "GERD e H. pylori", domanda: "Dose di PPI se non risponde dopo 8 settimane.", risposta: "Raddoppiare la dose (somministrazione bid) e rivalutare." },
  { id: 671, argomento: "GERD e H. pylori", domanda: "GERD non complicato con soli sintomi tipici: imposta la terapia.", risposta: "PPI a dose singola (es. pantoprazolo 40 mg) prima dei pasti per 4-8 settimane + stile di vita." },
  { id: 672, argomento: "GERD e H. pylori", domanda: "Consigli comportamentali per il GERD.", risposta: "Calo ponderale, evitare pasti serali e bevande gassate, sollevare la testiera del letto, dormire sul lato sinistro, ridurre alcol/fumo." },
  { id: 673, argomento: "GERD e H. pylori", domanda: "Reflusso non responsivo a doppia dose di PPI con EGDS negativa: cosa fai?", risposta: "Pirosi funzionale: modifiche dello stile di vita, neuromodulatori (SSRI/triciclici), pH-impedenzometria; NO chirurgia." },
  { id: 674, argomento: "GERD e H. pylori", domanda: "Perché indagare un paziente con MRGE?", risposta: "Per sintomi d'allarme, mancata risposta ai PPI dopo 4-8 settimane o sintomi extraesofagei." },
  { id: 675, argomento: "GERD e H. pylori", domanda: "Principi attivi del Pylera e posologia.", risposta: "Bismuto, tetraciclina e metronidazolo (3 capsule x4 volte/die ai pasti) + PPI bid, per 10 giorni." },
  { id: 676, argomento: "GERD e H. pylori", domanda: "Antigene fecale H. pylori positivo in paziente sano: servono altri test?", risposta: "No: l'antigene fecale positivo è sufficiente; si procede all'eradicazione." },
  { id: 677, argomento: "GERD e H. pylori", domanda: "Quale farmaco anti-H. pylori ha maggior rischio di fototossicità?", risposta: "Levofloxacina (fluorochinolone)." },
  { id: 678, argomento: "GERD e H. pylori", domanda: "Chinolone usato nella terapia di H. pylori.", risposta: "Levofloxacina (regime di salvataggio)." },
  { id: 679, argomento: "GERD e H. pylori", domanda: "Ulcera peptica: causa più frequente.", risposta: "FANS (e Helicobacter pylori)." },

  // ─── PANCREATITE (mancanti) ───────────────────────────────────────────
  { id: 680, argomento: "Pancreatite", domanda: "Quale presidio nutrizionale nella pancreatite quando riprende la peristalsi?", risposta: "Ripresa precoce della nutrizione enterale, preferibilmente per os (SNG solo se intolleranza)." },
  { id: 681, argomento: "Pancreatite", domanda: "Pancreatite acuta: cosa controlli (e che può causarla)?", risposta: "I trigliceridi (l'ipertrigliceridemia è causa di pancreatite)." },
  { id: 682, argomento: "Pancreatite", domanda: "Profilassi/prevenzione della pancreatite.", risposta: "Rimozione della causa (calcoli via colecistectomia/ERCP, astensione da alcol, controllo dei trigliceridi)." },
  { id: 683, argomento: "Pancreatite", domanda: "Pancreatite autoimmune tipo I: a cosa è associata e come tratti?", risposta: "Malattia IgG4-correlata; steroide 0,5-1 mg/kg/die con tapering, mantenimento per mesi." },
  { id: 684, argomento: "Pancreatite", domanda: "Terapia medica della pancreatite acuta da colangite.", risposta: "Reidratazione + analgesia + antibiotico (es. piperacillina-tazobactam) e drenaggio biliare (ERCP) per la colangite." },
  { id: 685, argomento: "Pancreatite", domanda: "Quale vitamina dare nella pancreatite cronica per prevenire l'osteoporosi?", risposta: "Vitamina D (con calcio), per il malassorbimento delle vitamine liposolubili." },

  // ─── CIRROSI EPATICA (mancanti) ───────────────────────────────────────
  { id: 686, argomento: "Cirrosi epatica", domanda: "Ascite di grado 2 di nuova diagnosi: quale diuretico e dosaggio?", risposta: "Spironolattone 100 mg/die (titolabile fino a 400 mg), ± furosemide." },
  { id: 687, argomento: "Cirrosi epatica", domanda: "Diuretico per l'ascite di grado 2.", risposta: "Spironolattone (antialdosteronico), eventualmente + furosemide." },
  { id: 688, argomento: "Cirrosi epatica", domanda: "Ascite/cirrosi non responsiva alla dose massima di spironolattone: cosa aggiungi?", risposta: "Furosemide (diuretico dell'ansa), fino a 160 mg/die." },
  { id: 689, argomento: "Cirrosi epatica", domanda: "Dose massima di furosemide nell'insufficienza epatica.", risposta: "160 mg/die (in associazione allo spironolattone)." },
  { id: 690, argomento: "Cirrosi epatica", domanda: "Quando si dà albumina/plasma nella paracentesi della cirrosi?", risposta: "Nell'ascite di grado 3 con paracentesi di grandi volumi (>5 L): albumina per prevenire la disfunzione circolatoria." },
  { id: 691, argomento: "Cirrosi epatica", domanda: "Combinazione per encefalopatia epatica ricorrente.", risposta: "Rifaximina 550 mg x2 + lattulosio (titolato a 2-3 evacuazioni/die)." },
  { id: 692, argomento: "Cirrosi epatica", domanda: "Soglia di neutrofili nel liquido ascitico per diagnosticare PBS.", risposta: "≥250 neutrofili/mm3 (PMN)." },
  { id: 693, argomento: "Cirrosi epatica", domanda: "Quale score della cirrosi è suddiviso in 3 classi?", risposta: "Child-Pugh (classi A, B, C)." },
  { id: 694, argomento: "Cirrosi epatica", domanda: "Score che indica la mortalità a breve termine nei candidati a trapianto di fegato.", risposta: "MELD (Model for End-stage Liver Disease)." },

  // ─── ANTIEMETICI E FARMACI GI (mancanti) ─────────────────────────────
  { id: 695, argomento: "Antiemetici e farmaci GI", domanda: "Terapia antiemetica in generale.", risposta: "Metoclopramide (o domperidone); ondansetron nelle forme severe." },
  { id: 696, argomento: "Antiemetici e farmaci GI", domanda: "Tre antiemetici (principi attivi).", risposta: "Metoclopramide, domperidone, ondansetron (anche granisetron)." },
  { id: 697, argomento: "Antiemetici e farmaci GI", domanda: "Metoclopramide: i 2 effetti collaterali più comuni.", risposta: "Sintomi extrapiramidali e sonnolenza/iperprolattinemia." },
  { id: 698, argomento: "Antiemetici e farmaci GI", domanda: "Iperprolattinemia in donna dispeptica: quale farmaco la causa?", risposta: "Metoclopramide (Plasil)." },
  { id: 699, argomento: "Antiemetici e farmaci GI", domanda: "Due lassativi nel cronico.", risposta: "Macrogol (PEG) e lattulosio (osmotici)." },
  { id: 700, argomento: "Antiemetici e farmaci GI", domanda: "Antidiarroico (principio attivo).", risposta: "Loperamide." },
  { id: 701, argomento: "Antiemetici e farmaci GI", domanda: "Corticosteroide topico nell'esofagite eosinofila.", risposta: "Fluticasone (440-880 mcg bid) o budesonide (12 mg bid)." },
  { id: 702, argomento: "Antiemetici e farmaci GI", domanda: "Quale classe di antiemetici si usa contro la nausea/vomito da chemioterapia e qual è il bersaglio?", risposta: "I setroni (ondansetron), antagonisti dei recettori 5-HT3 della serotonina." },

  // ─── DISFUNZIONI TIROIDEE (mancanti) ─────────────────────────────────
  { id: 703, argomento: "Disfunzioni tiroidee", domanda: "Adenoma uninodulare iperfunzionante con ipertiroidismo clinico: terapia.", risposta: "Terapia radicale: radioiodio (ablazione) o chirurgia (dopo eutiroidismo con tionamidi)." },
  { id: 704, argomento: "Disfunzioni tiroidee", domanda: "In quali condizioni tiroidee usi l'integrazione di selenio?", risposta: "Tiroidite di Hashimoto/autoimmune e ipotiroidismo subclinico (e orbitopatia di Basedow lieve)." },
  { id: 705, argomento: "Disfunzioni tiroidee", domanda: "Terapia di Hashimoto con eutiroidismo: cosa dai?", risposta: "Selenio (non serve levotiroxina se la funzione è normale)." },
  { id: 706, argomento: "Disfunzioni tiroidee", domanda: "Donna in gravidanza: obiettivo nell'ipotiroidismo.", risposta: "Mantenere il TSH basso-normale (1° trimestre <2,5 mIU/L) per prevenire deficit cognitivi/cretinismo del feto." },
  { id: 707, argomento: "Disfunzioni tiroidee", domanda: "Target di TSH nella terapia soppressiva del carcinoma tiroideo ad alto rischio.", risposta: "TSH <0,1 mIU/L (soppressione)." },
  { id: 708, argomento: "Disfunzioni tiroidee", domanda: "Tireotossicosi da amiodarone: panoramica.", risposta: "Tipo 1 (iperproduzione): tionamidi ± perclorato; tipo 2 (distruttiva): corticosteroidi." },

  // ─── DIABETE MELLITO T2 (mancanti) ───────────────────────────────────
  { id: 709, argomento: "Diabete mellito tipo 2", domanda: "Valore soglia di glicemia a digiuno per il diabete.", risposta: "≥126 mg/dL (100-125 = alterata glicemia a digiuno/pre-diabete)." },
  { id: 710, argomento: "Diabete mellito tipo 2", domanda: "Inibitore della dipeptidil-peptidasi 4 (DPP-4).", risposta: "Linagliptin (o sitagliptin)." },
  { id: 711, argomento: "Diabete mellito tipo 2", domanda: "Citava un DPP-4: meccanismo e dove si usa.", risposta: "Inibisce la degradazione di GLP-1/GIP → aumenta l'insulina e riduce il glucagone; nel DM2." },
  { id: 712, argomento: "Diabete mellito tipo 2", domanda: "Pioglitazone: classe e uso.", risposta: "Tiazolidinedione (agonista PPAR-gamma); insulino-sensibilizzante nel DM2 (rischio di edemi e aumento di peso)." },
  { id: 713, argomento: "Diabete mellito tipo 2", domanda: "Farmaco per diabete efficace, poco costoso, che aumenta un po' il peso: quale?", risposta: "Pioglitazone (o sulfanilurea)." },
  { id: 714, argomento: "Diabete mellito tipo 2", domanda: "2 insuline rapide per il picco post-prandiale.", risposta: "Lispro e aspart (anche glulisina)." },
  { id: 715, argomento: "Diabete mellito tipo 2", domanda: "Quale classe associa controllo glicemico e calo ponderale con beneficio cardiovascolare?", risposta: "Gli agonisti del GLP-1 (es. semaglutide, liraglutide)." },

  // ─── OSTEOPOROSI (mancanti) ───────────────────────────────────────────
  { id: 716, argomento: "Osteoporosi", domanda: "Nomina un bisfosfonato endovenoso.", risposta: "Zoledronato (acido zoledronico)." },
  { id: 717, argomento: "Osteoporosi", domanda: "Osteoporosi (T-score -4,1 senza fratture): farmaco, posologia e modalità.", risposta: "Alendronato 70 mg/settimana al mattino a digiuno + vitamina D e calcio; restare eretti 30 min." },
  { id: 718, argomento: "Osteoporosi", domanda: "Paziente con T-score -4,2 e frattura vertebrale spontanea: quale farmaco?", risposta: "Teriparatide sc (anabolico) per l'osteoporosi severa con fratture." },
  { id: 719, argomento: "Osteoporosi", domanda: "Almeno 2 farmaci per osteoporosi quando i bisfosfonati non funzionano.", risposta: "Denosumab e teriparatide (o romosozumab)." },
  { id: 720, argomento: "Osteoporosi", domanda: "2 classi di farmaci che causano osteoporosi secondaria.", risposta: "Glucocorticoidi e inibitori dell'aromatasi (anche PPI, ormoni tiroidei in eccesso, eparina)." },
  { id: 721, argomento: "Osteoporosi", domanda: "Con quale dose/durata di steroide vanno dati i bisfosfonati?", risposta: "Se prednisone ≥5-7,5 mg/die (o equivalente) per ≥3 mesi." },
  { id: 722, argomento: "Osteoporosi", domanda: "Donna 69 anni in prednisone 50 mg/die per 9 mesi: cosa dai per prevenire le complicanze?", risposta: "Bisfosfonato + calcio e vitamina D (prevenzione dell'osteoporosi steroidea); gastroprotezione." },
  { id: 723, argomento: "Osteoporosi", domanda: "Almeno 2 condizioni in cui è preferibile il calcitriolo al colecalciferolo.", risposta: "Insufficienza renale cronica ed epatopatia grave (deficit di idrossilazione)." },
  { id: 724, argomento: "Osteoporosi", domanda: "Uso dei bisfosfonati oltre all'osteoporosi.", risposta: "Ipercalcemia maligna, metastasi ossee (dolore), malattia di Paget." },

  // ─── IPERCALCEMIA (mancanti) ──────────────────────────────────────────
  { id: 725, argomento: "Ipercalcemia paraneoplastica", domanda: "Indica solo i farmaci usati per l'ipercalcemia paraneoplastica.", risposta: "Idratazione + bisfosfonato ev (zoledronato), calcitonina, denosumab (e corticosteroide nei linfomi/mieloma)." },

  // ─── NEFROLOGIA IRC (mancanti) ────────────────────────────────────────
  { id: 726, argomento: "Nefrologia e IRC", domanda: "IRC grave con iperfosforemia: principi attivi per ridurre il fosforo.", risposta: "Sevelamer, sali di calcio (carbonato/acetato), carbonato di lantanio, idrossido sucroferrico." },
  { id: 727, argomento: "Nefrologia e IRC", domanda: "Come abbassi l'iperfosfatemia?", risposta: "Restrizione dietetica del fosforo + chelanti del fosforo (sevelamer, sali di calcio, lantanio)." },
  { id: 728, argomento: "Nefrologia e IRC", domanda: "Dove si usa il lantanio?", risposta: "Iperfosfatemia nell'IRC (chelante del fosforo)." },
  { id: 729, argomento: "Nefrologia e IRC", domanda: "In cosa usi il sevelamer?", risposta: "Iperfosfatemia nell'IRC: resina a scambio ionico che lega il fosforo." },
  { id: 730, argomento: "Nefrologia e IRC", domanda: "Iperkaliemia: quale farmaco per evitare le complicanze aritmiche?", risposta: "Calcio gluconato ev (stabilizza la membrana del miocardiocita)." },
  { id: 731, argomento: "Nefrologia e IRC", domanda: "Che liquido dare nell'insufficienza renale acuta pre-renale?", risposta: "Cristalloidi isotonici (Ringer/soluzione fisiologica); albumina solo in casi selezionati." },
  { id: 732, argomento: "Nefrologia e IRC", domanda: "Quale diuretico dell'ansa in acidosi metabolica?", risposta: "Acido etacrinico (non sulfamidico, utile negli allergici ai sulfamidici)." },
  { id: 733, argomento: "Nefrologia e IRC", domanda: "In quale patologia usi EPO, lantanio e bicarbonato per trattarne le complicanze?", risposta: "Insufficienza renale cronica (anemia, iperfosfatemia, acidosi metabolica)." },
  { id: 734, argomento: "Nefrologia e IRC", domanda: "Dove si usano i fattori anti-HIF (es. roxadustat)?", risposta: "Anemia dell'insufficienza renale cronica (stimolano la produzione endogena di EPO)." },
  { id: 735, argomento: "Nefrologia e IRC", domanda: "Paziente IRC in EPO ricombinante con Hb 12,5: cosa fai?", risposta: "Ridurre/sospendere l'EPO: non superare Hb 11,5-12 g/dL (rischio CV)." },
  { id: 736, argomento: "Nefrologia e IRC", domanda: "Almeno 3 indicazioni all'EPO ricombinante.", risposta: "Anemia dell'IRC, anemia da chemioterapia, anemia in alcune malattie ematologiche (es. SMD)." },
  { id: 737, argomento: "Nefrologia e IRC", domanda: "Reazioni avverse della terapia con EPO.", risposta: "Ipertensione, eventi trombotici, possibile stimolo alla progressione tumorale (se Hb troppo alta)." },
  { id: 738, argomento: "Nefrologia e IRC", domanda: "Farmaco non nefrologico per la proteinuria che rallenta il declino renale.", risposta: "ACE-inibitore o sartano (riducono proteinuria e progressione; anche SGLT2-inibitori)." },
  { id: 739, argomento: "Nefrologia e IRC", domanda: "Alterazione elettrolitica dopo trasfusione di emazie nell'IRC.", risposta: "Iperkaliemia (e accumulo di ferro con trasfusioni ripetute)." },
  { id: 740, argomento: "Nefrologia e IRC", domanda: "Perché vanno usate con cautela le statine e i FANS nel paziente con IRC avanzata?", risposta: "I FANS peggiorano la funzione renale; vari farmaci richiedono aggiustamento posologico per la ridotta clearance." },

  // ─── IPB E DISFUNZIONE ERETTILE (mancanti) ───────────────────────────
  { id: 741, argomento: "IPB e disfunzione erettile", domanda: "Uomo con IPB e LUTS: un farmaco di prima linea.", risposta: "α-litico uroselettivo (silodosina, tamsulosina); 5-alfa-reduttasi inibitore (finasteride) se prostata voluminosa." },
  { id: 742, argomento: "IPB e disfunzione erettile", domanda: "Antipertensivo utile come terapia nell'IPB.", risposta: "α1-bloccante (es. doxazosina), ma nell'iperteso si preferisce un uroselettivo (silodosina) senza sostituire l'ACE-i." },
  { id: 743, argomento: "IPB e disfunzione erettile", domanda: "Quale classe di anti-ipertensivi è utile nel paziente con ipertrofia prostatica?", risposta: "α1-bloccanti." },
  { id: 744, argomento: "IPB e disfunzione erettile", domanda: "Paziente con LUTS ostruttivi senza prostata aumentata: quale farmaco?", risposta: "α-litico uroselettivo (silodosina/tamsulosina)." },
  { id: 745, argomento: "IPB e disfunzione erettile", domanda: "Uomo in terapia per IPB con ipotensione, diarrea e aneiaculazione: quale farmaco?", risposta: "α-litico (es. silodosina/tamsulosina)." },
  { id: 746, argomento: "IPB e disfunzione erettile", domanda: "Cos'è la finasteride? Azione e indicazione.", risposta: "Inibitore della 5-alfa-reduttasi: riduce il volume prostatico; usata nell'IPB (e nell'alopecia androgenetica)." },
  { id: 747, argomento: "IPB e disfunzione erettile", domanda: "Effetti collaterali della dutasteride.", risposta: "Riduzione della libido, disfunzione erettile, ginecomastia." },
  { id: 748, argomento: "IPB e disfunzione erettile", domanda: "Unico PDE5-inibitore per il trattamento dei LUTS.", risposta: "Tadalafil." },
  { id: 749, argomento: "IPB e disfunzione erettile", domanda: "Cos'è l'ossibutinina?", risposta: "Antimuscarinico per la vescica iperattiva (LUTS da riempimento/urgenza)." },
  { id: 750, argomento: "IPB e disfunzione erettile", domanda: "Mirabegron: cos'è e dove si usa?", risposta: "Beta3-agonista; vescica iperattiva (fase di riempimento)." },
  { id: 751, argomento: "IPB e disfunzione erettile", domanda: "Antimuscarinici nella vescica iperattiva.", risposta: "Solifenacina, fesoterodina, darifenacina (± dosaggi: solifenacina 5-10 mg, fesoterodina 4-8 mg)." },
  { id: 752, argomento: "IPB e disfunzione erettile", domanda: "Integratore naturale usato nell'IPB.", risposta: "Serenoa repens." },
  { id: 753, argomento: "IPB e disfunzione erettile", domanda: "Paziente in nitrati che non mantiene l'erezione: cosa dai?", risposta: "Alprostadil (PGE1) intracavernoso/intrauretrale (i PDE5-i sono controindicati coi nitrati)." },
  { id: 754, argomento: "IPB e disfunzione erettile", domanda: "Donna 24 anni con sintomi urinari ma stick/nitriti negativi: cosa fai?", risposta: "Prova terapeutica antibiotica breve; se negativa, valutare patologia funzionale (cistite interstiziale/vescica iperattiva)." },

  // ─── COMPLICANZE ANTITUMORALI (mancanti) ─────────────────────────────
  { id: 755, argomento: "Complicanze terapia antitumorale", domanda: "Neutropenia febbrile con meropenem da 5 giorni e febbre persistente: cosa aggiungi?", risposta: "Vancomicina (copertura dei Gram+); valutare antifungino se rischio elevato." },
  { id: 756, argomento: "Complicanze terapia antitumorale", domanda: "Caso clinico: donna 55 anni con buona risposta alla CT per K mammella, Hb 9: G-CSF o EPO?", risposta: "Né l'uno né l'altra di routine: l'EPO va evitata nei tumori potenzialmente curabili; il G-CSF solo se neutropenia febbrile/rischio elevato." },
  { id: 757, argomento: "Complicanze terapia antitumorale", domanda: "3 effetti collaterali del G-CSF/GM-CSF.", risposta: "Dolore osseo, rialzo di LDH/fosfatasi alcalina, sindrome di Sweet/rash, iperuricemia." },
  { id: 758, argomento: "Complicanze terapia antitumorale", domanda: "Piu rapido ad abbassare l'uricemia.", risposta: "Rasburicase (urato-ossidasi)." },
  { id: 759, argomento: "Complicanze terapia antitumorale", domanda: "Prima linea per prevenire l'iperkaliemia nella sindrome da lisi tumorale.", risposta: "Idratazione abbondante e forzatura della diuresi; ridurre l'apporto di potassio." },
  { id: 760, argomento: "Complicanze terapia antitumorale", domanda: "Come previeni la sindrome da lisi tumorale?", risposta: "Idratazione abbondante, allopurinolo (o rasburicase nei casi a rischio), monitoraggio degli elettroliti." },
  { id: 761, argomento: "Complicanze terapia antitumorale", domanda: "Cosa si dà con il rituximab per evitare la sindrome infusionale?", risposta: "Premedicazione con paracetamolo, antistaminico e corticosteroide." },
  { id: 762, argomento: "Complicanze terapia antitumorale", domanda: "Quando si aggiunge la vancomicina nella neutropenia febbrile?", risposta: "In assenza di risposta dopo 3-7 giorni o se sospetta infezione da Gram-positivi (catetere, mucosite, instabilita)." },
  { id: 763, argomento: "Complicanze terapia antitumorale", domanda: "Quali sono i principali effetti collaterali del tocilizumab?", risposta: "Infezioni, epatotossicita (aumento transaminasi), dislipidemia e riduzione della PCR (che maschera l'infiammazione)." },

  // ─── INSONNIA (mancanti) ──────────────────────────────────────────────
  { id: 764, argomento: "Insonnia", domanda: "DORA: dove li usi?", risposta: "Nell'insonnia (antagonisti duali dell'orexina, es. lemborexant/suvorexant)." },
  { id: 765, argomento: "Insonnia", domanda: "Paziente caduto con frattura di 3 vertebre e insonnia da dolore: quale farmaco?", risposta: "Trattamento del dolore + eventuale ipnotico breve (zolpidem o benzodiazepina a emivita breve)." },
  { id: 766, argomento: "Insonnia", domanda: "Emivita di lorazepam, clonazepam e zolpidem in ordine decrescente.", risposta: "Clonazepam (18-50 h) > lorazepam (10-20 h) > zolpidem (~2,5 h)." },

  // ─── MISCELLANEA (mancanti) ───────────────────────────────────────────
  { id: 767, argomento: "Miscellanea", domanda: "Malattia infettiva trattata con idrossiclorochina.", risposta: "Malaria." },
  { id: 768, argomento: "Miscellanea", domanda: "Cosa dai per la chiusura del dotto di Botallo (dotto arterioso pervio)?", risposta: "FANS (indometacina o ibuprofen) per chiuderlo; prostaglandine (PGE1) se invece va mantenuto pervio." },
  { id: 769, argomento: "Miscellanea", domanda: "Esempio di terapia patogenetica.", risposta: "Corticosteroidi/immunosoppressori nelle malattie autoimmuni (agiscono sul meccanismo, non sulla causa)." },
  { id: 770, argomento: "Miscellanea", domanda: "Cita 3 indicazioni dei beta-bloccanti.", risposta: "Ipertensione, cardiopatia ischemica/post-infarto, scompenso cardiaco, controllo del ritmo nella FA, profilassi delle varici esofagee." },
  { id: 771, argomento: "Miscellanea", domanda: "Farmaco per la rosacea sia orale che topico.", risposta: "Metronidazolo (topico e orale)." },
  { id: 772, argomento: "Miscellanea", domanda: "Indicazioni all'uso dei nutraceutici.", risposta: "Forme lievi o pazienti che rifiutano/non tollerano i farmaci, per ridurre gli effetti collaterali (es. monacolina nella dislipidemia lieve)." },
  { id: 773, argomento: "Miscellanea", domanda: "Cortisone: perche non si somministra a lungo termine?", risposta: "Per i numerosi effetti collaterali cronici (osteoporosi, diabete, ipertensione, infezioni, cataratta, soppressione surrenalica)." },
  { id: 774, argomento: "Miscellanea", domanda: "Almeno 3 infezioni piu comuni in chi assume corticosteroidi in cronico.", risposta: "Riattivazione di TBC e HBV, herpes zoster, candidosi, Pneumocystis jirovecii, strongiloidiasi." },
  { id: 775, argomento: "Miscellanea", domanda: "Vaccino orale (esempio).", risposta: "Vaccino antipolio orale (Sabin), anticolera o antitifoide orale (vaccini vivi attenuati/inattivati per via orale)." },
  { id: 776, argomento: "Miscellanea", domanda: "Cosa dai in gravidanza per il reflusso?", risposta: "Antiacidi/alginati (es. Gaviscon); sucralfato; PPI (omeprazolo) se necessario, considerati sicuri." },
  { id: 777, argomento: "Miscellanea", domanda: "Salbutamolo: classe e uso.", risposta: "Beta2-agonista a breve durata (SABA); broncodilatatore nell'asma/BPCO." },
  { id: 778, argomento: "Miscellanea", domanda: "Terazosina: classe e uso.", risposta: "Alpha1-bloccante; ipertensione e LUTS/IPB." },
  { id: 779, argomento: "Miscellanea", domanda: "2 farmaci ipouricemizzanti, natriuretici, cardio- e nefroprotettivi di nuova generazione.", risposta: "SGLT2-inibitori (es. dapagliflozin, empagliflozin)." },
  { id: 780, argomento: "Miscellanea", domanda: "Crisi tetanica: una nota di terapia.", risposta: "Benzodiazepine per gli spasmi, immunoglobuline antitetaniche + metronidazolo, controllo delle vie aeree e degli stimoli." },

  // ─── DIVERTICOLITE (nuovo argomento) ──────────────────────────────────
  { id: 781, argomento: "Diverticolite", domanda: "Antibiotico per la prevenzione della diverticolite acuta.", risposta: "Rifaximina 400 mg x2 per ~6-7 giorni al mese (cicli), spesso con fibre." },
  { id: 782, argomento: "Diverticolite", domanda: "Diverticolite con PCR aumentata: cosa fai?", risposta: "Diverticolite acuta non complicata: riposo intestinale, idratazione e antibiotici (ciprofloxacina + metronidazolo o amoxicillina-clavulanato); TC se sospetta complicanza." },
  { id: 783, argomento: "Diverticolite", domanda: "Diverticolite acuta non complicata: quale copertura antibiotica empirica?", risposta: "Antibiotici attivi su Gram-negativi e anaerobi: es. amoxicillina/clavulanato oppure chinolone + metronidazolo." },
];

export const argomenti = [...new Set(domande.map(d => d.argomento))];
export default domande;
