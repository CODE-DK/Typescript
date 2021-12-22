"use strict";
const rect = {
    id: "My first interface",
    size: {
        width: 20,
        height: 30,
    },
    color: "#FFF", //This field is optional
};
//In this example we cast object to Rect
const rect3 = {};
const childRectObj = {
    id: "My first interface",
    size: {
        width: 20,
        height: 30,
    },
    getArea: function () {
        return this.size.width * this.size.height;
    },
};
class Clock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "5px",
};
