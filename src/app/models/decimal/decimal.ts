export interface DecimalFormat {
  integer: number;
  fraction:number;
}

/**
 * 実数クラス
 */
export class Decimal implements DecimalFormat{

  static equal(dec1: DecimalFormat, dec2: DecimalFormat): boolean {
    return dec1.integer === dec2.integer && dec1.fraction === dec2.fraction;
  }

  readonly integer: number;
  readonly fraction:number;
  constructor(initial: DecimalFormat) {
    if (Decimal.validate(initial)) {
      this.integer = NaN;
      this.fraction = NaN;
    }
    this.integer = initial.integer;
    this.fraction = initial.fraction;
  }

  toNumber(): number {
    return Number.parseFloat(this.toString())
  }

  toString() {
    return `${this.integer}.${this.fraction}`;
  }

  toJSON(): string {
    const {integer, fraction} = this;
    return JSON.stringify({integer, fraction});
  }

  static validate(dec: DecimalFormat): boolean {
    return Number.isInteger(dec.integer) && Number.isInteger(dec.fraction) && dec.fraction >= 0
  }
}
