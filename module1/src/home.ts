

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


{
     // ////////  spread operator,  rest oprator,   destructuring   //////////////////

   
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















// /////////////////    generic type:  ///////////////////
{
type GenericArray<T> = Array<T>;

// const rollNumbers: number[] = [3, 4, 6];
const rollNumbers: GenericArray<number> = [3, 4, 6];

// const mentors : string[] = ["mr. w", "mr. h", "mr. o"];
const mentors : GenericArray<string> = ["mr. w", "mr. h", "mr. o"];

// const boolArray: boolean[] = [true, false, true];
const boolArray: GenericArray<boolean> = [true, false, true];


const user: GenericArray<{name:string, age:number}> = [
     {
          name: "Mezba",
          age: 29,
     },
     {
          name: "Zhankor",
          age: 49,
     }
]

// ////////// generic tuple

type GenericTuple<X, Y,> = [X, Y];

const manush : GenericTuple<string, number> = ["hablu", 23];

const user2: GenericTuple<number, {name: string, email: string}> = [124, {name: "gamlu", email: "agao@gmail.com"}]
}