/**
 * 属性的装饰器是没有 descriptor 参数的，它只能接收两个参数
 * @param target
 * @param key
 */

function nameDecorator(target: any, key: string): any {
  // const descriptor: PropertyDescriptor = {
  //   writable: false,
  // };
  // return descriptor;  // 如果这样写了之后，下面的test41.name = '123' 也同样会报错
  target[key] = '456'; // 如果这样写，并且下面没有 test41.name = '123'的话，会发现打印的值依然是传入的fefuns. 说明 target[key] 修改的并不是实例上的name，而是原型上的name
}
class Test4 {
  @nameDecorator
  name = 'fefuns';
}
const test41 = new Test4();
test41.name = '123';
console.log(test41.name); // => '123'  属性也同样是可以被修改的
