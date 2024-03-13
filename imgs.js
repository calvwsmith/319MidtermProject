fetch("data.json")
.then(response=>response.json())
.then(Images=>loadImages(Images));

function loadImages(Images){
    var Image1 = document.getElementById("img1");
    var Image2 = document.getElementById("img2");
    var Image3 = document.getElementById("img3");

    var imageTitle1 = document.getElementById("img1title");
    var imageTitle2 = document.getElementById("img2title");
    var imageTitle3 = document.getElementById("img3title");

    var imageText1 = document.getElementById("img1text");
    var imageText2 = document.getElementById("img2text");
    var imageText3 = document.getElementById("img3text");



    for(var i=0; i<Images.image.length;i++){
        let title = Images.image[i].title;
        let text = Images.image[i].text;
        let link = Images.image[i].link;

        let image = document.createElement("div");
        image.innerHTML = `<img src = ${link} style ="width: 50 px; height :400px; object-fit:cover;"class = "card-img-top" alt="Audio img"></img>`;

        let titleofimage = document.createElement("p");
        titleofimage.innerHTML = `<p class="card-text" style = "color:green; text-align:center;"> <strong>${title}</strong></p>`;

        let textforimage =document.createElement("p");
        textforimage.innerHTML = `<p class="card-text"> ${text}</p>`;

        if(Images.image[i].title === "Cow"){
                Image1.appendChild(image);
                imageTitle1.appendChild(titleofimage);
                imageText1.appendChild(textforimage);
        }
        else if(Images.image[i].title === "Frog"){
                Image2.appendChild(image);
                imageTitle2.appendChild(titleofimage);
                imageText2.appendChild(textforimage);
        }
        else if(Images.image[i].title === "Groundhog"){
                Image3.appendChild(image);
                imageTitle3.appendChild(titleofimage);
                imageText3.appendChild(textforimage);
        }
    }
}