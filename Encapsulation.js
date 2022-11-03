class Human {
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }
    
    // ini adalah public instance method
    introduce() {
      console.log(`Hi, my name is ${this.name}`);
    }
    
    // ini adalah  public static method
    static isEating(food) {
      let foods = ["plant", "animal"];
      return foods.includes(food.toLowerCase());
    }
    }
    
    // Membuat object dengan class Human
    let mj = new Human("Michael Jackson", "Isekai");
    
    // output: Hi, my name is Michael Jackson
    mj.introduce();
    
    // output: true
    console.log(Human.isEating("Plant"));
    
    // output: false
    console.log(Human.isEating("Human"));

    class Human {
        constructor(name, address) {
          this.name = name;
          this.address = address;
        }
        
        // ini adalah private instance method
        #doGossip() {
          console.log(`My address will become viral ${this.address}`);
        }
        
        talk() {
          this.#doGossip();
        }
        
        // ini adalah private instance property
        static #isHidingArea = true;
        }
        
        let mj = new Human("Michael Jackson", "Isekai");
        
        // bisa berjalan, tidak menyebabkan error
        mj.talk();
        
        try {
         // tidak berjalan, menyebabkan error
         mj.#doGossip();
          // tidak berjalan, menyebabkan error
         Human.#isHidingArea;
        } catch (err) {
         console.log(err);
        }
        