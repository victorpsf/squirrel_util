declare namespace Verify {
  type Types = 'number' | 'string' | 'bigint' | 'boolean' | 'function' | 'object' | 'symbol' | 'undefined'

  interface TypesInstance {
    /**
     * Verifica o tipo do valor
     * 
     * @returns string
     */
    GetType(): Types;
    /**
     * Verifica se o valor é nulo ou indefinido
     * 
     * @returns boolean
     */
    IsEmpty(): boolean;
    /**
     * Verifica se o valor é string
     * 
     * @returns boolean
     */
    IsString(): boolean;
    /**
     * Verifica se o valor é number
     * 
     * @returns boolean
     */
    IsNumber(): boolean;
    /**
     * Verifica se o valor é boolean
     * 
     * @returns boolean
     */
    IsBoolean(): boolean;
    /**
     * Verifica se o valor é object
     * 
     * @returns boolean
     */
    IsObject(): boolean;
    /**
     * Verifica se o valor é array
     * 
     * @returns boolean
     */
    IsArray(): boolean;
    /**
     * Verifica se o valor é buffer
     * 
     * @returns boolean
     */
    IsBuffer(): boolean;
    /**
     * Verifica se o valor é date
     * 
     * @returns boolean
     */
    IsDate(): boolean;
    /**
     * Verifica se o valor é function
     * 
     * @returns boolean
     */
    IsFunction(): boolean;
  }
}

declare function Verify(value: any): Verify.TypesInstance

export = Verify