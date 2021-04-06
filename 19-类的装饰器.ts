// 类的装饰器
// 装饰器本身是一个函数
// 类装饰器接收的参数是构造函数
// 装饰器通过 @ 符号使用
// 装饰器的执行时机是在 类定义的时候就立即执行了（并不需要等到实例化的时候）

// 1.
// function testDecorator(flag: boolean) {
//   if (flag) {
//     return function (constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log('fefuns');
//       };
//     };
//   } else {
//     return function (constructor: any) {};
//   }
// }

// @testDecorator(true) // 这时候是会报错的，因为装饰器在ECMA标准中目前还是一个实验性特性，需要在tsconfig.json中 experimentalDecorators, emitDecoratorMetadata 设置为 true
// class Test {}
// const test1 = new Test();
// (test1 as any).getName();

// 2.
// function testDecorator<T extends new (...args: any[]) => any>(constructor: T) {
//   return class extends constructor {
//     name = 'lee';
//     getName() {
//       return this.name;
//     }
//   };
// }

// @testDecorator
// class Test {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const test2 = new Test('fefuns');
// console.log(test2); // 打印的是fefuns 还是 lee ？
// console.log((test2 as any).getName()); // 此时如果直接 test2.getName() 是会报错的，应该如何优化？

// 3.
function testDecorator() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      name = 'lee';
      getName() {
        return this.name;
      }
    };
  };
}

const Test = testDecorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);
const test3 = new Test('fefuns');
console.log(test3.getName());
