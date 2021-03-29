// 1. 首先有两个函数
// const getPersonName = (person: { name: string }) => {
//   return person.name;
// };
// const setPersonName = (person: { name: string }, name: string) => {
//   person.name = name;
// };
// 2. 发现上面这两个函数都有相同的参数 person， 写了两遍person: { name: string }, 如果person对象里的参数很多怎么办？ 因此可以利用接口顶一个一个通用的类型
// interface Person {
//   name: string;
// }
// const getPersonName = (person: { name: string }) => {
//   return person.name;
// };
// const setPersonName = (person: { name: string }, name: string) => {
//   person.name = name;
// };
// 3. 上面的写法又可以通过 类型别名实现一样的功能
// type Person = {
//   name: string;
// };
// const getPersonName = (person: { name: string }) => {
//   return person.name;
// };
// const setPersonName = (person: { name: string }, name: string) => {
//   person.name = name;
// };
/**
 * 4. 那么接口和类型别名究竟有什么区别？
 * type Person = string
 * interface Person {
 *
 * }
 * 区别再于，类型别名既可以直接代表一个基础类型，又可以是一个对象；而接口必须是一个对象。
 * 在TS中，如果能用接口就不要用类型别名
 */

interface Person {
  readonly name: string; // 5. readonly 表示 name 参数是一个只读不可修改的属性
  age?: number; // 6. 这里的 ?: 表示Person1接口中，age是一个可有可无的属性
  [propName: string]: any; // 8.如果想让7不报错，那么就得让 interface Person接口除了有name，和可以有age之外，还可以有其他的属性，只要满足属性名字是string，属性值可以是any值
  // say(): string; // 9.在接口中还可以定义函数属性
}
const getPersonName = (person: { name: string }) => {
  return person.name;
};
const setPersonName = (person: { name: string }, name: string) => {
  person.name = name;
};
const person = {
  name: 'fefuns',
  sex: '男',
};
// 7. 下面这里直接使用对象字面量的形式会报错，而使用person就不会，虽然表面上看着person就是该字面量。这是因为传入字面量时，TS会对该参数进行强校验。而用person变量缓存一下该对象的时候，TS就不会这么严格了。只要求你有Person接口中定义的字段就行了。
// getPersonName({
//   name: 'fefunx',
//   sex: '男',
// });
setPersonName(person, 'hezhi');

// 10.如果一个类需要应用Person属性，则需要用到 implements 语法
class User implements Person {
  name = 'fefuns';
}
// 11.接口还可以互相之间继承
interface Teacher extends Person {
  teach(): string;
}

// 12.多个接口继承
interface Person1 {
  v1: number;
}
interface Person2 {
  v2: number;
}
interface multiChild extends Person1, Person2 {}
const multi: multiChild = { v1: 1, v2: 2 };

// 13.接口还可以直接定义一个函数类型
interface SayHi {
  (word: string): string;
}
const say: SayHi = (word: string) => {
  return word;
};
