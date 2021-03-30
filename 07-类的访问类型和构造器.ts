// private, protected, public 访问类型
class Person {
  // public: 允许在类的内外被调用
  name: string; // 1.等同于 public name:string; 只不过隐藏了。public允许该属性或方法在类的内外被调用
  sayHi() {
    // 同理这里也等同于  public sayHi() {}
    console.log('hi');
  }
  // 2. private 只允许在类内使用
  private getPrivate() {
    console.log('privated');
  }
  // 3. protected 只允许在类内及继承的子类中使用
  protected getProtected() {
    console.log('protected');
  }
}
/**
 * 4. 构造器 contructor
 * Person1在被实例化的时候，有一个方法叫 contructor，它会在被实例化的瞬间自动执行
 */
class Person1 {
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }
  // 简化写法
  constructor(public name: string) {} // 这里的public 不能省略，不然会报错
}
const person1 = new Person1('fefuns');
console.log(person1.name);
// 5.如果父类中有contructor的话，子类也要contructor的时候，就必须在子类中手动写一下super
class Teacher extends Person1 {
  constructor(public age: number) {
    super('必须调用super，不然会报错');
  }
}
const teacher = new Teacher(28);
console.log(teacher.name, teacher.age);
