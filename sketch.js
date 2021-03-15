var dog,sadDog,happyDog;
var feedPet, addFood;
var foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("FEED DRAGO");
  feed.position(500,15);
  feed.mousePressed(FeedDog);
  add = createButton("ADD FOOD");
  add.position(400,15);
  add.mousePressed(AddFood);

}

function draw() {
  background(46,139,87);
  drawSprites();

  foodObj.display()

}

function AddFood(){
    foodS++;
    database.ref('/').update({Food:foodS})
  }
  function FeedDog(){
   dog.addImage(happyDog);

   if(foodObj.getFoodStock()<=0){
     foodObj.updateFoodStock(foodObj.getFoodStock()*0);
   }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);

   }
  }
  
//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
