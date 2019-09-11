/* Une grille typographique utilisant mon nom, prénom et pseudonyme. 
Les mots sont en rotation perpétuelle. Le premier, mon prénom, apparaît dès le lancement du code. 
il faut cliquer avec sa souris ou son pad pour que les deux autres apparaissent.
Le pseudonyme vient s’imbriquer dans le cercle du prénom tandis que le nom de famille se superpose aux deux autres. 
Cela créé une texture typographique entre lignes et angles, rendant la lecture quasi impossible. 
Il ne s’agit pas de savoir comment je m’appelle, mais de comprendre en un rapide coup d’oeil mon style graphique : 
typographie et avancée infini. */

let link = document.createElement('link');
let fontList = "https://fonts.googleapis.com/css?family=Archivo+Black|UnifrakturMaguntia"; // ce qui vient de googlefonts
link.href = fontList
link.rel = "stylesheet"
document.body.appendChild(link);

let fonts = ["Archivo Black", "UnifrakturMaguntia"]

let slotSize = 200;
let marginX;
let marginY;


function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1);

	marginX = width - int(width / slotSize) * slotSize
	marginY = height - int(height / slotSize) * slotSize
	textFont(fonts[1])
}

function draw() {
	background(1,22,39,10)
	for (let i = marginX / 2 + slotSize / 2; i < width - marginX / 2; i = i + slotSize) {
		for (let j = marginY / 2 + slotSize / 2; j < height - marginY / 2; j = j + slotSize) {
			
				
				push()
				
				translate(i, j)
				rotate(millis() / 1000.0);
				stroke(255,0,34,90);
				strokeWeight(2);
				noFill();
				textSize(50);
				textAlign(LEFT, CENTER);
				text("fiona", slotSize / 4, 0);
			
				if(mouseIsPressed == true){
				rotate(millis() / -500.0);
				stroke(135, 187, 162,90);
				strokeWeight(2);
				noFill();
				textSize(50);
				textAlign(LEFT, CENTER);
				text("bernaerts", slotSize / 4, 0);
					
				rotate(millis() / 100.0);
			  stroke(255,255,255,50);
				strokeWeight(2);
				noFill();
				textSize(50);
				textAlign(RIGHT, CENTER);
				text("ossian", slotSize / 4, 0);
				}
				
			
			
			pop()
		}
	}
}

function mousePressed(){
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
	marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}