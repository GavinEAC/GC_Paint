function draw_top_bar()  {
    //TOP BAR
    //title
    fill(0,0,0)
    rect(0,0, screen.width, screen.height/10);
    fill(119, 235, 52);
    textAlign(CENTER);
    textSize(34);
    text("GC PAINT", screen.width/2, percent(screen.height, 5));
    textSize(28);
    text("Better Than MS Paint", screen.width/2, percent(screen.height, 9));
}