

          // ////////// Basic data type //////////////  primitive data:


//   string type
const text: string = "my text msg";

// number
let roll: number = 234;

// boolean
let isAdmin: boolean = true;

// undefined
let X: undefined = undefined;

// null
let y: null = null;

// any type  ---> not recommended


  // ////////// Basic data type //////////////  non -  primitive data:

// Array    ---> avabe string , number ba boolean er array thakte pare
const data: string[] = ["d", "t"];

//  tuple- Array => ekta array er moddhe value gulo kon order e tahkbe amra segulo difine kore dite pari.

let coordinates : [number, number] = [2, 6];

let collection : [number, string, boolean, number] = [2, "name", true, 6];



// object
const user: {name: string, age: number, passion: string} = {
     name: "h",
     age: 4,
     passion: "b"
}



// //  // Reference Type --> Object, optional type, literal types   //   //   //

  const user1: {
    readonly company: "Programming Hero"; // type(own create type) --> literal types
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Programming Hero",
    firstName: "Mezbaul",
    lastName: "Abedin",
    isMarried: true,
  };


{
  ///////////////////////////////////// function  //////////////////////////////////////
  
  
// Normal Function
  function add(num1: number, num2: number = 10): number {
    return num1 + num2;
  }

  add(2, 4);


// Arrow Function
  const addArrow = (num1: number, num2: number): number => num1 + num2;

//  if we run map in an array how we will defined type
  const arr: number[] = [1, 4, 10];

  const newArray: number[] = arr.map((elem: number): number => elem * elem);




  // object --> function --> method
  const poorUser = {
    name: "Mezba",
    balance: 0,
    addBalance(balance: number): string {
      return `My new balance is : ${this.balance + balance}`;
    },
  };


}

///////////  spread operator,  rest oprator,   destructuring   //////////////////
{
     

   
     //learn spread operator (Spread Operator ব্যবহার করা হয় একটি অ্যারে বা অবজেক্টের মধ্যে সমস্ত উপাদানকে আলাদা করতে।) মোট কথা Spread Operator: উপাদানকে আলাদা করে কপি করে।
   
     const bros1: string[] = ["Mir", "Firoz", "Mizan"];
     const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];
     bros1.push(...bros2);
   
     const mentors1 = {
       typescript: "Mezba",
       redux: "Mir",
       dbms: "Mizan",
     };
   
     const mentors2 = {
       prisma: "Firoz",
       next: "Tanmoy",
       cloud: "Nahid",
     };
   
     const mentorList = {
       ...mentors1,
       ...mentors2,
     };
   
     // learn rest operator(Rest Operator ব্যবহার করা হয় ফাংশনের আর্গুমেন্ট অথবা অ্যারের মধ্যে একাধিক মানকে একত্রিত করতে।) মোট কথা Rest Operator: আর্গুমেন্টকে একত্রিত করে।

     // অবজেক্টে Rest Operator এর জাভাস্ক্রিপট এ উদাহরণ ঃ
     const student = {
          name: "Rahim",
          age: 18,
          grade: "A",
        };
        
        const { grade, ...rest } = student;
        console.log(grade); // আউটপুট: 'A'
        console.log(rest); // আউটপুট: { name: 'Rahim', age: 18 }

 // ফাংশনে Rest Operator এর টাইপশক্রিপ্ট এ উদাহরণ ঃ
   
     const greetFriends = (...friends: string[]) => {
       // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
   
       friends.forEach((friend: string) => console.log(`Hi ${friend}`));
     };
   
     greetFriends("Abul", "kabul", "babul", "ubul", "labul");



// destructuring


const user = {
     id: 345,
     name: {
       firstName: "Mezbaul",
       middleName: "Abedin",
       lastName: "Persian",
     },
     contactNo: "0170000000",
     address: "Uganda",
   };
   
   const {
     contactNo,
     name: { middleName: midName },
   } = user;  // অবজেক্ট এ ডিস্ট্রাকচারিং করার সময় টাইপ ডিক্লেয়ার  করা  সম্ভব না কারণ সে  তখন টাইপ এলিয়াস ধরে নিবে। এখানে মিডনেম এর যায়গায় স্ট্রিং বা নাম্বার দেয়া যাবে না।
   
   // array destructuring
   
   const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
   
   const [, , bestFriend, ...test] = myFriends;   // এখানে টেস্ট নামে একটা ভারিএবলে এ সে বাকি গুলোকে দিয়ে দিবে, এটাই রেস্ট অপারেটর।

   }

//////////////////////////   Type Alias    ///////////////////////////////////
   {


     
    type UserName = string;   // type alias with string
    type IsAdmin = boolean;   // type alias with boolean

    const userName: UserName = "Persian";
    const isAdmin: IsAdmin = true;


  // type alias in object

    type Student = {
      name: string;
      age: number;
      contactNo?: string;
      gender: string;
      address: string;
    };
  
    const student1: Student = {
      name: "Mezba",
      age: 50,
      gender: "male",
      contactNo: "0170000000",
      address: "ctg",
    };
  
    const student2: Student = {
      name: "Mir",
      age: 40,
      gender: "male",
      address: "dhk",
    };
  
    const student3: Student = {
      name: "Mir",
      age: 40,
      gender: "male",
      address: "dhk",
    };
  

  // type alias in array
    type Add = (num1: number, num2: number) => number;
  
    const add: Add = (num1, num2) => num1 + num2;
  
    
  }
///////////////////  union types |   intersection type &     //////////////////
  {
    //
    // 
  
    type FrontendDeveloper1 = 'fakibazDeveloper' | 'juniorDeveloper'
    type FullstackDeveloper1 = 'frontendDeveloper' | 'expertDeveloper'
  
     type Developer = FrontendDeveloper1 | FullstackDeveloper1
  
    const newDeveloper : FrontendDeveloper1 = 'juniorDeveloper'
  
    type User ={
      name: string;
      email?: string;
      gender:"male"| "female";
      bloodGroup:"O+"|"A+"|"AB+"
    }
  
    const user: User ={
      name:'persian',
      gender:'male',
      bloodGroup:'O+'
    }
  




    type FrontendDeveloper2 = {
      skills: string[];
      designation1: "Frontend Developer";
    };
  
    type BackendDeveloper = {
      skills: string[];
      designation2: "Backend Developer";
    };
  
    type FullstackDeveloper2 = FrontendDeveloper2 & BackendDeveloper;
  
    const fullstackDeveloper: FullstackDeveloper2 = {
      skills: ["HTML", "CSS", "EXPRESS"],
      designation1: "Frontend Developer",
      designation2: "Backend Developer",
    };
  

  }

 //// ternary operator || optional chaining || nullish coalescing operator  /////
  {
    
   // ternary operator
     const age: number = 18;
   
     if (age >= 18) {
       console.log("adult");
     } else {
       console.log("not adult");
     }
   
     const isAdult = age >= 18 ? "adult" : "not adult";
     // console.log({ isAdult });
   
     //nullish coalescing operator
     // null / undefined ---> if any need to make decision depending upon null and undefined then use this nullish coalescing , that means ??
   
     const isAuthenticated = "";
   
     const result1 = isAuthenticated ?? "Guest";
     const result2 = isAuthenticated ? isAuthenticated : "Guest";
     console.log({ result1 }, { result2 });



   //  optional chaining
     type User = {
       name: string;
       address: {
         city: string;
         road: string;
         presentaddress: string;
         permanentAddress?: string;   // optional chaining
       };
     };
   
     const user: User = {
       name: "Persian",
       address: {
         city: "ctg",
         road: "Awesome Road",
         presentaddress: "ctg town",
       },
     };
   
     const permanentAddress =
       user?.address?.permanentAddress ?? "No Permanent Address";  // optional chaining and nullish coalescing
     //console.log({ permanentAddress });
     
   }
/////////////// nullable types , unknown types , never type   //////////////
   {
    
  // nullable type : if null will send then it will receive and give all the value.
    const searchName = (value: string | null) => {
      if (value) {
        console.log("Searching");
      } else {
        console.log("There is nothing to search");
      }
    };
    searchName(null);
  
    // unknown  typeof : if the value is unknown to us in run time we will get value then we can do that the value in unknown so if you get this type then do this.
  
    const getSpeedInMeterPerSecond = (value: unknown) => {
      if (typeof value === "number") {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
      } else if (typeof value === "string") {
        const [result, unit] = value.split(" ");
        const convertedSpeed = (parseFloat(result) * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
      } else {
        console.log("wrong input");
      }
    };
    getSpeedInMeterPerSecond(null);
  
    //never : if we are sure that it will never return any type of value, then we can use never type , see in below example it will always throw an error.
  
    const throwError = (msg: string): never => {
      throw new Error(msg);
    };
  
    throwError("mushkil se error hogaya");
  
    //
  }





