function calculate() {
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* get the operands from the form */
        var operand1 = document.getElementById("Operand1").value;
        var operand2 = document.getElementById("Operand2").value;
        
        /* convert the operands from string to floating point */
        var operand1fp = parseFloat (operand1);
        var operand2fp = parseFloat (operand2);
        
        /* figure out which operator was checked and place the value in operator */
        var operator;
        if (document.getElementById("addOp").checked) {
            operator = document.getElementById("addOp").value;
        }
        if (document.getElementById("subOp").checked) {
            operator = document.getElementById("subOp").value;
        }
        if (document.getElementById("multOp").checked) {
            operator = document.getElementById("multOp").value;
        }
        if (document.getElementById("divOp").checked) {
            operator = document.getElementById("divOp").value;
        }

        var result;

        if (operator == "add") {
            result = (operand1fp + operand2fp);
        } 
        if (operator == "subtract") {
            result = (operand1fp - operand2fp);
        }
        if (operator == "multiply") {
            result = (operand1fp * operand2fp);
        }
        if (operator == "divide") {
            result = (operand1fp / operand2fp);
        }

        document.getElementById("Result").innerHTML = result.toString();
}


}


function clearform() {
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";

    document.getElementById("addOp").checked = false;
    document.getElementById("subOp").checked = false;
    document.getElementById("multOp").checked = false;
    document.getElementById("divOp").checked = false;
    document.getElementById("OperatorError").innerHTML = "";

    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({
 
});