class User {
    constructor(name){
        // invoked the setter 
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if (value.length < 4) {
           console.log("Name is too short");
            return
        } 
        else {
            this._name = value;
        }
    }

}

let user = new User ("John");
console.log(user.name);
// John
// user = new User (""); // Name is too short
user.name = "Harry" // Name is too short

console.log(user.name);
