// 基础类型 number, undefined, symbol, boolean, void
const count: number = 123;
const sName: string = 'hello';

// 对象类型
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

// 函数 () => number 表示该函数是一个返回数字的函数
const getTotal: () => number = () => {
  return 123;
};
