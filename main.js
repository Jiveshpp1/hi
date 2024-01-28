nose_x=0
nose_y=0
function preload(){
    nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png')
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose)
}

function draw(){
    image(video,0,0,300,300)
    fill(255,0,0)
    stroke(255,0,0)
    circle(nose_x,nose_y,20)
    image(nose,nose_x-14,nose_y-10,30,30)

}

function takesnapshot(){
    save("filterimg.png");
}
function modelLoaded(){
    console.log('Posenet is intailized yay!')
}
function gotPose(results) {
    //to avoid errors :)
    if(results.length > 0){
        console.log(results)
        nose_x=results[0].pose.nose.x
        nose_y=results[0].pose.nose.y
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}
