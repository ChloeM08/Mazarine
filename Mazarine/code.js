var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f74ff44c-ce60-4bf4-a467-d59fac0b18ce","5038aff3-dfbb-4204-b900-22016b0ce6c8","1e4042a2-8dd8-4e5f-86ab-f22b0404da6b","40ca2447-76df-40b1-b357-5c61211ff8a3","8543588d-24e2-49ad-95ee-f5a8beb682c9","df7c2760-984b-43d8-be9e-510deb35abcd","c161d050-31b5-4469-adb3-42f93337576e","70aa8e9e-5516-44ef-b892-a653c356bb13","01262685-c557-4448-a8f4-58280dfa52ac","bb3b5c51-8ea5-4472-88d0-cd3dce801c68","cf65d186-a9ac-42c5-b84f-921bb8e05f06"],"propsByKey":{"f74ff44c-ce60-4bf4-a467-d59fac0b18ce":{"name":"Cora.png_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"oRmnTPj04f04PJgVCZwUSXe7r5NSvH4l","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f74ff44c-ce60-4bf4-a467-d59fac0b18ce.png"},"5038aff3-dfbb-4204-b900-22016b0ce6c8":{"name":"stem.png","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Jjn7iTc2EjDobXy5b72_b_AIoBvMuZx3","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/5038aff3-dfbb-4204-b900-22016b0ce6c8.png"},"1e4042a2-8dd8-4e5f-86ab-f22b0404da6b":{"name":"flower","sourceUrl":"assets/v3/animations/lqDJo_tC1oVhD98i5wV3UR_v-1JrFD_JQI2NY2P8ngg/1e4042a2-8dd8-4e5f-86ab-f22b0404da6b.png","frameSize":{"x":600,"y":598},"frameCount":1,"looping":true,"frameDelay":4,"version":"bNAX2lOR_9N6UJQSccVBGRTmeCIibMQM","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":598},"rootRelativePath":"assets/v3/animations/lqDJo_tC1oVhD98i5wV3UR_v-1JrFD_JQI2NY2P8ngg/1e4042a2-8dd8-4e5f-86ab-f22b0404da6b.png"},"40ca2447-76df-40b1-b357-5c61211ff8a3":{"name":"mantis1","sourceUrl":"assets/v3/animations/lqDJo_tC1oVhD98i5wV3UR_v-1JrFD_JQI2NY2P8ngg/40ca2447-76df-40b1-b357-5c61211ff8a3.png","frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":4,"version":"5ZVjViFfOxS6t5BWdxSFypPNHYIyJ4KC","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/v3/animations/lqDJo_tC1oVhD98i5wV3UR_v-1JrFD_JQI2NY2P8ngg/40ca2447-76df-40b1-b357-5c61211ff8a3.png"},"8543588d-24e2-49ad-95ee-f5a8beb682c9":{"name":"mantis2","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"9UY6pv3ULp5XatLD9OmfgPGj.m9GljxF","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/8543588d-24e2-49ad-95ee-f5a8beb682c9.png"},"df7c2760-984b-43d8-be9e-510deb35abcd":{"name":"honey.png","sourceUrl":"assets/v3/animations/lqDJo_tC1oVhD98i5wV3UR_v-1JrFD_JQI2NY2P8ngg/df7c2760-984b-43d8-be9e-510deb35abcd.png","frameSize":{"x":213,"y":300},"frameCount":1,"looping":true,"frameDelay":4,"version":"gjdpzqU0a241VeqmGwYyELBO31E2Dsve","loadedFromSource":true,"saved":true,"sourceSize":{"x":213,"y":300},"rootRelativePath":"assets/v3/animations/lqDJo_tC1oVhD98i5wV3UR_v-1JrFD_JQI2NY2P8ngg/df7c2760-984b-43d8-be9e-510deb35abcd.png"},"c161d050-31b5-4469-adb3-42f93337576e":{"name":"leaf","sourceUrl":null,"frameSize":{"x":512,"y":304},"frameCount":1,"looping":true,"frameDelay":12,"version":"VtwZ.9LU6APa4xZ5KbdKih3NwpNty.Ct","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":304},"rootRelativePath":"assets/c161d050-31b5-4469-adb3-42f93337576e.png"},"70aa8e9e-5516-44ef-b892-a653c356bb13":{"name":"leaf_1","sourceUrl":null,"frameSize":{"x":512,"y":304},"frameCount":1,"looping":true,"frameDelay":12,"version":"NjgUa3Psnyo_gQSDssmkCRc6VoWt_rwM","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":304},"rootRelativePath":"assets/70aa8e9e-5516-44ef-b892-a653c356bb13.png"},"01262685-c557-4448-a8f4-58280dfa52ac":{"name":"sky.jpg_1","sourceUrl":"assets/v3/animations/lqDJo_tC1oVhD98i5wV3UR_v-1JrFD_JQI2NY2P8ngg/01262685-c557-4448-a8f4-58280dfa52ac.png","frameSize":{"x":1000,"y":1500},"frameCount":1,"looping":true,"frameDelay":4,"version":"L3tiB8N9V94THCdl143y4kMo0_cd2CVZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":1500},"rootRelativePath":"assets/v3/animations/lqDJo_tC1oVhD98i5wV3UR_v-1JrFD_JQI2NY2P8ngg/01262685-c557-4448-a8f4-58280dfa52ac.png"},"bb3b5c51-8ea5-4472-88d0-cd3dce801c68":{"sourceSize":{"x":500,"y":221},"frameSize":{"x":500,"y":221},"frameCount":1,"frameDelay":4,"name":"gameover","sourceUrl":"assets/v3/animations/iCQHcvdQrAp2KG44Cm280GfJIL0IzhH5_-2cmQewJEo/bb3b5c51-8ea5-4472-88d0-cd3dce801c68.png","size":10780,"version":"PfVnztNr1mhNvmBcFUl2nz8iEuV7.FUI","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/iCQHcvdQrAp2KG44Cm280GfJIL0IzhH5_-2cmQewJEo/bb3b5c51-8ea5-4472-88d0-cd3dce801c68.png"},"cf65d186-a9ac-42c5-b84f-921bb8e05f06":{"sourceSize":{"x":512,"y":102},"frameSize":{"x":512,"y":102},"frameCount":1,"frameDelay":4,"name":"youwin","sourceUrl":"assets/v3/animations/iCQHcvdQrAp2KG44Cm280GfJIL0IzhH5_-2cmQewJEo/cf65d186-a9ac-42c5-b84f-921bb8e05f06.png","size":4989,"version":"CsiYUDfGdueMvJK2wpKC6gushPR.BEiw","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/iCQHcvdQrAp2KG44Cm280GfJIL0IzhH5_-2cmQewJEo/cf65d186-a9ac-42c5-b84f-921bb8e05f06.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg = createSprite(200, 200, 400, 400);
bg.setAnimation("sky.jpg_1");
bg.scale = 0.4;
bg.velocityY = +2;
var stem = createSprite(180, 300);
 stem.setAnimation("stem.png");
 //stem.velocityY = -2;
 stem.width = 600;
 stem.height = 600;
var Cora = createSprite(200, 200, 10, 10);
Cora.setAnimation("Cora.png_1");
Cora.scale = 0.6;
var honeyGroup = createGroup();
var leafGroup = createGroup();
var flowersGroup = createGroup();
var mantisGroup = createGroup();
var score = 0;
var life = 1;
var gameState = "play";

function draw() {
  background("white");
if(gameState==="play"){
    
  
if (bg.y>300) {
    bg.y = 200;
  }
  
 
 
   
/*if (keyDown("space")) {
  //Cora.velocityY = -4;
}*/
if(keyDown("space")){
  Cora.velocityY = -4;
}
if(leafGroup.isTouching(Cora)){
  Cora.velocityY = -1;
}
Cora.velocityY = Cora.velocityY+0.3;

  if (keyDown(LEFT_ARROW)) {
    Cora.x = Cora.x-4;
  }
  if (keyDown(RIGHT_ARROW)) {
    Cora.x = Cora.x+4;
  }
  
  if(flowersGroup.isTouching(Cora)){
    flowersGroup.destroyEach();
    score = score+30;
  }
  if(honeyGroup.isTouching(Cora)){
    honeyGroup.destroyEach();
    score = score+15;
  }
  if(mantisGroup.isTouching(Cora)){
    gameState = "end";
  }
  if(score>500){
    gameState = "win";
  }
  //spawnStem();
  spawnHoney();
  spawnFlowers();
  spawnLeaf();
  
  
}

 if(gameState==="end"){
   var gameover = createSprite(200, 200);
   gameover.setAnimation("gameover");
   gameover.scale = 0.6;
   stem.destroy();
   Cora.destroy();
   life = 0;
 }
  if(gameState==="win"){
    var win = createSprite(200, 200);
    win.setAnimation("youwin");
    win.scale = 0.6;
    stem.destroy();
  }
  
  drawSprites();
   fill("red");
  textSize(21);
  text("Life: "+life, 330, 25);
  fill("Black");
  text("Score: "+score, 20, 25);
}



function spawnHoney(){
  if(World.frameCount%100===0){
    
  
  var honey = createSprite(40, -170);
  var honey2 = createSprite(350, -300);
  honey2.setAnimation("honey.png");
  honey.setAnimation("honey.png");
  honey.velocityY = +3;
  honey2.velocityY = +3;
  honey.scale = 0.07;
  honey2.scale = 0.07;
  //honey.x = randomNumber(100, 300);
  honey.lifetime = 200;
  honey2.lifetime = 200;
  honeyGroup.add(honey);
  honeyGroup.add(honey2);
}
}
function spawnFlowers(){
  if(World.frameCount%250===0){
  
  var flower = createSprite(350, -300);
  var flower2 = createSprite(40, -170);
  flower2.setAnimation("flower");
  flower.setAnimation("flower");
  flower2.velocityY = +3;
  flower.velocityY = +3;
  flower.scale = 0.06;
  flower2.scale = 0.06;
  flower.lifetime = 200;
  flower2.lifetime = 200;
  flowersGroup.add(flower);
  flowersGroup.add(flower2);
  //flower.x = randomNumber(100, 300);
}
}
function spawnLeaf(){
  if(World.frameCount%80===0){
    
    var leaf = createSprite(40, -150);
    var leaf2 = createSprite(350, -300);
    leaf2.setAnimation("leaf_1");
    leaf2.velocityY = +3;
    leaf2.scale = 0.4;
    leaf.setAnimation("leaf");
    leaf.velocityY = +3;
    leaf.scale = 0.4;
    Cora.depth = leaf.depth;
    Cora.depth = Cora.depth+1;
    leaf.lifetime = 200;
    leaf2.lifetime = 200;
    leafGroup.add(leaf);
    leafGroup.add(leaf2);
    
    if(World.frameCount%200===0){
    var mantis1 = createSprite(40, -170);
    mantis1.setAnimation("mantis1");
    mantis1.velocityY = +3;
    mantis1.scale = 0.2;
    mantis1.depth = leaf.depth;
    mantis1.depth = mantis1.depth+1;
    mantis1.lifetime = 200;
    mantisGroup.add(mantis1);
    }
    if(World.frameCount%160===0){
    var mantis2 = createSprite(350, -300);
    mantis2.setAnimation("mantis2");
    mantis2.velocityY = +3;
    mantis2.scale = 0.2;
    mantis2.depth = leaf.depth;
    mantis2.depth = mantis2.depth+1;
    mantis2.lifetime = 200;
    mantisGroup.add(mantis2);
      
    }
  }
}
/*function spawnMantis(){
  
  }*/
  
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
