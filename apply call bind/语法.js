function foo(){
  console.log(this.name)
}

foo.call({name:123}); //123
foo.apply({name:234}); //234
foo.bind({name:123})();//123