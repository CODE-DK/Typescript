const arrayOfNumbers: Array<Number> = [1, 1, 2, 3, 5];

function reverce<T>(array: Array<T>): Array<T>{
	return array.reverse();
}

function reverce2<T>(array: T[]): T[]{
	return array.reverse();
}