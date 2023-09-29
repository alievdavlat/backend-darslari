
// Type Anatasiya 

let username: string = 'ehsmat'

let password : number = 1

let ismarried: boolean = true

let obj : object = {}

let nimadir : any = {} || 1 || 's' || false

let nev : never 

let unk: unknown  = []

let v:void  = undefined 

/// arayga type annatasiya  va unoin array type 

let arr2: number[]  = []

let arr3 : (string | number)[] = []

let arr : Array<string | number> = []

let arr4 : number[] | string[] | boolean[] = []


// union  type 

const variable : string | number  = ''

// tuples 


// tuplesga  qiymat berlshi shart  
const arrayVar : [ string, number , boolean] = ['a', 1, true]



// functionlar bilan ishlash



function fn ( x : number , y: number ) : number {
 return x + y 
}

console.log(fn(3 , 2));

// Objectlar bilan ishlash --> interface & type 


interface Iobj  {
  username: String,
  password: String,
  phone?:number
}

// agar interface  key lariga ? belgi berilsa optional boladi bolshi yam mumkun bomasligiyam majburiymas 

const obj1: Iobj = {
username: 'aliev',
password: 'aliev2002',
}


const arr5:Array<Iobj>  = [
  {
    username:'davlat',
    password:'aliev2002'
  }
]


// Generics 
type mytype = string | number

function fn<T>(arg:T): T {
 return arg
}

console.log(fn<string>('ok'));
console.log(fn<mytype>('ok'));


Promise<any>

// Enums 

enum gender {
    male = 0,
    female = 1
}

enum status {
    sadmin = 0,
    admin = 1,
    personal= 2
}

