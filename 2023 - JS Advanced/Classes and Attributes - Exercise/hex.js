class Hex {
    constructor(value) {
      if (typeof value !== 'number') {
        throw new Error('Invalid input. Value must be a number.');
      }
      this.value = value;
    }
  
    valueOf() {
      return this.value;
    }
  
    toString() {
      return `0x${this.value.toString(16).toUpperCase()}`;
    }
  
    plus(number) {
      let valueToAdd = number instanceof Hex ? number.valueOf() : number;
      return new Hex(this.value + valueToAdd);
    }
  
    minus(number) {
      let valueToSubtract = number instanceof Hex ? number.valueOf() : number;
      return new Hex(this.value - valueToSubtract);
    }
  
    parse(string) {
      if (!/^0x[0-9A-Fa-f]+$/.test(string)) {
        throw new Error('Invalid input. Input must be a hexadecimal string starting with "0x".');
      }
      let decimalValue = parseInt(string, 16);
      return new Hex(decimalValue);
    }
  }
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));