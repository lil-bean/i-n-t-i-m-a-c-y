// i/n/t/i/m/a/c/y 
// digital poem by aileen lian 
// sept/oct 2022 

//-----------------------------------------------//

// variables
var page;

function setup(){
    createCanvas(900, 500);
    page = 1;
}

function draw(){
    
// page 1 = title page 
    
if(page == 1){
    frameRate(60);
    background(3,9,31);
    noStroke();
    fill(237);
    textSize(18);
    textStyle(NORMAL);
    textAlign(CENTER);
    text("i n t i m a c y", 450, 250);
    
// hover over title --> slashes appear + button to advance 
    if(mouseX > 380 && mouseX < 520 && mouseY > 220 && mouseY < 280){
        fill(3,9,31);
        rect(380,220,140,50);
        fill(random(130,200), 117, 156);
        text("i/n/t/i/m/a/c/y", 450, 250);
        fill(237);
        text("i n t i m a c y", 450, 250);
    }
    
    if(mouseIsPressed && mouseX > 380 && mouseX < 520 && mouseY > 220 && mouseY < 280){
        page = 2;
    }    
}
    
// page 2

if(page == 2){
    frameRate(60);
    background(3,9,31);
    noStroke();
    fill(141, 126, 145);
    text("a digital poem about reconciling with conflicting feelings, conflicting parts", 450,150);
    fill(255);
    text("be sure to move your mouse around, click on text, etc.", 450, 250);
    fill(141, 126, 145);
    text("let's give it a shot", 450,350);
    
// button to advance 
    if(mouseX > 360 && mouseX < 545 && mouseY > 320 && mouseY < 380){
        fill(3,9,31);
        rect(360, 320, 185, 50);
        fill(219, 184, 184);
        text("let's give it a shot", 450,350);   
    }
    
    if(mouseIsPressed && mouseX > 360 && mouseX < 545 && mouseY > 320 && mouseY < 380){
        page = 3;
    }  
}      
    
// page 3

if(page == 3){
    frameRate(60);
    background(60, 71, 56);
    noStroke();
    fill(255);
    textAlign(LEFT);
    text("caught my reflection in a window the other day.", 100, 150);
    text("we stared at each other,", 100, 180);
    text("and i tried to tell her,", 100, 210);
    fill(255, 239, 172 );
    text('"he was wrong, you know? he was wrong."', 100, 240);
    // if mouse is in the bottom right corner, text pops up
    if(mouseX > 600 && mouseX < 900 && mouseY > 300 && mouseY < 500){
        fill(255);
        text("but was he?", mouseX+30, mouseY+10);
    }
    
// button to advance 
    if(mouseX > 90 && mouseX < 450 && mouseY > 220 && mouseY < 260){
        fill(60, 71, 56);
        rect(90,120,400,120);
        rect(90, 220, 350, 30);
        fill(220, 230, 211);
        text('"he was wrong, you know? he was wrong."', 100, 240);
    }
    
    if(mouseIsPressed && mouseX > 90 && mouseX < 450 && mouseY > 220 && mouseY < 260){
        page = 4;
    }
} 
    
// page 4

if(page == 4){
    frameRate(60);
    background(92, 30, 30);
    noStroke();
    fill(255);
    text("watched her face crumple like loose leaf paper", 100, 280);
    text("balled up in a fist.", 100, 310);
    text("i didn't push it, didn't push her.", 100, 340);
    text("she's coming around. she'll come around", 100, 370);
    fill(235, 169, 169);
    text("someday.", 431,370);
    text("someday?", mouseX, mouseY);
    
// button to advance 
    if(mouseX > 400 && mouseX < 520 && mouseY > 350 && mouseY < 390){
        fill(92, 30, 30);
        text("someday.", 431,370);
        fill(255);
        text("someday.", 431,370);
    }
    
    if(mouseIsPressed && mouseX > 430 && mouseX < 520 && mouseY > 350 && mouseY < 390){
        page = 5;
    } 
} 
    
    
// page 5 
    
if(page == 5){
    frameRate(60);
    background(235, 169, 169);
    noStroke();
    fill(255);
    textAlign(LEFT);
    text("this morning, she asked me about", 100, 150);
    fill(235);
    text("that time he was so tender, so sweet, so caring.", 100, 180);
    fill(255);
    textAlign(RIGHT);
    text("that time i got awfully sunburned all over my back,", 800, 330);
    fill(235);
    text("the worst i've ever had", 800, 360);
    fill(235, 169, 169);
    rect(650,340,45,30);
    fill(255);
    text("worst", 693, 360);

// button to advance
    if(mouseX > 650 && mouseX < 700 && mouseY > 340 && mouseY < 380){
        fill(235,169,169);
        rect(650,340,45,30);
        fill(92,30,30);
        text("worst", 693, 360);
    }
    
    if(mouseIsPressed && mouseX > 650 && mouseX < 700 && mouseY > 340 && mouseY < 380){
        page = 6;
    }
    
}
    
// page 6 
if(page == 6){
    frameRate(60);
    background(130, 186, 141);
    noStroke();
    fill(255);
    textAlign(CENTER);
    text("he spent hours soothing me with", 450, 210);
    text("cool bath water. i was hunched over in the tub", 450, 240);
    text("as he washed me. rinse and repeat.", 450, 270);
    text("lathered me with aloe, let me wear his favorite t-shirt.", 450, 300);
    fill(130, 186, 141);
    rect(455, 253, 45, 25);
    fill(204, 232, 252);
    text("rinse", 478, 270);
    fill(130, 186, 141);
    rect(537, 253, 52, 25);
    fill(204, 232, 252);
    text("repeat", 563, 270);
    
// buttons to advance 
    // rinse button
    if(mouseX > 455 && mouseX < 500 && mouseY > 253 && mouseY < 278){
        fill(130, 186, 141);
        rect(455, 253, 45, 25);
    }
    
    if(mouseIsPressed && mouseX > 455 && mouseX < 500 && mouseY > 253 && mouseY < 278){
        page = 7;
    }
    
    // repeat button
    if(mouseX > 537 && mouseX < 597 && mouseY > 253 && mouseY < 278){
        fill(130, 186, 141);
        rect(537, 253, 52, 25);
    }
    
    if(mouseIsPressed && mouseX > 537 && mouseX < 597 && mouseY > 253 && mouseY < 278){
        page = 7;
    }
}
  
    
// page 7
if(page == 7){
    frameRate(60);
    background(0);
    noStroke();
    fill(240);
    textAlign(LEFT);
    text('"he almost killed us," i remind her.', 100, 150);
    text("she knows this,", 100, 200);
    text("his hands soft, stroking", 100, 300);
    text("just", 100, 350);
    textAlign(RIGHT);
    text('"like, multiple times."', 800, 150);
    text("but she'd still give anything to feel", 800, 200);
    text("her back", 800, 300);
    fill(179, 199, 230);
    text("one more time", 800, 350);
    
// button to advance 
    if(mouseX > 600 && mouseX < 850 && mouseY > 300 && mouseY < 400){
        background(0);
        fill(255);
        frameRate(8);
        textAlign(LEFT);
        text("just", 100, 350);
        textAlign(RIGHT);
        text("one more time", 800, 350);
        // randomly chosen text for one more time
        fill(179, 199, 230);
        var onemore = ["fuck me", "kiss me", "kill me", "hurt me", "love me", "hate me", "hug me", "push me", "annihilate me", "destroy me", "beseech me", "coerce me", "beg me", "keep me", "discard me", "manipulate me", "call me", "text me", "traumatize me", "abuse me", "threaten me", "swallow me", "caress me", "consume me", "comfort me", "ask me", "choose me", "save me", "cradle me", "soothe me", "console me", "pull me", "bully me", "force me", "leave me"];
        var chooseonemore = random(onemore);
        textAlign(LEFT);
        text(chooseonemore, 100, 150);
    }
    
    if(mouseIsPressed && mouseX > 600 && mouseX < 850 && mouseY > 300 && mouseY < 400){
        page = 8;
    } 
}
        

// page 8 
if(page == 8){
    frameRate(60);
    background(3,9,31);
    fill(237);
    textAlign(RIGHT);
    text("and i let her keep it. i know better now than", 800, 180);
    text("to pry it from her hands. i let her sleep because", 800, 230);
    text("that's how she survived;", 800, 280);
    fill(232, 193, 193);
    textAlign(LEFT);
    text("that's all she had.", 100, 330);
    
    // button to advance
    if(mouseX > 50 && mouseX < 280 && mouseY > 300 && mouseY < 360){
        fill(3,9,31);
        rect(50, 300, 160, 50);
        rect(400, 120, 450, 200);
        fill(255);
        text("that's all she had.", 100, 330);
    }
    
    if(mouseIsPressed && mouseX > 50 && mouseX < 280 && mouseY > 300 && mouseY < 360){
        page = 9;
    }  
} 
    

// page 9 
if(page == 9){
    
// background changes color depending on mouse position 
let x1 = map(mouseX,0,width,200,220);
let x2 = map(mouseY,0,width,100,255);
let x3 = map(mouseY,0,width,90,255);  
    
    frameRate(10);
    background(x1,x2,x3);
    noStroke();
    fill(255);
    textAlign(CENTER)
    text("and", 450, 200);
    
// miss you half 
    var missyou = ["i miss you", "i fucking miss you"]
    var choosemissyou = random(missyou);
    if(mouseX > 0 && mouseX < 450){
    textAlign(LEFT);
    text(choosemissyou, 150, 200);
    }
    
    
// hate you half 
    var hateyou = ["i hate you", "i fucking hate you"]
    var choosehateyou = random(hateyou); 
    if (mouseX > 450 && mouseX < 900){
    textAlign(RIGHT);
    text(choosehateyou, 750, 200);
    }
    
// all together now
    if(mouseY > 250 && mouseY < 500){
    noStroke();
    textAlign(LEFT);
    text(choosemissyou, 150, 200);  
    textAlign(RIGHT);
    text(choosehateyou, 750, 200);
    textAlign(CENTER);
    text("so fucking much", 450, 350);
    }
    
// button to advance — back to start
    if(mouseX > 350 && mouseX < 550 && mouseY > 300 && mouseY < 410){
        fill(x1,x2,x3);
        rect(350, 300, 200, 100);
        fill(100);
        text("so fucking much", 450, 350);
    }
    
    if(mouseIsPressed && mouseX > 350 && mouseX < 550 && mouseY > 300 && mouseY < 410){
        page = 1
    }    
}     
    
}