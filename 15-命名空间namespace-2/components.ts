namespace Component {
  export class Header {
    constructor() {
      const elem = document.createElement('div');
      elem.innerHTML = '头部';
      document.body.appendChild(elem);
    }
  }
  export class Content {
    constructor() {
      const elem = document.createElement('div');
      elem.innerHTML = '主体';
      document.body.appendChild(elem);
    }
  }
  export class Footer {
    constructor() {
      const elem = document.createElement('div');
      elem.innerHTML = '底部';
      document.body.appendChild(elem);
    }
  }
  // 子命名空间还可以往外暴露接口
  export interface User {
    name: string;
  }
}
