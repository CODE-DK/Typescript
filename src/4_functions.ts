function add(a: number, b: number): number {
	return a + b;
}

function toUpperCase(str: string): string {
	return str.trim().toUpperCase();
}

//Overloading
interface Position {
	x: number | undefined;
	y: number | undefined;
}

function position(): Position;
function position(a: number): Position;
function position(a: number, b: number): Position;

function position(a?: number, b?: number) {
	if (!a && !b) {
		return { x: undefined, y: undefined };
	}
	if (a && !b) {
		return { x: undefined, y: a };
	}
	return { x: a, y: b };
}
