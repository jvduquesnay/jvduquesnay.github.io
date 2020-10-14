var index = 0; 
var text = '..a child of the universe no less than the trees and the stars..'; 
var speed = 40; 
  
function textEffect() { 
    if (index < text.length) { 
        document.getElementById("effect") 
                .innerHTML += text.charAt(index); 
        index++; 
        setTimeout(textEffect, speed); 
    } 
} 
