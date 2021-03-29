// 1.定义一个数组，且数组中的每一项是number
const arr1: number[] = [1, 2, 3];
// 2. 如果数组中的项，既可能是number，又可能是string，该如何写
const arr2: (number | string)[] = [1, '2', 3];
// 3.同样可以利用TS的类型推断，可以不写类型
const arr3 = [1, '2', 3];
/**
 * 4.类型别名 type alias
 * 以下代码表示，数组中的每一项都是 User类型
 */
type User = { name: string; age: number };
const arr4: User[] = [{ name: 'fefuns', age: 18 }];

class Teacher {
  name: string;
  age: number;
}
const arr5: Teacher[] = [{ name: 'fefuns', age: 18 }];

// tuple 元组：元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
const tuple1: [string, string, number] = ['fefuns', 'male', 18];
