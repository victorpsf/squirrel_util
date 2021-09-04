const verify = function (value) {
  const values = {
    array: [],
    numeric: 0,
    string: '',
    date: new Date(),
    bool: false,
    buffer: Buffer.from(['a', 'f', '5'])
  }

  typeof values == ''

  return {
    /**
     * Verifica o tipo do valor
     * 
     * @returns string
     */
    GetType() {
      return typeof value;
    },

    /**
     * Verifica se o valor é nulo ou indefinido
     * 
     * @returns boolean
     */
    IsEmpty() {
      return ((value === null) || (value === undefined));
    },

    /**
     * Verifica se o valor é string
     * 
     * @returns boolean
     */
    IsString() {
      return (!(this.IsEmpty()) && this.GetType() === "string" && value.constructor === values.string.constructor)
    },

    /**
     * Verifica se o valor é number
     * 
     * @returns boolean
     */
    IsNumber() {
      return (!(this.IsEmpty()) && !!(["number", "bigint"].find(a => a === this.GetType())) && value.constructor === values.numeric.constructor)
    },

    /**
     * Verifica se o valor é boolean
     * 
     * @returns boolean
     */
    IsBoolean() {
      return (!(this.IsEmpty()) && this.GetType() === "boolean" && value.constructor === values.bool.constructor)
    },

    /**
     * Verifica se o valor é object
     * 
     * @returns boolean
     */
    IsObject() {
      return (!(this.IsEmpty()) && this.GetType() === "object" && value.constructor === values.constructor)
    },

    /**
     * Verifica se o valor é array
     * 
     * @returns boolean
     */
    IsArray() {
      return (!(this.IsEmpty()) && this.GetType() === "object" && value.constructor === values.array.constructor)
    },

    /**
     * Verifica se o valor é buffer
     * 
     * @returns boolean
     */
    IsBuffer() {
      return (!(this.IsEmpty()) && this.GetType() === "object" && value.constructor === values.buffer.constructor)
    },
    
    /**
     * Verifica se o valor é date
     * 
     * @returns boolean
     */
    IsDate() {
      return (!(this.IsEmpty()) && this.GetType() === "object" && value.constructor === values.date.constructor)
    },

    /**
     * Verifica se o valor é function
     * 
     * @returns boolean
     */
    IsFunction() {
      return (!(this.IsEmpty()) && this.GetType() === "function")
    }
  }
}

module.exports = verify