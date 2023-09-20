function setap()
{
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classfyCanvas);
    synth = window.SpeechSynthesis;
}

function preload()
{
    classifier = ml5.imageClassifier('DoodleNet');
}

function clearCanvas()
{
background("white")
}

function draw()
{
    strokeWeight(13);

    Stroke(0);

    if (mouseIsPressed) 
    {
    line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas()
{
classifier.classify(canvas, gotResult);
}

function gotResult(error, results)
{
if (error) {
    console.error(error);
}


console.log(results);
var result = results[0].label;
document.getElementById('label').innerHTML = 'nome: ' + result.replace('_', ' ');

document.getElementById('confidence').innerHTML = 'preçisão: ' + Math.round(results[0].confidence * 100) + '%';

utterThis = new SpeechSynthesisUtterance(result.replace('_', ' '));
synth.speak(utterThis); 

}
