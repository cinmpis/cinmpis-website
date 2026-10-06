# CINMPIS website – nuova piattaforma

Nuovo sito statico CINMPIS costruito con **Astro** e predisposto per **Pages CMS**.

## Avvio locale

Requisiti: Node.js 22.12+.

```bash
npm install
npm run dev
```

Build di produzione:

```bash
npm run build
```

I file pronti per il server sono generati in `dist/`.

## Pages CMS

1. Pubblicare questo repository nell'organizzazione GitHub CINMPIS.
2. Installare/autorizzare Pages CMS solo su questo repository.
3. Aprire https://app.pagescms.org/ e selezionare il repository.
4. La configurazione è nel file `.pages.yml`.
5. `/superuser/` sul sito pubblico è solo un collegamento all'area Pages CMS: non contiene credenziali.

## Archivio storico

I PDF e XML originali di `bandi/` e `Amministrazione Trasparente/` sono conservati in `public/` mantenendo gli URL storici quando possibile. Le vecchie pagine `.html` principali reindirizzano alle nuove sezioni.

## Bibliografia

Nel pannello Pages CMS è prevista l'azione **Importa pubblicazione da DOI**, che usa Crossref e aggiorna `src/data/publications.json` tramite GitHub Actions.

## Deploy

Il workflow `build.yml` verifica ogni modifica e produce un artifact `cinmpis-dist`. Il caricamento automatico sul server CINMPIS va configurato solo dopo avere verificato il tipo di hosting (FTP/SFTP/SSH/Git).

## Anteprima online da Pages CMS

Il progetto include un'azione Pages CMS denominata **Anteprima sito**. Il pulsante esegue `.github/workflows/preview.yml`, costruisce il sito in modalità preview e lo pubblica su GitHub Pages senza modificare `www.cinmpis.it`.

Caratteristiche della preview:

- usa automaticamente il percorso GitHub Pages del repository (`/<nome-repository>/`);
- mostra un banner **ANTEPRIMA CINMPIS**;
- aggiunge `noindex,nofollow,noarchive` a tutte le pagine;
- sostituisce `robots.txt` con `Disallow: /`;
- rimuove la sitemap dalla build di anteprima;
- mantiene link, immagini, PDF e archivio storico funzionanti anche sotto il sottopercorso GitHub Pages.

### Attivazione una tantum

1. In GitHub aprire `Settings > Pages` del repository.
2. In **Build and deployment**, scegliere **GitHub Actions** come Source.
3. In Pages CMS usare il pulsante **Anteprima sito**.
4. Al termine del workflow, GitHub mostra l'URL dell'ambiente `github-pages` nella sezione Deployments / Actions.

Con GitHub Free / GitHub Free for organizations, GitHub Pages richiede che il repository sia pubblico. Se il repository deve rimanere privato, occorre GitHub Pro/Team oppure un diverso target di preview (ad esempio un sottodominio via FTP/SFTP o Cloudflare Pages).
