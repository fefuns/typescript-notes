// class Person {
//   constructor(private name: string) {}
// }
// const person = new Person('fefuns');
// console.log(person.name);
/**
 * 1. 这时候会报错，name是Person的私有属性。
 * 如果想让Person里的name能暴露给外部使用，就需要用到getter属性
 */
// class Person {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name;
//   }
// }
// const person = new Person('fefuns');
// console.log(person.name); // 打印fefuns 注意这里getName后面是没有括号的
/**
 * 2. setter也是同理，
 */
class Person {
  constructor(private _name: string) {}
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
}
const person = new Person('fefuns');
console.log(person.name); // 打印fefuns 注意这里getName后面是没有括号的
person.name = 'fefuns haha'; //
console.log(person.name);
/**
 * getter 和 setter的作用就是保护类里面的私有属性。其实，这里设置readonly 也可以达到同样的目的。只不过getter和setter可以更高级，因为他们可以对name“加密”，返回的并不一定是别人原始输入的name
 */
// class Person1 {
//   public readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const person1 = new Person1('fefuns');
// person1.name = 'hezhi'; // 这时候如果想该fefuns 改成 hezhi ，也是会报错的。因为name虽然是一个public类型，但它是只读，不可被修改

// 3.假定有以下代码
// class Demo {

// }
// const demo1 = new Demo();
// const demo2 = new Demo();
// 4.这时候Demo可以被new多次生成多个实例，如果只希望Demo永远只能生成一个实例，该如何修改上面的代码？
/**
 * 4.1
 * 首先要限制外面不允许通过 new Demo()的形式创建实例
 * 那么就需要把constructor定义为一个私有的方法
 */
// class Demo {
//   private constructor() {}
// }
// const demo1 = new Demo(); // 这时候会报错，因为new实例会自动调用类的构造器constructor，但是constructor已经在类中被定义成私有的了
// const demo2 = new Demo();
/**
 * 4.2
 * 接下来思考，new Demo行不通了，那么怎么实现创建唯一的一个实例？
 * static 表示将某个方法直接挂在类上，而不是类的实例上
 */
// class Demo {
//   private constructor() {}
//   static getInstance() {
//     return new Demo();
//   }
// }
// const demo1 = Demo.getInstance();
// const demo2 = Demo.getInstance(); // 但是还是不够完善，因为这样还是可以基于Demo创建两个实例，只是方式不是通过new创建了而已
/**
 * 4.3
 *
 */
class Demo {
  private static instance: Demo; // 在Demo上面继续创建一个私有的静态属性 instance
  private constructor() {}
  static getInstance() {
    if (this.instance) {
      this.instance = new Demo();
    }
    return this.instance;
  }
}
const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance(); // 这时候demo1 和 demo2 就是两个完全相同的了
