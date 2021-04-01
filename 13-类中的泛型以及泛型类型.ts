// class DataManager {
//   constructor(private data: string[]) {}
//   getItem(index: number): string {
//     return this.data[index];
//   }
// }
// const data = new DataManager(['1']);
// data.getItem(0);
/**
 * 1.假定有上面的一个类，如果现在要求data里面不仅可以存string类型的数组，还可以存number类型的数组
 * 可能首先想到的是 TS的联合类型 | 来实现
 */
// class DataManager {
//   constructor(private data: string[] | number[]) {}
//   getItem(index: number): string | number {
//     return this.data[index];
//   }
// }
// const data = new DataManager(['1']);
// data.getItem(0);
/**
 * 2.以上代码能满足需求, 那如果data里面不仅仅是string类型，number类型，还可以存其他类型呢？那么联合类型就将变得比较麻烦，就需要用到类的泛型。
 */
// class DataManager<T> {
//   constructor(private data: T[]) {}
//   getItem(index: number): T {
//     return this.data[index];
//   }
// }
// const data1 = new DataManager<number>([1]);
// const data2 = new DataManager<string>(['1']);
// data1.getItem(0);
// data2.getItem(0);
/**
 * 3.以上就是类中的最基础的泛型，现在再增加一个需求，如果希望T中都有一个name属性，
 * 即 return this.data[index] => return this.data[index].name, 又该如何修改代码
 */
// interface Item {
//   name: string;
// }
// class DataManager<T extends Item> {
//   constructor(private data: T[]) {}
//   getItem(index: number): string {
//     // 注意这里:string不再是 :T了，为什么？
//     return this.data[index].name;
//   }
// }
// const data = new DataManager([{ name: 'fefuns' }]);
/**
 * 4.以上就是通过对泛型的继承来实现的需求。
 * 现在回到第3步，如果T只能是number和string，又该如何修改？
 */
class DataManager<T extends number | string> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}
