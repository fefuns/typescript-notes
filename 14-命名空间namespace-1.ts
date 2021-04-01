// class Header {
//   constructor() {
//     const elem = document.createElement('div');
//     elem.innerHTML = '头部';
//     document.body.appendChild(elem);
//   }
// }
// class Content {
//   constructor() {
//     const elem = document.createElement('div');
//     elem.innerHTML = '主体';
//     document.body.appendChild(elem);
//   }
// }
// class Footer {
//   constructor() {
//     const elem = document.createElement('div');
//     elem.innerHTML = '底部';
//     document.body.appendChild(elem);
//   }
// }
// class Page {
//   constructor() {
//     new Header();
//     new Content();
//     new Footer();
//   }
// }
// new Page();
/**
 * 1. 将以上代码执行一下 yarn start 编译之后发现，全局生成了 Header, Content, Footer, Page四个全局变量。但是其实外界真正想用的只有一个 Page。所以这段代码就需要用到命名空间namespace优化如下
 */
namespace Home {
  class Header {
    constructor() {
      const elem = document.createElement('div');
      elem.innerHTML = '头部';
      document.body.appendChild(elem);
    }
  }
  class Content {
    constructor() {
      const elem = document.createElement('div');
      elem.innerHTML = '主体';
      document.body.appendChild(elem);
    }
  }
  class Footer {
    constructor() {
      const elem = document.createElement('div');
      elem.innerHTML = '底部';
      document.body.appendChild(elem);
    }
  }
  export class Page {
    // 最后这里把真正想抛出给外界调用的方法暴露出去即可
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }
}
new Home.Page(); // 输入Home.的时候，就会发现编辑器只会提示出Page方法了，这就是命名空间的简单用法。
