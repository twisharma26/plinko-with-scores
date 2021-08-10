const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, division1, plinko1, particle, score, turn;

var particles = []
var plinkos = []
var divisions = []

var divisionheight = 300

var gamestate = "start";

function setup() {
  createCanvas(480,800);
  engine = Engine.create(); 
  world = engine.world;

  //testing to figure out the measurements
  ground = new Ground(240, 790, 500, 20)
  //division1 = new Division(7, 630, 15, 300)
  //plinko1 = new Plinko(20, 200, 15)  
  //particle1 = new Particle(30, 50, 20)

  score = 0;
  turn = 0;

  for (var t = 0; t <= 5; t++)

  for (var i = 0; i <= width; i = i + 80) { 
    divisions.push(new Division(i, height-divisionheight/2, 10, divisionheight))
  }
  
  for (var i = 40; i<=width; i = i+50) {
    plinkos.push(new Plinko(i, 100, 10))
  }

  for (var i = 20; i<=width; i = i + 50) {
    plinkos.push(new Plinko(i, 150, 10))
  }

  for (var i = 40; i<=width; i = i+50) {
    plinkos.push(new Plinko(i, 200, 10))
  }

  for (var i = 20; i<=width; i=i+50) {
    plinkos.push(new Plinko(i, 250, 10))
  }

  for (var i = 40; i<=width; i=i+50){
    plinkos.push(new Plinko(i, 300, 10))
  }

  for (var i = 20; i<=width; i=i+50) {
    plinkos.push(new Plinko(i, 350, 10))
  }
}

function draw() {
  background(0)
  Engine.update(engine)

  /*if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width/2 - 100, width/2 + 100), 10, 10))
  }

  for (var p = 0; p<particles.length; p++) { //displaying the bouncy particles
    particles[p].display()
  }*/

  for (var a = 0; a<divisions.length; a = a+1) { //to display the division, using for loop to get the new value every time
    divisions[a].display() //a is the array index value 
  }

  for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display()
  }

  textSize(20)
  text("score: "+score, 300, 30)

  text("200", 425, 500)
  text("200", 340, 500)
  text("100", 265, 500)
  text("100", 180, 500)
  text("500", 105, 500)
  text("500", 20, 500)
  text(mouseX+", "+mouseY, mouseX, mouseY)

  ground.display()

  if (particle != null) {
    particle.display()

    if(particle.body.position.y > 760) {
      if(particle.body.position.x < 155) {
        score = score+500
        particle = null
        if (turn >= 5) {
          gamestate = "end"
        }
      }
      else if (particle.body.position.x > 155 && particle.body.position.x < 320) {
        score = score + 100
        particle = null
        if (turn >= 5) {
          gamestate = "end"
        }
      }
      else if(particle.body.position.x > 320 && particle.body.position.x < 481) {
        score = score + 200
        particle = null 
        if (turn >= 5) {
          gamestate = "end"
        }
      }
    }
  }

  if (turn >= 5) {
    textSize (40) 
    text("GAME OVER", 100, 400)
  }
}

function mousePressed() {
  if (gamestate !== "end") {
    turn++ 
    particle = new Particle(mouseX, 10, 10)
    console.log("gsdhfhncb")
  }
}