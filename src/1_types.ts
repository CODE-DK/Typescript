//Strings
const str: string = "hello world!";

//Boolean
const isLoading: boolean = true;
const isDeployed: boolean = false;

//Numbers
const num: number = 45;
const num2: number = 5e10;
const num3: number = 4.32;

//Arrays
const arr: number[] = [1, 2, 3, 4, 5];
const arr2: Array<number> = [1, 2, 3, 4, 5];
const arr3: string[] = ["some", "words", "array"];

//Any
let anyValue: any = 42;
anyValue = "John Doe"; // Correct!

//void
function sayMyName(name: string): void {
	console.log(name);
}
sayMyName("John Doe");

//never
function throwError(message: string): never {
	throw new Error(message);
}
function infinityFunc(): never {
	while (true) { 
    //do always something ...
	}
}

//Type
type Login = string;
const login: Login = "login";

type ID = string | number;
const id1: ID = "1";
const id2: ID = 2;

//null & undefined
type NullableString = string | null | undefined;
