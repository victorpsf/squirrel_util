import { MimeTypes } from './mime'
import { TypesUtil } from './types'

declare namespace Util {
  interface GetClassMethodsResult {
    props: string[];
    isInstance: boolean;
  }

  type RandomType = 'string' | 'number'

  interface RandomArgs {
    type: RandomType;
    /**
     * use if type is number
     */
    min?: number;
    /**
     * use if type is number
     * 
     * default min + 10
     */
    max?: number;
    /**
     * use if type is string
     * 
     * default 20
     */
    length?: number;
    /**
     * use if type is string
     * 
     * default false
     */
    props?: {
      /**
       * use numerics in random string
       */
      number?: boolean;
      /**
       * use super characters in random string
       */
      super?: boolean;
    }
  }

  interface InfoResult extends TypesUtil {
    mime: MimeTypes
  }
}

declare class Util {
  static getClassMethods(classInstance: any): Util.GetClassMethodsResult
  getClassMethods(classInstance: any): Util.GetClassMethodsResult

  static random(args: Util.RandomArgs): number| string;
  random(args: Util.RandomArgs): number| string;

  static info(value: any): Util.InfoResult
  info(value: any): Util.InfoResult

  static in_array(array: any[], value: any): boolean;
  static keyJSON(json: object, key: string | number | symbol): boolean;
  static valueJSON(json: object, value: any): boolean;

  in_array(array: any[], value: any): boolean;
  keyJSON(json: object, key: string | number | symbol): boolean;
  valueJSON(json: object, value: any): boolean;
}

export = Util