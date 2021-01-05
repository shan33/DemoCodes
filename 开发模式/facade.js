// A模块
function ModuelA() {
  this.print = () => console.log('module A');
}

// B模块
function ModuleB() {
  this.print = () => console.log('module B');
}

// facade实现类
function FacadeConfig() {
  const moduleA = new ModuelA();
  const moduleB = new ModuleB();

  this.print = () => {
    moduleA.print();
    moduleB.print();
  }
}

// facade管理
const facadeManager = {
  facadeConfig: null,

  getInstance: () => {
    if (!this.facadeConfig) {
      this.facadeConfig = new FacadeConfig();
    }
    return this.facadeConfig;
  }
}