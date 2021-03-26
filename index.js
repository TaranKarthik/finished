var song = "";
var leftWristX,rightWristX,leftWristY,rightWristY;

function preload(){
    song = loadSound("music.mp3");
}


function setup(){
    ctx = createCanvas(300,270)
    ctx.center();
    ctx.position(400,250)
    video = createCapture(VIDEO);
    
    video.hide();
    const poseNet = ml5.poseNet(video, modelLoaded);
    
    poseNet.on("pose", function(results) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;


    });



    
}


function modelLoaded() {
    console.log("Model Loaded!");
  }

function draw(){
    
    background(45);
    image(video,0,0,300,300);
}


function play(){
    song.play();
}