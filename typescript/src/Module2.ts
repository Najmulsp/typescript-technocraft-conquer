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