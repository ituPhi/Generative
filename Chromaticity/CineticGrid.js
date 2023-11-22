function setup(){
    createCanvas(800,800);
    // first need to set the variables for the sizes 
    let padding = 5;
    let radius =20; 
    let diameter = radius *2;
    
    // calculate colums and rows 
    let cols = width / (diameter + padding);
    let rows = height / (diameter + padding);
    
    // draw the grid 
    for(let i =0;i<cols;i++){
      for(let j =0 ; j< rows;j++){
      // calculate x and y pos of the circles
        let x= i* (diameter + padding) + padding / 2;
        let y= j*(diameter+padding)+ padding/2;
        
        fill(255);
        stroke(0);
        strokeWeight(2);
        ellipse(x,y,diameter*2,diameter*2);
        
        
        // calculate the offsets 
        let offsetX = (radius /2) * cos(TWO_PI*noise(x,y));
        let offsetY = (radius /2 ) * sin(TWO_PI*noise(x,y));
        fill(0);
        noStroke();
        ellipse(x + offsetX, y + offsetY, diameter, diameter);
        
        
      }
      
    }
    
    
    
  }