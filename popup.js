function copy(){

    //Get Input Element
    document.getElementById("text").select();

    //Copy Content
    document.execCommand("Copy", false, null);
}

//Add Event Listeners to Button Click
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("copy").onclick = copy;
});