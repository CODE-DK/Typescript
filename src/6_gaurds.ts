function strip(x: string | number) {
	if (typeof x === "number") {
		return x.toFixed(2);
	}
	return x.trim();
}

class NResponse {
	header: string = "response header";
	result: string = "response result";
}
class NError {
	header: string = "error header";
	code: string = "error code";
	message: string = "error result";
}
function getInfo(res: NResponse | NError) {
	if (res instanceof NResponse) {
		return { info: res.header + res.result };
	}
	return { info: res.header + res.message + res.code };
}

//=============================================
type AlertType = "success" | "danger" | "warning";
function setAlertType(alertType: AlertType) {
	//.... do something, not so important for this example
}
setAlertType("success"); //OK
setAlertType("warning"); //OK
// setAlertType('default') compile Error! default is not available value
