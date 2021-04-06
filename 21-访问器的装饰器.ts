/**
 * @param target
 * @param key
 */

function visitDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  // descriptor.writable = false;   如果有这句话，下面的test31.name也同样会报错
}
class Test3 {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  @visitDecorator
  set name(name: string) {
    this._name = name;
  }
}
const test31 = new Test3('fefuns');
test31.name = '123';
console.log(test31.name); // => 打印 '123'
