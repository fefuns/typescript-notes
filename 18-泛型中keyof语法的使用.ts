// interface Person {
//   name: string;
//   age: number;
//   gender: string;
// }
// class Teacher {
//   constructor(private info: Person) {}
//   getInfo(key: string) {
//     return this.info[key];
//   }
// }
// const teacher = new Teacher({
//   name: 'fefuns',
//   age: 18,
//   gender: 'male',
// });
// const test = teacher.getInfo('name');
// 此时test 是any，应该如何得到更精确的 test 的类型, 而且他还可能传入的并不是name, age, gender, 而是 a,b,c这种接口中不存在的属性，编辑器却不能识别出这个错误
interface Person {
  name: string;
  age: number;
  gender: string;
}

class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}
const teacher = new Teacher({
  name: 'fefuns',
  age: 18,
  gender: 'male',
});
const test = teacher.getInfo('name');
// 此时编辑器移到test上面，编辑器就会根据传入的name还是age，而返回不同的类型，比如age:number,name:string。。而且现在再传入接口中不存在属性的话，编辑器就可以识别出错误了。
