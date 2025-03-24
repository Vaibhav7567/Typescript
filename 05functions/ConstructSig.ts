type SomeObject = {
    new (s: string): SomeObject;
  };
  function fn(ctor: SomeObject) {
    return new ctor("hello");
  }