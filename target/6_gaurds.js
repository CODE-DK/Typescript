"use strict";
function strip(x) {
    if (typeof x === "number") {
        return x.toFixed(2);
    }
    return x.trim();
}
class NResponse {
    constructor() {
        this.header = "response header";
        this.result = "response result";
    }
}
class NError {
    constructor() {
        this.header = "error header";
        this.code = "error code";
        this.message = "error result";
    }
}
function getInfo(res) {
    if (res instanceof NResponse) {
        return { info: res.header + res.result };
    }
    return { info: res.header + res.message + res.code };
}
function setAlertType(alertType) {
    //.... do something, not so important for this example
}
setAlertType("success"); //OK
setAlertType("warning"); //OK
// setAlertType('default') compile Error! default is not available value
