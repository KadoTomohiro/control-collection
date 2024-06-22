// 構造体的なオブジェクトで取り回したい（通信とか）ときとリッチなクラスでほしい時ロジックとあるから分けてみたけどなんかモヤモヤしてる
// プリミティブとラッパーオブジェクトの関係的な。

export interface DecimalFormat {
  integer: number;
  fraction:number;
}

/**
 * 実数クラス
 */
export class Decimal implements DecimalFormat {

  static equal(dec1: DecimalFormat, dec2: DecimalFormat): boolean {
    return dec1.integer === dec2.integer && dec1.fraction === dec2.fraction;
  }

  readonly integer: number;
  readonly fraction:number;
  constructor(initial: DecimalFormat) {
    this.integer = initial.integer;
    this.fraction = initial.fraction;
  }

  toNumber(): number {
    return Number.parseFloat(this.toString())
  }

  toString() {
    return `${this.integer}.${this.fraction}`;
  }

  toJSON() {
    const {integer, fraction} = this;
    return {integer, fraction};
  }
}

