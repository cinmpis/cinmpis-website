# Rapporto di migrazione – CINMPIS

## Stato della prima versione

- Nuovo front-end responsive basato su Astro.
- Configurazione Pages CMS (`.pages.yml`) per gestione visuale dei contenuti.
- Area riservata raggiungibile manualmente da `/superuser/`, non inserita nei menu, nella sitemap o nel `robots.txt`; la pagina usa `noindex,nofollow`.
- Archivio storico preservato: 164 file in `Amministrazione Trasparente` e 16 file in `bandi`.
- Redirect dalle principali vecchie pagine `.html` alle nuove sezioni.
- 15 università e 151 afferenti importati dalla pagina storica.
- 25 edizioni CINMPIS Days incluse, con evento 2027 a Salerno.
- 143 record bibliografici dopo rimozione dei duplicati esatti presenti nell'HTML storico.
- Importazione DOI automatizzata tramite Crossref e GitHub Actions.

## Organi aggiornati

Giunta: Armando Carlone, Alessandro Palmieri, Alessandra Tolomelli, Giorgia Oliviero.

Consiglio Scientifico: Luana Bagnoli, Barbara La Ferla, Marco Lessi, Melchiorre Parisi, Antonio Rescifina, Bartolo Gabriele, Filippo Doria, Stefano Superchi, Francesco De Riccardis, Francesco Secci.

Vice-Direttrice: Alessandra Tolomelli.

Il Direttore è stato mantenuto come Vito Capriati perché non è stata comunicata una variazione.

## Dati da confermare prima della pubblicazione definitiva

1. **Università consorziate:** la vecchia home citava Firenze, mentre la pagina dettagliata degli afferenti contiene Pisa e non Firenze. La nuova versione usa Pisa.
2. **Collegio dei Revisori:** nel vecchio `home.html`, la versione desktop indica Domenico Trotta come Presidente mentre la versione mobile indica Maurizio Bitetto. I Revisori sono stati omessi dalla nuova pagina Organi finché non vengono forniti dati certi.
3. **Delegati e afferenti:** importati fedelmente dalla pagina storica; è opportuno un controllo finale delle 15 sedi.
4. **Privacy/accessibilità:** prima del go-live vanno pubblicate le informative definitive e, se applicabile, la dichiarazione di accessibilità. Il sito non installa analytics o cookie di profilazione nella configurazione attuale.
5. **Deploy automatico:** non è stato attivato perché dipende dal tipo di hosting CINMPIS (FTP/SFTP/SSH/Git). Il workflow GitHub verifica già la build e crea l'artifact `dist`.

## Nota grafica

Il marchio molecolare SVG inserito nella prima versione è un elemento grafico provvisorio creato per il nuovo layout. Può essere sostituito in qualunque momento con il logo ufficiale senza modificare la struttura del sito.
