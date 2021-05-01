declare namespace Verify {
  type TypeValidate = 'email' | 'e-mail' | 'date' | 'date-time' | 'time'

  interface TypesUtil {
    type(): boolean
    isString(): boolean
    isNumber(): boolean
    isBoolean(): boolean
    isObject(): boolean
    isArray(): boolean
    isBuffer(): boolean
    empty(): boolean
    length(): number
    isNull(): boolean
    isDate(): boolean
    isFunction(): boolean
    isUndefined(): boolean
    isNullOrUndefined(): boolean
    validator(validate: Types.TypeValidate): boolean
    getNumber(): number
    getFloat(): number
  }
}

declare function Verify(value: any): Verify.TypesUtil

export = Verify