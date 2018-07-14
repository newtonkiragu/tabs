function openFood(evt, type) {
  // declaring variables
    var i, tabcontent, tablinks;
    // assigning the html tags with class name tabscontent to tabcontent variable
    tabcontent = document.getElementsByClassName("tabcontent");
    // looping through each tab content to toggle the hidden state
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // assigning the html tags with class name tablink to tablinks variable
    tablinks = document.getElementsByClassName("tablinks");
    // looping through each tablink to toggle the active state
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(type).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
