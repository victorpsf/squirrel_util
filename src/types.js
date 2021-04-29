const verify = function (value) {
  const type = typeof value

  return {
    type() {
      return type
    },
    isString() {
      if (this.isNullOrUndefined()) return false
      return type === 'string'
    },
    isNumber() {
      if (this.isNullOrUndefined()) return false
      return type === 'number'
    },
    isBoolean() {
      if (this.isNullOrUndefined()) return false
      return type === 'boolean'
    },
    isObject() {
      if (this.isNullOrUndefined()) return false
      return type === 'object' && value instanceof Object && !this.isArray()
    },
    isArray() {
      if (this.isNullOrUndefined()) return false
      return type === 'object' && value instanceof Array && Array.isArray(value)
    },
    isBuffer() {
      if (this.isNullOrUndefined()) return false
      return type === 'object' && value instanceof Buffer && Buffer.isBuffer(value) 
    },
    empty() {
      switch (type) {
        case 'object':
          if (this.isDate()) return (value.toString() === 'Invalid Date') ? true: false
          else if (this.isArray()) return value.length === 0
          else if (this.isBuffer()) return value.byteLength === 0 || value.length === 0
          else if (this.isObject()) return Object.keys(value).length === 0
          else return true
        case 'number':
          return value === 0
        case 'bigint':
          return value === 0
        case 'string':
          return value.length === 0
        default:
          return true
      }
    },
    isNull() {
      return value === null
    },
    isDate() {
      return type === 'object' && value instanceof Date
    },
    isFunction() {
      return type === 'function'
    },
    isUndefined() {
      return type === 'undefined'
    },
    isNullOrUndefined() {
      return (this.isNull() || this.isUndefined())
    },
    validator(validate) {
      switch (validate) {
        case 'email':
        case 'e-mail':
          if (!this.isString()) return false
          return /^(.+@\w+\.\w{3})$|^(.+@\w+\.\w{3}\.\w{2})$/.test(value)
        case 'date':
          if (this.isDate()) return true
          if (!this.isString()) return false
          return /^(\d{2}[\/-]\d{2}[\/-]\d{4})$/.test(value) || /^(\d{4}[\/-]\d{2}[\/-]\d{2})$/.test(value)
        case 'date-time':
          if (this.isDate()) return true
          if (!this.isString()) return false
          return /^(\d{4}\-\d{2}\-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d+Z)$/.test(value)
        case 'time':
          if (this.isDate()) return true
          if (!this.isString()) return false
          return /^(\d{2}\:\d{2}\:\d{2})$/g.test(value)
        default:
          return false
      }
    }
  }
}

module.exports = verify