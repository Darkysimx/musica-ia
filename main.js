var musica1="";
var musica2="";

function preload(){
musica1 = loadSound("music.mp3");
musica2 = loadSound("music2.mp3");

}
function setup(){
canvas = createCanvas(601,501);
canvas.center();


video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,0,0,601,501)
}
