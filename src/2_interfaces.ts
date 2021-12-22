interface Rect {
	readonly id: string;
	color?: string;
	size: {
		width: number;
		height: number;
	};
}

const rect: Rect = {
	id: "My first interface",
	size: {
		width: 20,
		height: 30,
	},
	color: "#FFF", //This field is optional
};
//In this example we cast object to Rect
const rect3 = {} as Rect;

//Interface inheritance
interface ChildRect extends Rect {
	getArea: () => number;
}

const childRectObj: ChildRect = {
	id: "My first interface",
	size: {
		width: 20,
		height: 30,
	},
	getArea: function (): number {
		return this.size.width * this.size.height;
	},
};

//Class may implement interfaces
interface IClock {
	time: Date;
	setTime(date: Date): void;
}

class Clock implements IClock {
	time: Date = new Date();

	setTime(date: Date): void {
		this.time = date;
	}
}

interface Styles {
	[key: string]: string;
}

const css: Styles = {
	border: "1px solid black",
	marginTop: "2px",
	borderRadius: "5px",
};
