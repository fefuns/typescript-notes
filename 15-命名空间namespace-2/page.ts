///<reference path='./components.ts'/>

namespace Home {
  export class Page1 {
    // 这里用Page1 是为了避免和 14 中的Page冲突
    constructor() {
      new Component.Header();
      new Component.Content();
      new Component.Footer();
    }
    // 还可以使用子命名空间的接口
    user: Component.User = {
      name: 'fefuns',
    };
  }
}
new Home.Page1();

/**
 * 通常情况下，可能会把 Header，Content,Footer这样的组件单独放在一个components.ts文件或者多个文件中
 * 但是 Home中的Page引用了 Components的Header、Content、Footer方法，并不能直观的体现出 page.ts 和components.ts之间的关联。
 * 当需要表现 Home命名空间依赖于 Components命名空间的时候，就需要在上面写上命名空间的依赖声明
 * ///<reference path='./components.ts'/>
 */
