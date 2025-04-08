let sizeSlider;
let penSize;

let redColorSlider;
let red;

let greenColorSlider;
let green;

let blueColorSlider;
let blue;

let penColor;


function setup() {
    // put setup code here
    let canvas = createCanvas(screen.width, screen.height);
    canvas.position(0,0);
    
    //Pen Size Slider
    sizeSlider = createSlider(1, 100, 50, 0);
    sizeSlider.position(percent(screen.width, 2), percent(screen.height, 15));
    sizeSlider.size(percent(screen.width, 6));

    //Color Sliders
    //red
    redColorSlider = createSlider(0, 225, 0, 0);
    redColorSlider.position(percent(screen.width, 2), percent(screen.height, 37));
    redColorSlider.size(percent(screen.width, 6));
    //green
    greenColorSlider = createSlider(0, 225, 0, 0);
    greenColorSlider.position(percent(screen.width, 2), percent(screen.height, 40));
    greenColorSlider.size(percent(screen.width, 6));
    //blue
    blueColorSlider = createSlider(0, 225, 0, 0);
    blueColorSlider.position(percent(screen.width, 2), percent(screen.height, 43));
    blueColorSlider.size(percent(screen.width, 6));
}
 
function draw() {
    // put drawing code here
    penSize = sizeSlider.value();
    red = redColorSlider.value();
    green = greenColorSlider.value();
    blue = blueColorSlider.value();
    penColor = color(red, green, blue);
    drawPen();
    stroke(0,0,0);
    //background(255,255,255)
    draw_top_bar();
    draw_side_bar();
    
    
}
