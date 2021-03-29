// 基础类型 boolean, number, string, undefined, symbol, void, null
const count: number = 123;
const sName: string = 'hello';

// 对象类型 {}, Class, function, []
const teacher: {
  name: string;
  age: number;
} = {
  name: 'fefuns',
  age: 18,
};
const numbers: number[] = [1, 2, 3];

class Person {}
const deil: Person = new Person();

// 方式1. str:string 表示参数是string类型, :number 表示返回值是number
const getNum1 = (str: string): number => {
  return parseInt(str, 10);
};
// 方式2 (str:string) => number 也同样可以表示该函数参数是string，返回值是number。最后再写真正的函数体 =(str) => {..}
const getNum2: (str: string) => number = (str) => {
  return parseInt(str, 10);
};
// 方式1 还可以利用TS类型推断的特性简写一下，鼠标移到getNum3上，会发现TS根据parseInt的提示自动推断出了该函数的返回值是number类型
const getNum3 = (str: string) => {
  return parseInt(str, 10);
};
// 总结：有些函数的入参类型需要手动写，但是返回值往往可以TS的类型推断自动推断出来，可以不写

const data = new Date(); // => 等同于  const data: Date = new Date(); 也是因为TS类型推断自动推断出这是一个Date类型

/**
 * | 可以让变量在多个类型之间变化
 */
let temp: number | string = 123;
temp = '456';
