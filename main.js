function preload(){
}

function setup(){
    canvas = createCanvas(1000, 500);
    canvas.position(200, 300);
    video = createCapture(VIDEO);
    video.hide()

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 1000, 500);
    tint(tint_color)
}

function take_snapshot(){
    save('Birthday.png');
}

function filter(){
    tint_color = document.getElementById("color's_name").value
};