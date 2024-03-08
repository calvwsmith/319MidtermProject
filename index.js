function toggleElementVisabilityById(id){
    let ele = document.getElementById(id);
    if (ele.style.display == "block"){
        ele.style.display = "none";
    }
    else {
        ele.style.display = "block";
    }
}

function toggleElementVisabilityByClass(clas){
    let ele = document.querySelector(clas);
    if (ele.style.display == "block"){
        ele.style.display = "none";
    }
    else {
        ele.style.display = "block";
    }
}
function InsertJsonElementsById(id){
    
}