status = "";
song = "";
video = "";
objects = [];

function preload()
{
  song = loadSound("Alarm.mp3");
  video.hide();
}

function setup()
{
    canvas = createCanvas(480 , 380);
    canvas.center();
}

function draw()
{
    image(video , 0 , 0 , 480 , 380);

    if(objects[0] > 1)
    {
        song.stop();
        document.getElementById("status").innerHTML = "Person is Detected";
    }

    else
    {
       song.play();
       document.getElementById("status").innerHTML = "Person is Not Detected";
    }
}