require('should')

const assert = require('assert')
    , al_api = require('../index.js')

describe('getVariantTypeBySubtag', function() {
  const arg = 'xsistemo'
      , json_arg = JSON.stringify(arg)

  it('#getVariantTypeBySubtag is a function', function() {
    al_api['getVariantTypeBySubtag'].should.be.a.Function()
  })

  it('#getVariantTypeBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantTypeBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantTypeByDescription', function() {
  const arg = 'Standard X-system orthographic fallback for spelling Esperanto'
      , json_arg = JSON.stringify(arg)

  it('#getVariantTypeByDescription is a function', function() {
    al_api['getVariantTypeByDescription'].should.be.a.Function()
  })

  it('#getVariantTypeByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantTypeByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantTypeByAdded', function() {
  const arg = '2017-03-14'
      , json_arg = JSON.stringify(arg)

  it('#getVariantTypeByAdded is a function', function() {
    al_api['getVariantTypeByAdded'].should.be.a.Function()
  })

  it('#getVariantTypeByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantTypeByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantTypeByPrefix', function() {
  const arg = 'eo'
      , json_arg = JSON.stringify(arg)

  it('#getVariantTypeByPrefix is a function', function() {
    al_api['getVariantTypeByPrefix'].should.be.a.Function()
  })

  it('#getVariantTypeByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantTypeByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantTypeByComments', function() {
  const arg = 'Vallader is one of the five traditional written standards or "idioms" of the Romansh language.'
      , json_arg = JSON.stringify(arg)

  it('#getVariantTypeByComments is a function', function() {
    al_api['getVariantTypeByComments'].should.be.a.Function()
  })

  it('#getVariantTypeByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantTypeByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantTypeByrepresent equivalent phonemes in a unified fashion. Also known as', function() {
  const arg = 'New Turkic Alphabet; Birlәşdirilmiş Jeni Tyrk Әlifbasь (Birlesdirilmis Jeni Tyrk Elifbasi); Jaŋalif (Janalif).'
      , json_arg = JSON.stringify(arg)

  it('#getVariantTypeByrepresent equivalent phonemes in a unified fashion. Also known as is a function', function() {
    al_api['getVariantTypeByrepresent equivalent phonemes in a unified fashion. Also known as'].should.be.a.Function()
  })

  it('#getVariantTypeByrepresent equivalent phonemes in a unified fashion. Also known as(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantTypeByrepresent equivalent phonemes in a unified fashion. Also known as'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantTypeByDeprecated', function() {
  const arg = '2010-02-07'
      , json_arg = JSON.stringify(arg)

  it('#getVariantTypeByDeprecated is a function', function() {
    al_api['getVariantTypeByDeprecated'].should.be.a.Function()
  })

  it('#getVariantTypeByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantTypeByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantTypeByPreferred-Value', function() {
  const arg = 'alalc97'
      , json_arg = JSON.stringify(arg)

  it('#getVariantTypeByPreferred-Value is a function', function() {
    al_api['getVariantTypeByPreferred-Value'].should.be.a.Function()
  })

  it('#getVariantTypeByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantTypeByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantSubtagByType', function() {
  const arg = 'variant'
      , json_arg = JSON.stringify(arg)

  it('#getVariantSubtagByType is a function', function() {
    al_api['getVariantSubtagByType'].should.be.a.Function()
  })

  it('#getVariantSubtagByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantSubtagByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantSubtagByDescription', function() {
  const arg = 'Standard X-system orthographic fallback for spelling Esperanto'
      , json_arg = JSON.stringify(arg)

  it('#getVariantSubtagByDescription is a function', function() {
    al_api['getVariantSubtagByDescription'].should.be.a.Function()
  })

  it('#getVariantSubtagByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantSubtagByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantSubtagByAdded', function() {
  const arg = '2017-03-14'
      , json_arg = JSON.stringify(arg)

  it('#getVariantSubtagByAdded is a function', function() {
    al_api['getVariantSubtagByAdded'].should.be.a.Function()
  })

  it('#getVariantSubtagByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantSubtagByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantSubtagByPrefix', function() {
  const arg = 'eo'
      , json_arg = JSON.stringify(arg)

  it('#getVariantSubtagByPrefix is a function', function() {
    al_api['getVariantSubtagByPrefix'].should.be.a.Function()
  })

  it('#getVariantSubtagByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantSubtagByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantSubtagByComments', function() {
  const arg = 'Vallader is one of the five traditional written standards or "idioms" of the Romansh language.'
      , json_arg = JSON.stringify(arg)

  it('#getVariantSubtagByComments is a function', function() {
    al_api['getVariantSubtagByComments'].should.be.a.Function()
  })

  it('#getVariantSubtagByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantSubtagByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantSubtagByrepresent equivalent phonemes in a unified fashion. Also known as', function() {
  const arg = 'New Turkic Alphabet; Birlәşdirilmiş Jeni Tyrk Әlifbasь (Birlesdirilmis Jeni Tyrk Elifbasi); Jaŋalif (Janalif).'
      , json_arg = JSON.stringify(arg)

  it('#getVariantSubtagByrepresent equivalent phonemes in a unified fashion. Also known as is a function', function() {
    al_api['getVariantSubtagByrepresent equivalent phonemes in a unified fashion. Also known as'].should.be.a.Function()
  })

  it('#getVariantSubtagByrepresent equivalent phonemes in a unified fashion. Also known as(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantSubtagByrepresent equivalent phonemes in a unified fashion. Also known as'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantSubtagByDeprecated', function() {
  const arg = '2010-02-07'
      , json_arg = JSON.stringify(arg)

  it('#getVariantSubtagByDeprecated is a function', function() {
    al_api['getVariantSubtagByDeprecated'].should.be.a.Function()
  })

  it('#getVariantSubtagByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantSubtagByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantSubtagByPreferred-Value', function() {
  const arg = 'alalc97'
      , json_arg = JSON.stringify(arg)

  it('#getVariantSubtagByPreferred-Value is a function', function() {
    al_api['getVariantSubtagByPreferred-Value'].should.be.a.Function()
  })

  it('#getVariantSubtagByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantSubtagByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDescriptionByType', function() {
  const arg = 'variant'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDescriptionByType is a function', function() {
    al_api['getVariantDescriptionByType'].should.be.a.Function()
  })

  it('#getVariantDescriptionByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDescriptionByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDescriptionBySubtag', function() {
  const arg = 'xsistemo'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDescriptionBySubtag is a function', function() {
    al_api['getVariantDescriptionBySubtag'].should.be.a.Function()
  })

  it('#getVariantDescriptionBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDescriptionBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDescriptionByAdded', function() {
  const arg = '2017-03-14'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDescriptionByAdded is a function', function() {
    al_api['getVariantDescriptionByAdded'].should.be.a.Function()
  })

  it('#getVariantDescriptionByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDescriptionByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDescriptionByPrefix', function() {
  const arg = 'eo'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDescriptionByPrefix is a function', function() {
    al_api['getVariantDescriptionByPrefix'].should.be.a.Function()
  })

  it('#getVariantDescriptionByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDescriptionByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDescriptionByComments', function() {
  const arg = 'Vallader is one of the five traditional written standards or "idioms" of the Romansh language.'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDescriptionByComments is a function', function() {
    al_api['getVariantDescriptionByComments'].should.be.a.Function()
  })

  it('#getVariantDescriptionByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDescriptionByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDescriptionByrepresent equivalent phonemes in a unified fashion. Also known as', function() {
  const arg = 'New Turkic Alphabet; Birlәşdirilmiş Jeni Tyrk Әlifbasь (Birlesdirilmis Jeni Tyrk Elifbasi); Jaŋalif (Janalif).'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDescriptionByrepresent equivalent phonemes in a unified fashion. Also known as is a function', function() {
    al_api['getVariantDescriptionByrepresent equivalent phonemes in a unified fashion. Also known as'].should.be.a.Function()
  })

  it('#getVariantDescriptionByrepresent equivalent phonemes in a unified fashion. Also known as(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDescriptionByrepresent equivalent phonemes in a unified fashion. Also known as'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDescriptionByDeprecated', function() {
  const arg = '2010-02-07'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDescriptionByDeprecated is a function', function() {
    al_api['getVariantDescriptionByDeprecated'].should.be.a.Function()
  })

  it('#getVariantDescriptionByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDescriptionByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDescriptionByPreferred-Value', function() {
  const arg = 'alalc97'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDescriptionByPreferred-Value is a function', function() {
    al_api['getVariantDescriptionByPreferred-Value'].should.be.a.Function()
  })

  it('#getVariantDescriptionByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDescriptionByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantAddedByType', function() {
  const arg = 'variant'
      , json_arg = JSON.stringify(arg)

  it('#getVariantAddedByType is a function', function() {
    al_api['getVariantAddedByType'].should.be.a.Function()
  })

  it('#getVariantAddedByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantAddedByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantAddedBySubtag', function() {
  const arg = 'xsistemo'
      , json_arg = JSON.stringify(arg)

  it('#getVariantAddedBySubtag is a function', function() {
    al_api['getVariantAddedBySubtag'].should.be.a.Function()
  })

  it('#getVariantAddedBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantAddedBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantAddedByDescription', function() {
  const arg = 'Standard X-system orthographic fallback for spelling Esperanto'
      , json_arg = JSON.stringify(arg)

  it('#getVariantAddedByDescription is a function', function() {
    al_api['getVariantAddedByDescription'].should.be.a.Function()
  })

  it('#getVariantAddedByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantAddedByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantAddedByPrefix', function() {
  const arg = 'eo'
      , json_arg = JSON.stringify(arg)

  it('#getVariantAddedByPrefix is a function', function() {
    al_api['getVariantAddedByPrefix'].should.be.a.Function()
  })

  it('#getVariantAddedByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantAddedByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantAddedByComments', function() {
  const arg = 'Vallader is one of the five traditional written standards or "idioms" of the Romansh language.'
      , json_arg = JSON.stringify(arg)

  it('#getVariantAddedByComments is a function', function() {
    al_api['getVariantAddedByComments'].should.be.a.Function()
  })

  it('#getVariantAddedByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantAddedByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantAddedByrepresent equivalent phonemes in a unified fashion. Also known as', function() {
  const arg = 'New Turkic Alphabet; Birlәşdirilmiş Jeni Tyrk Әlifbasь (Birlesdirilmis Jeni Tyrk Elifbasi); Jaŋalif (Janalif).'
      , json_arg = JSON.stringify(arg)

  it('#getVariantAddedByrepresent equivalent phonemes in a unified fashion. Also known as is a function', function() {
    al_api['getVariantAddedByrepresent equivalent phonemes in a unified fashion. Also known as'].should.be.a.Function()
  })

  it('#getVariantAddedByrepresent equivalent phonemes in a unified fashion. Also known as(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantAddedByrepresent equivalent phonemes in a unified fashion. Also known as'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantAddedByDeprecated', function() {
  const arg = '2010-02-07'
      , json_arg = JSON.stringify(arg)

  it('#getVariantAddedByDeprecated is a function', function() {
    al_api['getVariantAddedByDeprecated'].should.be.a.Function()
  })

  it('#getVariantAddedByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantAddedByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantAddedByPreferred-Value', function() {
  const arg = 'alalc97'
      , json_arg = JSON.stringify(arg)

  it('#getVariantAddedByPreferred-Value is a function', function() {
    al_api['getVariantAddedByPreferred-Value'].should.be.a.Function()
  })

  it('#getVariantAddedByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantAddedByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPrefixByType', function() {
  const arg = 'variant'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPrefixByType is a function', function() {
    al_api['getVariantPrefixByType'].should.be.a.Function()
  })

  it('#getVariantPrefixByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPrefixByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPrefixBySubtag', function() {
  const arg = 'xsistemo'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPrefixBySubtag is a function', function() {
    al_api['getVariantPrefixBySubtag'].should.be.a.Function()
  })

  it('#getVariantPrefixBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPrefixBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPrefixByDescription', function() {
  const arg = 'Standard X-system orthographic fallback for spelling Esperanto'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPrefixByDescription is a function', function() {
    al_api['getVariantPrefixByDescription'].should.be.a.Function()
  })

  it('#getVariantPrefixByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPrefixByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPrefixByAdded', function() {
  const arg = '2017-03-14'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPrefixByAdded is a function', function() {
    al_api['getVariantPrefixByAdded'].should.be.a.Function()
  })

  it('#getVariantPrefixByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPrefixByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPrefixByComments', function() {
  const arg = 'Vallader is one of the five traditional written standards or "idioms" of the Romansh language.'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPrefixByComments is a function', function() {
    al_api['getVariantPrefixByComments'].should.be.a.Function()
  })

  it('#getVariantPrefixByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPrefixByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPrefixByrepresent equivalent phonemes in a unified fashion. Also known as', function() {
  const arg = 'New Turkic Alphabet; Birlәşdirilmiş Jeni Tyrk Әlifbasь (Birlesdirilmis Jeni Tyrk Elifbasi); Jaŋalif (Janalif).'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPrefixByrepresent equivalent phonemes in a unified fashion. Also known as is a function', function() {
    al_api['getVariantPrefixByrepresent equivalent phonemes in a unified fashion. Also known as'].should.be.a.Function()
  })

  it('#getVariantPrefixByrepresent equivalent phonemes in a unified fashion. Also known as(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPrefixByrepresent equivalent phonemes in a unified fashion. Also known as'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPrefixByDeprecated', function() {
  const arg = '2010-02-07'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPrefixByDeprecated is a function', function() {
    al_api['getVariantPrefixByDeprecated'].should.be.a.Function()
  })

  it('#getVariantPrefixByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPrefixByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPrefixByPreferred-Value', function() {
  const arg = 'alalc97'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPrefixByPreferred-Value is a function', function() {
    al_api['getVariantPrefixByPreferred-Value'].should.be.a.Function()
  })

  it('#getVariantPrefixByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPrefixByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantCommentsByType', function() {
  const arg = 'variant'
      , json_arg = JSON.stringify(arg)

  it('#getVariantCommentsByType is a function', function() {
    al_api['getVariantCommentsByType'].should.be.a.Function()
  })

  it('#getVariantCommentsByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantCommentsByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantCommentsBySubtag', function() {
  const arg = 'vallader'
      , json_arg = JSON.stringify(arg)

  it('#getVariantCommentsBySubtag is a function', function() {
    al_api['getVariantCommentsBySubtag'].should.be.a.Function()
  })

  it('#getVariantCommentsBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantCommentsBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantCommentsByDescription', function() {
  const arg = 'Vallader idiom of Romansh'
      , json_arg = JSON.stringify(arg)

  it('#getVariantCommentsByDescription is a function', function() {
    al_api['getVariantCommentsByDescription'].should.be.a.Function()
  })

  it('#getVariantCommentsByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantCommentsByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantCommentsByAdded', function() {
  const arg = '2010-06-29'
      , json_arg = JSON.stringify(arg)

  it('#getVariantCommentsByAdded is a function', function() {
    al_api['getVariantCommentsByAdded'].should.be.a.Function()
  })

  it('#getVariantCommentsByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantCommentsByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantCommentsByPrefix', function() {
  const arg = 'rm'
      , json_arg = JSON.stringify(arg)

  it('#getVariantCommentsByPrefix is a function', function() {
    al_api['getVariantCommentsByPrefix'].should.be.a.Function()
  })

  it('#getVariantCommentsByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantCommentsByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantCommentsByrepresent equivalent phonemes in a unified fashion. Also known as', function() {
  const arg = 'New Turkic Alphabet; Birlәşdirilmiş Jeni Tyrk Әlifbasь (Birlesdirilmis Jeni Tyrk Elifbasi); Jaŋalif (Janalif).'
      , json_arg = JSON.stringify(arg)

  it('#getVariantCommentsByrepresent equivalent phonemes in a unified fashion. Also known as is a function', function() {
    al_api['getVariantCommentsByrepresent equivalent phonemes in a unified fashion. Also known as'].should.be.a.Function()
  })

  it('#getVariantCommentsByrepresent equivalent phonemes in a unified fashion. Also known as(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantCommentsByrepresent equivalent phonemes in a unified fashion. Also known as'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantCommentsByDeprecated', function() {
  const arg = '2010-02-07'
      , json_arg = JSON.stringify(arg)

  it('#getVariantCommentsByDeprecated is a function', function() {
    al_api['getVariantCommentsByDeprecated'].should.be.a.Function()
  })

  it('#getVariantCommentsByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantCommentsByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantCommentsByPreferred-Value', function() {
  const arg = 'alalc97'
      , json_arg = JSON.stringify(arg)

  it('#getVariantCommentsByPreferred-Value is a function', function() {
    al_api['getVariantCommentsByPreferred-Value'].should.be.a.Function()
  })

  it('#getVariantCommentsByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantCommentsByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantrepresent equivalent phonemes in a unified fashion. Also known asByType', function() {
  const arg = 'variant'
      , json_arg = JSON.stringify(arg)

  it('#getVariantrepresent equivalent phonemes in a unified fashion. Also known asByType is a function', function() {
    al_api['getVariantrepresent equivalent phonemes in a unified fashion. Also known asByType'].should.be.a.Function()
  })

  it('#getVariantrepresent equivalent phonemes in a unified fashion. Also known asByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantrepresent equivalent phonemes in a unified fashion. Also known asByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantrepresent equivalent phonemes in a unified fashion. Also known asBySubtag', function() {
  const arg = 'baku1926'
      , json_arg = JSON.stringify(arg)

  it('#getVariantrepresent equivalent phonemes in a unified fashion. Also known asBySubtag is a function', function() {
    al_api['getVariantrepresent equivalent phonemes in a unified fashion. Also known asBySubtag'].should.be.a.Function()
  })

  it('#getVariantrepresent equivalent phonemes in a unified fashion. Also known asBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantrepresent equivalent phonemes in a unified fashion. Also known asBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantrepresent equivalent phonemes in a unified fashion. Also known asByDescription', function() {
  const arg = 'Unified Turkic Latin Alphabet (Historical)'
      , json_arg = JSON.stringify(arg)

  it('#getVariantrepresent equivalent phonemes in a unified fashion. Also known asByDescription is a function', function() {
    al_api['getVariantrepresent equivalent phonemes in a unified fashion. Also known asByDescription'].should.be.a.Function()
  })

  it('#getVariantrepresent equivalent phonemes in a unified fashion. Also known asByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantrepresent equivalent phonemes in a unified fashion. Also known asByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantrepresent equivalent phonemes in a unified fashion. Also known asByAdded', function() {
  const arg = '2007-04-18'
      , json_arg = JSON.stringify(arg)

  it('#getVariantrepresent equivalent phonemes in a unified fashion. Also known asByAdded is a function', function() {
    al_api['getVariantrepresent equivalent phonemes in a unified fashion. Also known asByAdded'].should.be.a.Function()
  })

  it('#getVariantrepresent equivalent phonemes in a unified fashion. Also known asByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantrepresent equivalent phonemes in a unified fashion. Also known asByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantrepresent equivalent phonemes in a unified fashion. Also known asByPrefix', function() {
  const arg = 'uz'
      , json_arg = JSON.stringify(arg)

  it('#getVariantrepresent equivalent phonemes in a unified fashion. Also known asByPrefix is a function', function() {
    al_api['getVariantrepresent equivalent phonemes in a unified fashion. Also known asByPrefix'].should.be.a.Function()
  })

  it('#getVariantrepresent equivalent phonemes in a unified fashion. Also known asByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantrepresent equivalent phonemes in a unified fashion. Also known asByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantrepresent equivalent phonemes in a unified fashion. Also known asByComments', function() {
  const arg = 'Denotes alphabet used in Turkic republics/regions of the former USSR in late 1920s, and throughout 1930s, which aspired to'
      , json_arg = JSON.stringify(arg)

  it('#getVariantrepresent equivalent phonemes in a unified fashion. Also known asByComments is a function', function() {
    al_api['getVariantrepresent equivalent phonemes in a unified fashion. Also known asByComments'].should.be.a.Function()
  })

  it('#getVariantrepresent equivalent phonemes in a unified fashion. Also known asByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantrepresent equivalent phonemes in a unified fashion. Also known asByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDeprecatedByType', function() {
  const arg = 'variant'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDeprecatedByType is a function', function() {
    al_api['getVariantDeprecatedByType'].should.be.a.Function()
  })

  it('#getVariantDeprecatedByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDeprecatedByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDeprecatedBySubtag', function() {
  const arg = 'heploc'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDeprecatedBySubtag is a function', function() {
    al_api['getVariantDeprecatedBySubtag'].should.be.a.Function()
  })

  it('#getVariantDeprecatedBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDeprecatedBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDeprecatedByDescription', function() {
  const arg = 'Hepburn romanization, Library of Congress method'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDeprecatedByDescription is a function', function() {
    al_api['getVariantDeprecatedByDescription'].should.be.a.Function()
  })

  it('#getVariantDeprecatedByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDeprecatedByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDeprecatedByAdded', function() {
  const arg = '2009-10-01'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDeprecatedByAdded is a function', function() {
    al_api['getVariantDeprecatedByAdded'].should.be.a.Function()
  })

  it('#getVariantDeprecatedByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDeprecatedByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDeprecatedByPrefix', function() {
  const arg = 'ja-Latn-hepburn'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDeprecatedByPrefix is a function', function() {
    al_api['getVariantDeprecatedByPrefix'].should.be.a.Function()
  })

  it('#getVariantDeprecatedByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDeprecatedByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDeprecatedByComments', function() {
  const arg = 'Preferred tag is ja-Latn-alalc97'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDeprecatedByComments is a function', function() {
    al_api['getVariantDeprecatedByComments'].should.be.a.Function()
  })

  it('#getVariantDeprecatedByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDeprecatedByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantDeprecatedByPreferred-Value', function() {
  const arg = 'alalc97'
      , json_arg = JSON.stringify(arg)

  it('#getVariantDeprecatedByPreferred-Value is a function', function() {
    al_api['getVariantDeprecatedByPreferred-Value'].should.be.a.Function()
  })

  it('#getVariantDeprecatedByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantDeprecatedByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPreferred-ValueByType', function() {
  const arg = 'variant'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPreferred-ValueByType is a function', function() {
    al_api['getVariantPreferred-ValueByType'].should.be.a.Function()
  })

  it('#getVariantPreferred-ValueByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPreferred-ValueByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPreferred-ValueBySubtag', function() {
  const arg = 'heploc'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPreferred-ValueBySubtag is a function', function() {
    al_api['getVariantPreferred-ValueBySubtag'].should.be.a.Function()
  })

  it('#getVariantPreferred-ValueBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPreferred-ValueBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPreferred-ValueByDescription', function() {
  const arg = 'Hepburn romanization, Library of Congress method'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPreferred-ValueByDescription is a function', function() {
    al_api['getVariantPreferred-ValueByDescription'].should.be.a.Function()
  })

  it('#getVariantPreferred-ValueByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPreferred-ValueByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPreferred-ValueByAdded', function() {
  const arg = '2009-10-01'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPreferred-ValueByAdded is a function', function() {
    al_api['getVariantPreferred-ValueByAdded'].should.be.a.Function()
  })

  it('#getVariantPreferred-ValueByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPreferred-ValueByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPreferred-ValueByPrefix', function() {
  const arg = 'ja-Latn-hepburn'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPreferred-ValueByPrefix is a function', function() {
    al_api['getVariantPreferred-ValueByPrefix'].should.be.a.Function()
  })

  it('#getVariantPreferred-ValueByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPreferred-ValueByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPreferred-ValueByComments', function() {
  const arg = 'Preferred tag is ja-Latn-alalc97'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPreferred-ValueByComments is a function', function() {
    al_api['getVariantPreferred-ValueByComments'].should.be.a.Function()
  })

  it('#getVariantPreferred-ValueByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPreferred-ValueByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getVariantPreferred-ValueByDeprecated', function() {
  const arg = '2010-02-07'
      , json_arg = JSON.stringify(arg)

  it('#getVariantPreferred-ValueByDeprecated is a function', function() {
    al_api['getVariantPreferred-ValueByDeprecated'].should.be.a.Function()
  })

  it('#getVariantPreferred-ValueByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getVariantPreferred-ValueByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

