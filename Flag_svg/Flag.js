console.log("Flag");
const svgNS = "http://www.w3.org/2000/svg";



function drawRects() {

       let color = ["orange", "whitesmoke", "green"]
       for (let i = 0; i < 3; i++) {
              let x = 100, y = (i + 1) * 100, w = 500, h = 100;
              createRect(`Rect${color[i]}`, x, y, w, h, color[i]);
       }
}
function createCircle(i, cx, cy, r,color) {
       console.log("circle");
       let circle = document.createElementNS(svgNS, "circle");
       
       circle.setAttributeNS(null, "id", i);
       circle.setAttributeNS(null, "cx", cx);
       circle.setAttributeNS(null, "cy", cy);
       circle.setAttributeNS(null, "r", r);

       circle.style.strokeWidth = 4;
       circle.style.fill = color;
       circle.style.stroke = "blue"
       document.getElementById("TricolorSVG").appendChild(circle);
}
function drawCircles() {
       createCircle("Circle", "350", "250", "50","none");
}
function createSpoke(i, x1, y1, x, y) {
       
       var spoke = document.createElementNS(svgNS, "line");
       spoke.setAttributeNS(null, "id", i);
       spoke.setAttributeNS(null, "x1", x1);
       spoke.setAttributeNS(null, "y1", y1);
       spoke.setAttributeNS(null, "x2", x);
       spoke.setAttributeNS(null, "y2", y);
spoke.style.stroke="blue";
       document.getElementById("TricolorSVG").appendChild(spoke);
   }
function drawSpokes() {
       var x1 = 350, y1 = 250, theta = 15, r = 49;
       for (var i = 0; i < 24; i++) {
           theta = theta * i * Math.PI / 180;
           x = x1 + r * Math.cos(theta);
           y = y1 + r * Math.sin(theta);
           createSpoke(i, x1, y1, x, y);
           theta = 15;
       }
   }
   function createRect(i, x, y, w, h, color) {
       console.log("rect");
       let rect = document.createElementNS(svgNS, "rect");
       
       rect.setAttributeNS(null, "id", i);
       rect.setAttributeNS(null, "x", x);
       rect.setAttributeNS(null, "y", y);
       rect.setAttributeNS(null, "width", w);
       rect.setAttributeNS(null, "height", h);

       rect.style.fill = color;
       rect.style.strokeWidth = 4;
       rect.style.stroke = "black";
       document.getElementById("TricolorSVG").appendChild(rect);

}
   function drawPole()
   {
          createRect("stand","110","400","30","500","brown");
   }
   function drawPlatform()
   {
       createRect("stand","100","900","50","50","red");
       createRect("stand","80","950","90","50","blue");
       createRect("stand","60","1000","130","50","yellow");
       
       
   }
function drawFlag() {
       drawRects();
       drawCircles();
       drawSpokes();
       drawPole();
       drawPlatform();

}