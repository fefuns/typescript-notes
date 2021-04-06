/**
 * 普通方法：
 * target对应的是类的prototype Test1 {getName: [Function]} 'getName'
 * key对应的是被装饰的方法的名字  getName
 * 静态方法：
 * target 对应的是类的构造函数 {[Function: Test] getName: {[Function]}} 'getName'
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
const test31 = new Test('fefuns');
test31.name = '123';
console.log(test31.name); // => 打印 '123'
