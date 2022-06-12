function preload() {
  clownnose = loadImage(
    "https://i.postimg.cc/MGpH27b8/711512-removebg-preview.png"
  );
  antlers = loadImage("https://i.postimg.cc/bN1RVtRT/Hui.png");
}
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function modelLoaded() {
  console.log("Pose Net is Initialized!");
}
noseX = 0;
noseY = 0;
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x=" + results[0].pose.nose.x);
    console.log("nose y=" + results[0].pose.nose.y);
  }
}
function draw() {
  image(video, 0, 0, 300, 300);
  image(clownnose, noseX - 20, noseY - 20, 40, 40);
  image(antlers, noseX - 90, noseY - 180, 190, 190);
}
function take_snapshot() {
  save("Rudolph the Red Nosed YOU!!!.png");
}
