import data from './data.json';

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

document.getElementById("audio1").innerHTML = data.audio1.link;
document.getElementById("audio1").innerHTML = data.audio1.text;
document.getElementById("audio1").innerHTML = data.audio1.title;
document.getElementById("audio2").innerHTML = data.audio2.link;
document.getElementById("audio2").innerHTML = data.audio2.text;
document.getElementById("audio2").innerHTML = data.audio2.title;
document.getElementById("audio3").innerHTML = data.audio3.link
document.getElementById("audio3").innerHTML = data.audio3.text;
document.getElementById("audio3").innerHTML = data.audio3.title;