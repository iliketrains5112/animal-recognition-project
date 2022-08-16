//https://teachablemachine.withgoogle.com/models/X2RTl14BS/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true}),
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/X2RTl14BS/model.json', modelReady);
    }
    
    function modelReady(){
        classifier.classify(gotResults);
    }
    
    function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML= 'I can hear '+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy '+(results[0].confidence*100).toFixed(2)+"%";
        rgb_red=Math.floor(Math.random()*256);
        rgb_green=Math.floor(Math.random()*256);
        rgb_blue=Math.floor(Math.random()*256);
    
        document.getElementById("result_label").style.color="rgb("+rgb_red+","+rgb_green+","+rgb_blue+")";
        document.getElementById("result_confidence").style.color="rgb("+rgb_red+","+rgb_green+","+rgb_blue+")";
    
        image=document.getElementById("listen_gif");
    
        if (results[0].label=="Bark"){
            image.src="dog.gif";
        }
    
        else if (results[0].label=="Meow"){
            image.src="cat.gif";
        }
    
        else if (results[0].label=="Neigh"){
            image.src="horse.gif";
        }
    
        else{
            image.src="listen_gif.gif";
        }
    }
    }