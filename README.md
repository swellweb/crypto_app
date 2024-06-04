# crypto_app

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).


1) pages: Questa cartella contiene le pagine dell'applicazione. Ogni file rappresenta una rotta e viene automaticamente configurato come una rotta nell'applicazione.

layouts: Questa cartella contiene i layout riutilizzabili per le pagine. I layout sono utili per definire la struttura comune delle pagine, come intestazioni e piè di pagina.

plugins: Qui vengono memorizzati i plugin di Vue.js che devono essere inclusi globalmente. I plugin sono usati per aggiungere funzionalità globali all'applicazione, come librerie di terze parti.

store: Questa cartella contiene lo store Vuex, che gestisce lo stato globale dell'applicazione. È utile per condividere dati tra componenti senza passare le props.

static: Qui vengono inseriti i file statici, come immagini e icone, che devono essere serviti così come sono senza essere processati da Webpack.

assets: Questa cartella contiene file di risorse come CSS, SCSS e immagini che non sono direttamente pubblici, ma che possono essere elaborati da Webpack.

services: Qui vengono memorizzati i file per le chiamate API. È una buona pratica separare la logica delle chiamate API in file distinti per mantenere il codice pulito.

utils: Questa cartella contiene funzioni di utilità che possono essere utilizzate in tutto il progetto.


2)Quando carico un progetto Nuxt.js su un hosting serverless come Vercel o Netlify, utilizzo specifiche funzionalità di Nuxt.js e prendo alcuni accorgimenti per garantire che il progetto funzioni correttamente. Ecco come procedo:

Funzionalità di Nuxt.js da Utilizzare:

Static Site Generation (SSG):

Utilizzo nuxt generate per generare il sito statico. Questo approccio è ideale per Netlify e Vercel poiché questi servizi sono ottimizzati per la distribuzione di siti statici.
Quindi creo file HTML statici che possono essere serviti rapidamente agli utenti.

Server-Side Rendering (SSR):

Se ho bisogno di funzionalità server-side, come l'autenticazione dinamica o la gestione di sessioni, posso configurare Nuxt.js per l'SSR.
Utilizzo nuxt start per avviare l'applicazione in modalità server. Vercel e Netlify supportano entrambe SSR attraverso funzioni serverless.
Accorgimenti per Vercel:

Configurazione del File vercel.json:

Configuro il file vercel.json per definire le impostazioni di build e routing.
Deployment:

Collego il repository GitHub, GitLab o Bitbucket a Vercel.
Seguo le istruzioni sulla dashboard di Vercel per configurare e distribuire il progetto.

3) Per rendere la pagina visibile ai robots (Google), prendo i seguenti accorgimenti in Nuxt.js:

Rendering Lato Server:

Utilizzo SSR per garantire che i contenuti siano visibili ai motori di ricerca. Con SSR, le pagine vengono renderizzate sul server prima di essere inviate al client, assicurando che il contenuto sia disponibile per l'indicizzazione da parte dei robots.
Meta Tags e SEO:

Configuro correttamente i meta tag e le informazioni SEO in nuxt.config.js e nelle singole pagine. Questo include l'aggiunta di descrizioni, parole chiave e altre informazioni rilevanti per migliorare il ranking nei motori di ricerca.
Motivo:

Visibilità: I motori di ricerca possono indicizzare correttamente i contenuti, migliorando il SEO.
Performance: L'SSR migliora le performance di caricamento percepite, influenzando positivamente il ranking.

4) Per avvertire l'utente quando il prezzo di Bitcoin cambia dall'ultima volta che ha visitato la pagina, utilizzo i watchers di Vue.js. I watchers permettono di monitorare i cambiamenti dei dati e di eseguire codice in risposta a questi cambiamenti.

5) Per visualizzare la pagina solo agli utenti che si collegano dall'Italia, utilizzo il middleware di Nuxt.js. Questo mi  permette di eseguire il codice prima del caricamento di una pagina, così posso controllare la geolocalizzazione dell'utente.

6) Posso utilizzare UseFetch con con la chiave specifica per la cache e per memorizzare i dati nella cache per tot tempo settando maxAge.

