const Types = require('./Types')

class Random {
  constructor() {
    this.characters = {
      lowerLatters: 'abcdefghijklmnopqrstuvxywz',
      upperLatters: 'ABCDEFGHIJKLMNOPQRSTUVXYWZ',
      number: '0123456789',
      super: '!@#$%&*()_-+=§{}][;:,.<>?/|'
    }
  }

  CallError(message) {
    throw new Error(message)
  }

  ValidateArguments(funcName, values) {
    switch (funcName) {
      case 'GetNumeric':
        const [min, max] = values
        return (Types(min).IsNumber() && Types(max).IsNumber())
      case 'GetString':
        const [length, options] = values
        return (Types(length).IsNumber() && Types(options).IsObject())
    }
  }

  GetNumeric(min, max) {
    if (!this.ValidateArguments('GetNumeric', [min, max]))
      this.CallError('GetNumeric invalid parameters')

    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  GetString(length) {
    const keys = Object.keys(this.characters)
    let random = "";

    for (let x = 0; random.length < length; x++) {
      let key = keys[this.GetNumeric(0, keys.length - 1)];
      const characters = this.characters[key];
      random += characters[this.GetNumeric(0, characters.length - 1)]
    }

    return random;
  }
}

module.exports = Random