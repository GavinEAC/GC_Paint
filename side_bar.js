function draw_side_bar() {
    fill(119, 235, 52);
    rect(0, percent(screen.height, 10), percent(screen.width, 10), percent(screen.height, 90));
    //PEN SIZE
    textAlign(CENTER);
    textSize(20);
    fill(0,0,0);
    text("PEN SIZE", percent(screen.width, 5), percent(screen.height, 14));
    ellipse(percent(screen.width, 5), percent(screen.height, 25),penSize,penSize);
    //PEN COLOUR
    fill(255,0,0);
    rect(percent(screen.width, 2), percent(screen.height, 37.25), percent(screen.width, 6) + 5, percent(screen.height, 2));
    fill(0,255,0);
    rect(percent(screen.width, 2), percent(screen.height, 40.25), percent(screen.width, 6) + 5, percent(screen.height, 2));
    fill(0,0,255);
    rect(percent(screen.width, 2), percent(screen.height, 43.25), percent(screen.width, 6) + 5, percent(screen.height, 2));
    text("COLOUR", percent(screen.width, 5), percent(screen.height, 35));
    fill(red, green, blue);
    ellipse(percent(screen.width, 5), percent(screen.height, 55),100,100);

    //CLEAR SCREEN
    if(mouseIsPressed === true && mouseX > percent(screen.width, 1) && mouseX < percent(screen.width, 1) + percent(screen.width, 8) && mouseY > percent(screen.height, 70) && mouseY < percent(screen.height, 70) + percent(screen.height, 4))  {
        fill(220,220,220);
        rect(percent(screen.width, 1), percent(screen.height, 70), percent(screen.width, 8), percent(screen.height, 4));
        fill(0,0,0);
        textSize(14);
        textAlign(CENTER);
        text("CLEAR CANVAS", percent(screen.width, 5), percent(screen.height, 70) + 20 );
        fill(255,255,255);
        rect(percent(screen.width, 10), percent(screen.height, 10), percent(screen.width, 90), percent(screen.height, 90))
    }
    else{
        fill(255,255,255)
        rect(percent(screen.width, 1), percent(screen.height, 70), percent(screen.width, 8), percent(screen.height, 4));
        fill(0,0,0);
        textSize(14);
        textAlign(CENTER);
        text("CLEAR CANVAS", percent(screen.width, 5), percent(screen.height, 70) + 20 );
    }
    
}

