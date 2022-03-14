class Customer {
    private firstName: string;
    private lastName: string;
  
    constructor(fnm: string, lnm: string) {
      this.firstName = fnm;
      this.lastName = lnm;
    }
  
    public greeter() {
      console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
  }
  
  let ustomer = new Customer("John", "Smith");
  customer.greeter();