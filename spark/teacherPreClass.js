function overtime() {
	$("#overtime").click(function() {
		$("#classTable").addClass("show");
		console.log("click");
		$("#overtimeRecord").removeClass("show");
	})
}
function preclass() {
	$("#PreClass").click(function() {
		$("#overtimeRecord").addClass("show");
		$("#classTable").removeClass("show");
	})
}
overtime();
preclass();