function showMessage(message) {
  console.log(`Message: ${message}`);
}

const PI = 3.14;

class User {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log('Hello,', this.name)
  }
}

export {showMessage, PI, User}
