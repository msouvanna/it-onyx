function getPhotos() {
    "use strict";

    var form = $("#myform");

    form.validate();

    if (form.valid()) {
        var picDate = document.getElementById("picDate").value;
        var apiKey = "6eGExs9Rszx0iE0OJ4cGVXKNgOGkEsr3MFAnD3fw";

        var Rover;
        if (document.getElementById("Curiosity").checked) {
            Rover = document.getElementById("Curiosity").value;
        }
        if (document.getElementById("Opportunity").checked) {
            Rover = document.getElementById("Opportunity").value;
        }
        if (document.getElementById("Spirit").checked) {
            Rover = document.getElementById("Spirit").value;
        }
           
        var myURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + Rover + "/photos?earth_date=" + picDate + "&page=1&api_key=" + apiKey;
        var myMethod = "GET";

        $(document).ready(function() { 
    
        $.ajax({
            method: myMethod,
            url: myURL
        })
                
        .done(function( msg ) {
            var numpictures = msg.photos.length;

            if (numpictures > 0) {
                for (var i = 0; i < 25; i++) {
                    if (i < numpictures) {
                        // Note how we construct the name for image1, image2, etc...this sets the image source
                        document.getElementById("image" + i).src = msg.photos[i].img_src;
                        document.getElementById("anchor" + i).href = msg.photos[i].img_src;
                        //do something to set the tool tip = msg.photos[i].camera.full_name;
                        document.getElementById("image" + i).title = msg.photos[i].camera.full_name;
                        document.getElementById("photosFound").innerHTML = msg.photos.length + " photos found";
                        document.getElementById("tooltipHelp").innerHTML = "Click a photo to display full size";
                    } else {
                        document.getElementById("image" + i).src = "#";
                        document.getElementById("anchor" + i).href = "#";
                        document.getElementById("image" + i).style.display = "none";
                    }
                  }
                }
            })
            .fail(function( msg ) {
                alert("Rover Not Found - Status: " + msg.status);
            });
        });
    }
}

function clearForm(){
    for (var i = 0; i < 25; i++) {
        document.getElementById("Curiosity").checked = false;
        document.getElementById("Opportunity").checked = false;
        document.getElementById("Spirit").checked = false;
        document.getElementById("picDate").value = "";
        document.getElementById("roverError").innerHTML = "";
        document.getElementById("picDateError").innerHTML = "";
        document.getElementById("image" + i).src = "#";
        document.getElementById("anchor" + i).href = "";
        document.getElementById("image" + i).title = "";
        document.getElementById("photosFound").innerHTML = "";
        document.getElementById("tooltipHelp").innerHTML = "";
    }
}

function getCuriosity() {
    document.getElementById("picDate").value = "2012-08-06";
}

function getOpportunity() {
    document.getElementById("picDate").value = "2004-01-26";
}

function getSpirit() {
    document.getElementById("picDate").value = "2004-01-05";
}
