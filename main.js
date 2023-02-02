var SpeechRecognition= window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
 function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

 }

 recognition.onresult=function(event){
    console.log(event);
    var content= event.results[0][0].transcript;
    console.log(content);
    setTimeout(function()
    {
      document.getElementById("textbox").innerHTML=content;
      speak();
    },2000
    );
    
    speak();
 }
 function speak(){
   var synth= window.speechSynthesis;
   var speakdata= document.getElementById("textbox").value;
   var utterthis= new SpeechSynthesisUtterance(speakdata);

   synth.speak(utterthis);
 }