/**
 * 普通方法：
 * target对应的是类的prototype Test1 {getName: [Function]} 'getName'
 * key对应的是被装饰的方法的名字  getName
 * 静态方法：
 * target 对应的是类的构造函数 {[Function: Test] getName: {[Function]}} 'getName'
 * @param target
 * @param key
 */

function getNameDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  // console.log(target, key);
  // descriptor.writable = false;  如果设置了这个属性为false，则下面test4.getName就不可以被重写了，会报错
  descriptor.value = function () {
    return 'decorator';
  }; // 如果设置了这个属性，并且下面没有重写test4.getName的方法的话，test4.getName() 将会打印 decorator
}
class Test1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator
  getName() {
    return this.name;
  }
}
const test4 = new Test('fefuns');
test4.getName = () => {
  return '123';
};
console.log(test4.getName()); //=> 打印 '123'
