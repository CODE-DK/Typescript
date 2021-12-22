class Typescript {
	version: string;

	constructor(version: string) {
		this.version = version;
	}

	info(name: string) {
		return `[${name}]: Typescript version is ${this.version}`;
	}
}

class Car {
	readonly model: string;
	readonly numOfWheels: number = 4;

	constructor(model: string, numOfWheels?: number) {
		this.model = model;
		if (numOfWheels) this.numOfWheels = numOfWheels;
	}
}
