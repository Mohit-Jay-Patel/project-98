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
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
    speak();
    }
 }
 function speak(){
   var synth= window.speechSynthesis;
   var speakdata= "taking your selfie in 5 seconds";
   var utterthis= new SpeechSynthesisUtterance(speakdata);

   synth.speak(utterthis);
   
   Webcam.attach(camera);
setTimeout(function(){
   take_snapshot();
   save();
},5000);

   
 }
 Webcam.set({
   width: 360,
   height: 250,
   image_format: 'png',
   png_quality: 90
});
var camera= document.getElementById("webcam");

function take_snapshot(){
 Webcam.snap(function(data_uri){
   document.getElementById("output").innerHTML="<img id='image' src='"+data_uri+"'>";
 });
}
function save(){
   var link=document.getElementById("hyperlink");
   var image=document.getElementById("image").src;
   link.href=image;
   link.click();

}