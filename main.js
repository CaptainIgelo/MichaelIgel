document.addEventListener("DOMContentLoaded", function() {
    calculate_age(new Date(1993, 03, 19));
});

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    var current_age = Math.abs(age_dt.getUTCFullYear() - 1970);

    return document.getElementById('result').innerHTML = current_age;
}
