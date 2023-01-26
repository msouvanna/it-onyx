$( "#CircleForm" ).validate({

});

function showAns() {

    if ($("#CircleForm").valid()) {
              
        //clear out old answers in case clearForm() didn't...
        document.getElementById("diameter").innerHTML = "";
        document.getElementById("circumference").innerHTML = "";
        document.getElementById("area").innerHTML = "";


        var radius; // string representation of radius
        var radiusfp; // floating point value of radiusfp

        var diameter; //fp diameter
        var circumference; //fp circumference
        var area; //fp area

        // read in the legs as a string
        radius = document.getElementById("radius").value;

        // Convert numbers from strings to Floating Point
        radiusfp = parseFloat(radius); 

        // Call different calcFunctions using radiusfp
        diameter = calcDiameter(radiusfp);
        circumference = calcCircum(radiusfp);
        area = calcArea(radiusfp);

        // display the answers
        document.getElementById("diameter").innerHTML = diameter.toString();
        document.getElementById("circumference").innerHTML = circumference.toString();
        document.getElementById("area").innerHTML = area.toString();
   }
}

function calcDiameter(r){
// Diameter = 2 times Radius
    return (2 * r);
}

function calcCircum(r){
// Circumference = 2 times pi times Radius
    return (2 * r * Math.PI);
}

function calcArea(r){
// Area = pi times Radius times Radius
    return (r * r * Math.PI);
}

function clearForm(){
    //clear the txtbox and labels when btnClear is clicked
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}