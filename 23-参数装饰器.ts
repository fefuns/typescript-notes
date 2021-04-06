/**
 * 参数的装饰器也是没有 descriptor 参数的，但是它有一个独有的paramIndex参数：用来表示装饰的是第几个参数
 * @param target 同样对应的是类的proptoType, Test5 {getInfo: [Function]}
 * @param key  被装饰的参数在哪个方法中  'getInfo'
 * @param paramIndex: 被装饰的第几个参数  0
 */

function paramDecorator(target: any, key: string, paramIndex: number): any {
  console.log(target, key, paramIndex);
}
class Test5 {
  getInfo(@paramDecorator name: string, age: number) {
    console.log(name, age);
  }
}
const test51 = new Test5();
test51.getInfo('fefuns', 18);
