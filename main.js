//https://teachablemachine.withgoogle.com/models/X2RTl14BS/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true}),
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/X2RTl14BS/model.json', modelReady);
    }
    
    function modelReady(){
        classifier.classify(gotResults);
    }
    