function preload()
{

}

function setup()
{
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HjYC7qVsH/model.json', modelLoaded);

}

function modelLoaded()
{
    console.log("Model Loaded");
}

function gotResults(error, result)
{
    if (error) {
       console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("object-name").innerHTML=result[0].label;
        document.getElementById("object-accuracy").innerHTML=result[0].confidence.toFixed(3);
    }

}

function draw()
{
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResults);
}

