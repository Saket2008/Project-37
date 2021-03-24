var boat, boatAni;
var obs1, obs1img, obs2, obs2img;
var river, riverImg;
var fish1, fishImg;
var sound1;
var score = 0;

function preload()
{
    boatAni = loadAnimation("img/boat3_0.png", "img/boat3_1.png", "img/boat3_2.png", "img/boat3_3.png", "img/boat3_4.png");
    obs1img = loadImage("img/boat1.png");
    obs2img = loadImage("img/boat2.png");
    riverImg = loadImage("img/Background.png");
    fishImg = loadImage("img/fish.png");
    sound1 = loadSound("collect_point.wav");
}

function setup()
{
    canvas = createCanvas(400, 400);

    river = createSprite(200, -600, 400, 10000);
    river.addImage("bg", riverImg);

    boat = createSprite(200, 200, 50, 50);
    boat.shapeColor = "red";
    boat.velocityY = -2;
    boat.addAnimation("boat", boatAni);
    boat.scale = 0.1

    fish1 = createSprite(random(50, 350), -50);
    fish1.addImage(fishImg);
    fish1.scale = 0.1;
    fish2 = createSprite(random(50, 350), -250);
    fish2.addImage(fishImg);
    fish2.scale = 0.1;
    fish3 = createSprite(random(50, 350), -450);
    fish3.addImage(fishImg);
    fish3.scale = 0.1;
    fish4 = createSprite(random(50, 350), -650);
    fish4.addImage(fishImg);
    fish4.scale = 0.1;
    fish5 = createSprite(random(50, 350), -850);
    fish5.addImage(fishImg);
    fish5.scale = 0.1;
    fish6 = createSprite(random(50, 350), -1050);
    fish6.addImage(fishImg);
    fish6.scale = 0.1;
    fish7 = createSprite(random(50, 350), -1250);
    fish7.addImage(fishImg);
    fish7.scale = 0.1;
}

function draw()
{
    background("");

    camera.position.x = 200;
    camera.position.y = boat.y;

    if (frameCount % 100 === 0)
    {
        boat.velocityY = boat.velocityY - 0.5;
    }

    if (boat.y < -1370)
    {
        boat.y = 200;
    }

    if (camera.position.y > 100)
    {
        fish1.visible = true;
        fish2.visible = true;
        fish3.visible = true;
        fish4.visible = true;
        fish5.visible = true;
        fish6.visible = true;
        fish7.visible = true;
    }

    if (keyDown(RIGHT_ARROW))
    {
        boat.x = boat.x + 5;
    }
    
    if (keyDown(LEFT_ARROW))
    {
        boat.x = boat.x - 10;
    }
    
    if (boat.isTouching(fish1))
    {
        fish1.visible = false;
        fish1.x = random(50, 350);
        score++;
        sound1.play();
    }
    if (boat.isTouching(fish2))
    {
        fish2.visible = false;
        fish2.x = random(50, 350);
        score++;
        sound1.play();
    }
    if (boat.isTouching(fish3))
    {
        fish3.visible = false;
        fish3.x = random(50, 350);
        score++;
        sound1.play();
    }
    if (boat.isTouching(fish4))
    {
        fish4.visible = false;
        fish4.x = random(50, 350);
        score++;
        sound1.play();
    }
    if (boat.isTouching(fish5))
    {
        fish5.visible = false;
        fish5.x = random(50, 350);
        score++;
        sound1.play();
    }
    if (boat.isTouching(fish6))
    {
        fish6.visible = false;
        fish6.x = random(50, 350);
        score++;
        sound1.play();
    }
    if (boat.isTouching(fish7))
    {
        fish7.visible = false;
        fish7.x = random(50, 350);
        score++;
        sound1.play();
    }

    //console.log(score);

    drawSprites();

    textSize(20);
    fill("black")
    text("Score: " + score, 300, boat.y - 165);
}