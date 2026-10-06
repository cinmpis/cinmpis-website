# CINMPIS — sistema di anteprima

Il progetto contiene un sistema di anteprima separato dal sito pubblico.

## Cosa fa il pulsante `Anteprima sito` in Pages CMS

Il pulsante è definito in `.pages.yml` e avvia il workflow:

`.github/workflows/preview.yml`

Il workflow:

1. legge la versione corrente del repository;
2. installa le dipendenze;
3. costruisce Astro con `CINMPIS_PREVIEW=true`;
4. adatta automaticamente il `base` all'URL GitHub Pages del repository;
5. inserisce il banner `ANTEPRIMA CINMPIS`;
6. aggiunge `noindex,nofollow,noarchive`;
7. genera un `robots.txt` con `Disallow: /` e rimuove la sitemap;
8. pubblica `dist/` su GitHub Pages.

La preview non esegue alcun deploy verso `www.cinmpis.it`.

## Attivazione una tantum su GitHub

Nel repository `cinmpis-website`:

1. `Settings` → `Pages`.
2. In `Build and deployment`, scegliere `GitHub Actions` come Source.
3. Verificare che nell'organizzazione sia consentita la pubblicazione GitHub Pages.
4. Aprire Pages CMS e usare `Anteprima sito`.

L'URL risultante sarà normalmente:

`https://<organizzazione>.github.io/cinmpis-website/`

GitHub mostra comunque l'URL esatto nel deployment `github-pages` al termine del workflow.

## Repository privato

Con GitHub Free / GitHub Free for organizations, GitHub Pages funziona solo con repository pubblici. Per mantenere `cinmpis-website` privato occorre GitHub Pro/Team/Enterprise oppure spostare il target di preview su un servizio separato (per esempio Cloudflare Pages o un sottodominio via FTP/SFTP).

Non inserire mai password, token, chiavi API o credenziali nel repository, indipendentemente dalla sua visibilità.
