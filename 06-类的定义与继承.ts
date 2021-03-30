/**
 * 1. 定义一个类，类里面有name属性和getName方法
 */
class Person {
  name = 'fefuns';
  getName() {
    return this.name;
  }
}
const person1 = new Person();
console.log(person1.getName());
/**
 * 2. 定义一个Teacher类，它继承自Person。
 */
class Teacher extends Person {
  getTeacherName() {
    return 'hezhi';
  }
  getName() {
    return 'lee'; // 3. 类的重写，下面teacher1.getName就会打印lee
  }
}
const teacher1 = new Teacher();
console.log(teacher1.getName());
console.log(teacher1.getTeacherName());
/**
 * 4. super 可以理解成父类。
 * 紧接3，当子类重写了父类的方法的时候，可以利用super调用父类的属性及方法
 */
class Student extends Person {
  getName() {
    return super.getName() + 'lee'; // 此时返回值就为 fefunslee
  }
}
