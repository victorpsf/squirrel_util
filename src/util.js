const Mime = require('./mime')
const Types = require('./types')

module.exports = class Util {
  constructor() {}

  static getClassMethods(classInstance) {
    return (new this()).getClassMethods(classInstance)
  }

  getClassMethods(classInstance) {
    let data = {
      props: [],
      isInstance: false
    }
    let copyClass = classInstance

    do {
      data.props = data.props.concat(Object.getOwnPropertyNames(copyClass))
    } while (copyClass = Object.getPrototypeOf(copyClass))

    data.props = data.props.sort().filter(function (element, index, array) {
      return (array.indexOf(element) === index)
    })

    try {
      data.props = data.props.filter(function (element, index, array) {
        return typeof classInstance[element] === 'function'
      })
    } catch (error) { return data }

    data.isInstance = true
    return data
  }

  static random(args) {
    return (new this()).random(args)
  }

  random(args = {  }) {
    let { type, min, max, length, props } = args || {}

    const randomString = function (length, useNumber = false, useSuper = false) {
      let characters = {
        latters: 'abcdefghijklmnopqrstuvxywz',
        number: '0123456789',
        super: '!@#$%&*()_-+=§{}][;:,.<>?/|'
      }
      let possibilities = characters.latters,
          rand = ''
          count = 0
    
      possibilities += (useNumber) ? characters.number: ''
      possibilities += (useSuper) ? characters.super: ''
    
      while(count < length) {
        let index = randomNumber(0, possibilities.length - 1)
        rand += possibilities[index]
        count++
      }
    
      return rand
    }
    
    const randomNumber = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    switch (type) {
      case 'string':
        length = parseInt(length) || 0
        props = props || {}
        return randomString(length, props.number || false, props.super || false)
      case 'number':
        min = parseInt(min) || 0
        max = parseInt(max) || min + 10
        return randomNumber(min, max)
      default:
        return null
    }
  }

  static info(value) {
    return (new this()).info(value)
  }

  info(value) {
    let type = Types(value)

    let { mime } = { mime: Mime(type.type()) }

    type.mime = mime
    return type
  }

  static in_array(array, value) {
    return (new Util()).in_array(array, value)
  }

  static keyJSON(json, key) {
    return (new Util()).keyJSON(json, key)
  }

  static valueJSON(json, value) {
    return (new Util()).valueJSON(json, value)
  }

  in_array(array = [], value) {
    return array.indexOf(value) >= 0
  }

  keyJSON(json = {}, key) {
    return Object.keys(json).indexOf(key) >= 0
  }

  valueJSON(json = {}, value) {
    let filter = Object.values(json).filter(function (val, index, array) {
      return val == value
    });

    return filter.length > 0
  }
}