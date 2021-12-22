"use strict";
class Typescript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}
class Car {
    constructor(model, numOfWheels) {
        this.numOfWheels = 4;
        this.model = model;
        if (numOfWheels)
            this.numOfWheels = numOfWheels;
    }
}
