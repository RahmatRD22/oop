class Human {
    // menambahkan constructor
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }
   
    // menambahkan static property
    static isLivingOnEarth = true
   
    // menambahkan instance method
    introduce() {
      console.log(`Hi, my name is ${this.name}`);
    }
   }
   
   // output dari static property: true
   console.log(Human.isLivingOnEarth);

   // menambahkan property / instance method
Human.prototype.greet = function(name) {
    console.log(`Hi, ${name}, I'm ${this.name}`);
   }
   
   // menambahkan static method
   Human.destroy = function(thing) {
    console.log(`Human is destroying ${thing}`);
   }
   
   // Membuat object dengan class Human
   let mj = new Human("Michael Jackson", "Isekai");
   
   // output: Human { name: 'Michael Jacksson', address: 'Isekai' }
   console.log(mj);
   
   // mengecek jika object adalah instance dari class
   // output: true
   console.log(mj instanceof Human)
   
   // output: Hi, Donald Trump, I'm Michael Jacksson
   mj.greet("Donald Trump");