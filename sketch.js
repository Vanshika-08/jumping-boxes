var canvas;
var music;

var surface1, surface2, surface3, surface4;
var edge1, edge2, edge3, edge4;
var box1;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);
      

    music.loop();
    //create 4 different surfaces
    surface1 = createSprite(880, 580, 150, 10);
    surface1.shapeColor ="magenta";

    surface2 = createSprite(680, 580, 150, 10);
    surface2.shapeColor = "orange";

    surface3 = createSprite(480, 580, 150, 10);
    surface3.shapeColor = "blue";

    surface4 = createSprite(280, 580, 150, 10);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    box1 = createSprite(random(10, 600));
    box1.shapeColor = "white";
    box1.velocityX = -5;
    box1.velocityY = 5;
}

function draw() {
    background("salmon");
    //create edgeSprite
    edge1 = createSprite(1000, 600, 10, 1200);
    edge1.shapeColor = "black";

    edge2 = createSprite(0, 0, 10, 12000);
    edge2.shapeColor = "black";

    edge3 = createSprite(580, 0, 16000, 10);
    edge3.shapeColor = "black";
    
    edge4 = createSprite(0, 600, 16000, 10);
    edge4.shapeColor = "black";

    box1.bounceOff(edge1);
    box1.bounceOff(edge2);
    box1.bounceOff(edge3);
    box1.bounceOff(edge4);



    drawSprites();
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box1)&& box.bounceOff(surface1)){
        box1.shapecolor = "magenta";
    }

    if(surface2.isTouching(box1)&& box.bounceOff(surface2)){
        box1.shapeColor = "orange";
    }

    if(surface3.isTouching(box1)&& box.bounceOff(surface3)){
        box1.shapeColor = "blue";
    }

    if(surface4.isTouching(box1)&& box.bounceOff(surface4)){
        box1.shapeColor = "green";
    }
    

    if(surface1.isTouching(box1)){
        box1.shapeColor = "magenta";
        box1.velocityX = 0;
        box1.velocityY = 0;
        music.stop();
    }

    if(surface2.isTouching(box1)){
        box1.shapeColor = "orange";
        box1.velocityX = 0;
        box1.velocityY = 0;
        music.stop();
    }

    if(surface3.isTouching(box1)){
        box1.shapeColor = "blue";
        box1.velocityX = 0;
        box1.velocityY = 0;
        music.stop();
    }

    if(surface4.isTouching(box1)){
        box1.shapeColor = "green";
        box1.velocityX = 0;
        box1.velocityY = 0;
        music.stop();
    }
}
