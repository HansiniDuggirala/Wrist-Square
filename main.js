noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('poseNet is instialized');
}

function draw()
{
    background('#969A97');
    document.getElementById("square_side").innerHTML = "width and height of square will be = " + difference + "px";
    fill('#62009d');
    stroke('#ba002e');
    square(noseX, noseY, difference);
}

function gotPoses(results)
{
    console.log("gotPoses");
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY );
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftwristX = " + leftwristX + "rightwristX = " + rightwristX + "difference = "  + difference);
    }
}
