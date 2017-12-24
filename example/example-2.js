
const al_api = require('../index.js')
    , log = console.log

log(al_api.getAcceptLanguageInfo('pt,pt-BR;q=0.9,es-VE'))
/*
[
  {
    "language": {
      "subtag": "pt",
      "info": [
        "Portuguese"
      ]
    }
  },
  {
    "language": {
      "subtag": "pt",
      "info": [
        "Portuguese"
      ]
    },
    "region": {
      "subtag": "BR",
      "info": [
        "Brazil"
      ]
    }
  },
  {
    "language": {
      "subtag": "es",
      "info": [
        "Castilian"
      ]
    },
    "region": {
      "subtag": "VE",
      "info": [
        "Venezuela"
      ]
    }
  }
]
*/

log(al_api.getAcceptLanguageInfo('en-US,en;q=0.9,pt;q=0.8,es;q=0.7,fr;q=0.6,pl;q=0.5,ca;q=0.4,gl;q=0.3,it;q=0.2,da;q=0.1'))
/*
[
  {
    "language": {
      "subtag": "en",
      "info": [
        "English"
      ]
    },
    "region": {
      "subtag": "US",
      "info": [
        "United States"
      ]
    }
  },
  {
    "language": {
      "subtag": "en",
      "info": [
        "English"
      ]
    }
  },
  {
    "language": {
      "subtag": "pt",
      "info": [
        "Portuguese"
      ]
    }
  },
  {
    "language": {
      "subtag": "es",
      "info": [
        "Castilian"
      ]
    }
  },
  {
    "language": {
      "subtag": "fr",
      "info": [
        "French"
      ]
    }
  },
  {
    "language": {
      "subtag": "pl",
      "info": [
        "Polish"
      ]
    }
  },
  {
    "language": {
      "subtag": "ca",
      "info": [
        "Valencian"
      ]
    }
  },
  {
    "language": {
      "subtag": "gl",
      "info": [
        "Galician"
      ]
    }
  },
  {
    "language": {
      "subtag": "it",
      "info": [
        "Italian"
      ]
    }
  },
  {
    "language": {
      "subtag": "da",
      "info": [
        "Danish"
      ]
    }
  }
]
*/
