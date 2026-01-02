 // Primitive Data Types
 // 7 types: 
 // String, Number, Boolean, null, undefined, Symbol, BigInt

 const isLoggedIn = false;
    const outsideTemp = null;
    const user = undefined;
    const id = Symbol('123');
    const bigNumber = 123456789012345678901234567890n;

 // Reference Data Types (non-primitive)

 // Array, Object, Function


    const colors = ['red', 'green', 'blue'];
    let myobj ={
        name: "halima",
        age : 19
    }

    const myFunction = function() {
        console.log("Hello world");
    }
     console.log(typeof anotherId ); 


     // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

     // stack (primitive), Heap (Non-primitive)
     
     let myYoutubename = "halimakhancom"

     let anothername = myYoutubename
     anothername = "khancode"

     console.log(myYoutubename);
     console.log(anothername);

     let userOne = {
     email : "user@google.com",
     upi : "user@bl"


     }

     let userTwo =  userOne     

     userTwo.email = "halima@google.com"

     console.log (userOne.email);
     console.log(userTwo.email);

     
