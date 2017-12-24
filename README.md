Accept-Language extra info API
==============================

  [![Issue status][gh-issues-badge]][gh-issues]
  [![NPM Version][npm-module-version-badge]][npm-module]
  [![Downloads][npm-downloads-total-badge]][npm-module]
  [![Say thanks][saythanks-badge]][saythanks-to]

API for reading extra information from the HTTP header [Accept-Language][url-moz-accept-language] based on the [Language subtag registry][url-language-subtag-registry] file.

Definitions of the [Accept-Language][url-moz-accept-language] can be found at the [Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content][url-rfc7231-3.1.3.1] and refers to the [Tags for Identifying Languages][url-rfc5646-3.1]

Examples
========

```
const al_api = require('@dptole/al-api')

al_api.getLanguageDescriptionBySubtag('en') // ['English']
al_api.getRegionDescriptionBySubtag('US') // ['United States']

al_api.getAcceptLanguageInfo('pt,pt-BR;q=0.9,es-VE;q=0.8')
/*
  [{
    'language': {
      'subtag': 'pt',
      'info': ['Portuguese']
    }
  }, {
    'language': {
      'subtag': 'pt',
      'info': ['Portuguese']
    },
    'region': {
      'subtag': 'BR',
      'info': ['Brazil']
    }
  }, {
    'language': {
      'subtag': 'es',
      'info': ['Castilian']
    },
    'region': {
      'subtag': 'VE',
      'info': ['Venezuela']
    }
  }]
*/
```

License
=======

[MIT][LICENSE]

[gh-issues-badge]: https://img.shields.io/github/issues-raw/dptole/al-api.svg
[gh-issues]: https://github.com/dptole/al-api/issues
[npm-module-version-badge]: https://img.shields.io/npm/v/@dptole/al-api.svg
[npm-module]: https://www.npmjs.org/package/@dptole/al-api
[npm-downloads-total-badge]: https://img.shields.io/npm/dt/@dptole/al-api.svg
[saythanks-badge]: https://img.shields.io/badge/say%20thanks-%E3%83%84-44cc11.svg
[saythanks-to]: https://saythanks.io/to/dptole
[url-moz-accept-language]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
[url-rfc7231-5.3.5]: https://tools.ietf.org/html/rfc7231#section-5.3.5
[url-rfc7231-3.1.3.1]: https://tools.ietf.org/html/rfc7231#section-3.1.3.1
[url-rfc5646-3.1]: https://tools.ietf.org/html/rfc5646#section-3.1
[url-language-subtag-registry]: https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[LICENSE]: LICENSE
