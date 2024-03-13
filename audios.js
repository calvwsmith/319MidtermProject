fetch("data.json")
.then(response=>response.json())
.then(Audio=>loadAudio(Audio));

function loadAudio(Audio){
    var audioImage1 = document.getElementById("audio1");
    var audioImage2 = document.getElementById("audio2");
    var audioImage3 = document.getElementById("audio3");

    var audioTitle1 = document.getElementById("audio1title");
    var audioTitle2 = document.getElementById("audio2title");
    var audioTitle3 = document.getElementById("audio3title");

    var audioText1 = document.getElementById("audio1text");
    var audioText2 = document.getElementById("audio2text");
    var audioText3 = document.getElementById("audio3text");



    for(var i=0; i<Audio.audio.length;i++){
        let title = Audio.audio[i].title;
        let text = Audio.audio[i].text;
        let link = Audio.audio[i].link;
        let image = Audio.audio[i].image;

        let imageforaudio = document.createElement("div");
        imageforaudio.innerHTML = `<img src = ${image} style ="width: 50 px; height :400px; object-fit:cover;"class = "card-img-top" alt="Audio img"></img>`;

        let audiotitle = document.createElement("p");
        audiotitle.innerHTML = `<p class="card-text" style = "color:pink; text-align:center;"> <strong>${title}</strong></p>`;

        let audiotext =document.createElement("p");
        audiotext.innerHTML = `<p class="card-text"> <a href=${link}>Sound</a><br>${text}</p>`;




        if(Audio.audio[i].title === "Phone Ringing"){
                audioImage1.appendChild(imageforaudio);
                audioTitle1.appendChild(audiotitle);
                audioText1.appendChild(audiotext);
        }
        else if(Audio.audio[i].title === "Trumpet"){
                audioImage2.appendChild(imageforaudio);
                audioTitle2.appendChild(audiotitle);
                audioText2.appendChild(audiotext);
        }
        else if(Audio.audio[i].title === "Birds Chirping"){
                audioImage3.appendChild(imageforaudio);
                audioTitle3.appendChild(audiotitle);
                audioText3.appendChild(audiotext);
        }
    }
}