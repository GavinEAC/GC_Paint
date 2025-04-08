function drawPen()  {
    noStroke();
    fill(penColor)
    if(mouseIsPressed === true)  {
        if(mouseX > percent(screen.width, 10) && mouseY > percent(screen.height, 10) && mouseX < screen.width && mouseY < screen.height)
        ellipse(mouseX, mouseY, penSize, penSize);
    }
}