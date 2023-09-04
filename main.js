song_1 = ""
song_2 = ""
leftWristX = 0
leftWristY = 0
rightWristX = 0
rightWristY = 0
song_1_status


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video ,modelLoaded);
    posenet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is iniatialized")
}

function gotPoses(results) {
    if(results.length > 0) {
console.log(results);
leftWristX = results[0].pose.leftWrist.x
rightWristX = results[0].pose.rightWrist.x
leftWristY = results[0].pose.leftWrist.y
rightWristY = results[0].pose.rightWrist.y
console.log("leftWristY = " + leftWristY +"leftWristX = "+leftWristX)
console.log("rightWristX = " + rightWristX +"rightWristY = "+leftWristY)
score_leftWrist = results[0].pose.keypoints[9].score

    }
}

function draw() {
    //image(variable name, x, y, width, height)
    image(video, 0, 0, 600, 500)
     fill("red")
    stroke("red")
    if(score_leftWrist > 0.2) {
        circle(leftWristX, leftWristY, 30)
        InNumberleftWristY = Number(leftWristY);
        remove_decimals = floor(InNumberleftWristY);
        volume = remove_decimals/500;
        song.setVolume(volume)
        document.getElementById("volume").innerHTML = "Volume: " + volume
        song_1.isplaying()
    }
     circle(rightWristX, rightWristY, 30)
}

function preload() {
    song_1= loadSound("song1.mp3")
    song_2= loadSound("song2.mp3")
}

