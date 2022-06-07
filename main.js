song = "";
song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
image(video, 0, 0, 500, 500)

}
function preload(){
    song1 = loadSound("mp3.mp3");
    song = loadSound("mp3.mp3");
    song2 = loadSound("music.mp3");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function stop(){
    song.stop();
    song1.stop();
    song2.stop();
}
function pause(){
    song.pause();
}
function modelLoaded(){
    console.log('POSENET IS INITIALIZED');

}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}
function next(){
    song.stop();
    song2.play();
    song1.stop();
    
}
function prev(){
    song.stop();
    song1.play();
    song2.stop();
}