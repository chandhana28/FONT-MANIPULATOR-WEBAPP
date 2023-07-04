leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(650, 600);
    canvas.position(650, 140);

    video = createCapture(VIDEO);
    video.size(550, 500);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function draw(){
    background("white");
    textSize(difference);
    fill("#3467D4");
    text("Chandhana",40,350);

    document.getElementById("size").innerHTML = "Font Size : " +difference+"px";
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
    }
}