//-------------------------------------------------------------------------------------------
// shapes.js 
// 
// ----------------
// Version 1.0.0
// ----------------
// auth: Aaron Clay
// date: 4-25-2018
// ----------------
// 
// Purpose:
// ----------------
// Library to generate and return predefined elements to be use with the 
// DOM. 
// Shapes Returned are SVG elem descriptions in [STRING] format as part of an
// [OBJECT]
//
// USAGE:    var x = new Circle(); // default values
//           returns {};
// OR:
//            var x = new Cirlcle(100,100,50,#CCCFFF,10,10,#CCFFCC,2,#FFCCFF,myStyleClass);
//            returns {};
// 
//-------------------------------------------------------------------------------------------

function Circle(cx,cy,r,backColor,stroke,strokeWidth,fillOption,sClass)
{
	if (!cx) cx = 11; // default 20px xRadius
	this.cx = cx; // y
	if (!cy) cy = 11; // default 20px yRadius
	this.cy = cy; // x
	
	if (!r) r = 10; // default radius of 10px 
	this.r = r;
	
	if(!backColor) backColor = "#000000"; // default backColor = 'black'
	this.backColor = backColor; // the 'fill' of the circle
	
	if (!stroke) stroke = "black"; // default stroke color "black";
	this.stroke = stroke;
	
	if (!strokeWidth) strokeWidth = "1"; // default stroke-width: 1  [STR]
	this.strokeWidth = strokeWidth;
	
	if (!fillOption) fillOption = "#000000"; // default "black";
	this.fillOption = fillOption;
	
	if (!sClass) sClass = "none"; // defaul elem css class
	this.sClass = sClass;
	
	this.elemID = Math.random(); 
	
	this.svg_elem_desc = "<div id=\"" + this.elemID + "\" class=\"circle\" onclick=animCirDown(); >"
	+ "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"" + (this.r*2 + 3) + "\" width=\"" + (this.r*2 + 3) + "\"  ><circle cx=\"" 
	+ this.cx + "\" cy=\"" + this.cy + "\" r=\"" + this.r + "\" stroke=\""
	+ this.stroke + "\" fill=\"" + this.fillOption + "\"  />" 
	+ "</svg></div>";
	
	
}

var cAnimID=null;
var anmiIDS = [];
var cx = 0;
var cy = 0; 

function animCirDown()
{
	
	start = window.performance.now();
	var winH = window.innerHeight;
	if (!start) start = window.performance.now();
	var tgt = document.getElementById(arShapes[0].elemID);
	
	if (cx <= winH)
	{
		
		cx++;
		tgt.style.top = (cx + "px");
		cAnimID = window.requestAnimationFrame(animCirDown);
		anmiIDS.push(cAnimID);
	}
	
}


function Rectangle(x,y,w,h,stroke,strokeWidth,fillOption,sClass)
{
	if (!x) x = 0;
	this.x = x;
	
	if (!y) y = 0;
	this.y = y;
	
	if (!w) w = 20;
	this.w = w;
	
	if (!h) h = 20;
	this.h = h;
	
	if (!stroke) stroke = "black"; // default stroke color "black";
	this.stroke = stroke;
	
	if (!strokeWidth) strokeWidth = "1"; // default stroke-width: 1  [STR]
	this.strokeWidth = strokeWidth;
	
	if (!fillOption) fillOption = "#000000"; // default "black";
	this.fillOption = fillOption;
	
	if (!sClass) sClass = "none"; // defaul elem css class
	this.sClass = sClass;
	
	this.elemID = Math.random(); 
	
	this.svg_elem_desc = "<svg xmlns=\"http://www.w3.org/2000/svg\"  id=\""
	+ this.elemID + "\" height=\"" + (this.h +2)   + "\" width=\"" + (this.w +2) + "\"><rect x=\"" + this.x + "\" y=\"" + this.y + "\" width=\"" + this.w + "\" height=\"" + this.h + "\" stroke=\""
	+ this.stroke + "\" stroke-width=\"" + this.strokeWidth + "\" fill=\"" + this.fillOption + "\" />" 
	+ "</svg>";
	
	
}
	
