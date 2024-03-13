fetch("data.json")
.then(response=>response.json())
.then(Audio=>loadAudio(Audio));

function loadAudio(Audio){
    var audioImage1 = document.getElementById("video1");
    var audioImage2 = document.getElementById("video2");
    var audioImage3 = document.getElementById("video3");

    var audioTitle1 = document.getElementById("video1title");
    var audioTitle2 = document.getElementById("video2title");
    var audioTitle3 = document.getElementById("video3title");

    var audioText1 = document.getElementById("video1text");
    var audioText2 = document.getElementById("video2text");
    var audioText3 = document.getElementById("video3text");



    for(var i=0; i<Audio.video.length;i++){
        let title = Audio.video[i].title;
        let text = Audio.video[i].text;
        let link = Audio.video[i].link;
        let image = Audio.video[i].image;

        let imageforaudio = document.createElement("div");
        imageforaudio.innerHTML = `<img src = ${image} style ="width: 50 px; height :400px; object-fit:cover;"class = "card-img-top" alt="Audio img"></img>`;

        let audiotitle = document.createElement("p");
        audiotitle.innerHTML = `<p class="card-text" style = "color:purple; text-align:center;"> <strong>${title}</strong></p>`;

        let audiotext =document.createElement("p");
        audiotext.innerHTML = `<p class="card-text" style = "font-family:arial;"> <a href=${link}>Video</a><br>${text}</p>`;




        if(Audio.video[i].title === "Javascript for Beginners"){
                audioImage1.appendChild(imageforaudio);
                audioTitle1.appendChild(audiotitle);
                audioText1.appendChild(audiotext);
        }
        else if(Audio.video[i].title === "HTML for Beginners"){
                audioImage2.appendChild(imageforaudio);
                audioTitle2.appendChild(audiotitle);
                audioText2.appendChild(audiotext);
        }
        else if(Audio.video[i].title === "JSON for Beginners"){
                audioImage3.appendChild(imageforaudio);
                audioTitle3.appendChild(audiotitle);
                audioText3.appendChild(audiotext);
        }
    }
}