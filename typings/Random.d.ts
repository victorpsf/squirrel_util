declare namespace Random {}

declare class Random {
  GetNumeric(min: number, max: number): number;
  GetString(length: number): string;
}

export = Random;