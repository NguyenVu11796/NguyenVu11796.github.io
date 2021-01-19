function check() {
    var c=0;
    var q1=document.survey.question1.value;
    var q2=document.survey.question2.value;
    var q3=document.survey.question3.value;
    var q4=document.survey.question4.value;
    var q5=document.survey.question5.value;
    var q6=document.survey.question6.value;
    var q7=document.survey.question7.value;
    var q8=document.survey.question8.value;
    var q9=document.survey.question9.value;
    var q10=document.survey.question10.value;
    var result=document.getElementById('result');
    var survey=document.getElementById("survey");
    if (q1=="text") {c++}
    if (q2=="text") {c++}
    if (q3=="text") {c++}
    if (q4=="text") {c++}
    if (q5=="text") {c++}
    if (q6=="text") {c++}
    if (q7=="text") {c++}
    if (q8=="text") {c++}
    if (q9=="text") {c++}
    if (q10=="text") {c++}
   survey.style.display="none";
    
   if (c<5) {
       result.textContent="You are the VIDEO learner !!!";
       var str = "Click here to try to learn with video";
       var link = str.link("/video.html");
       var str1 = "Do the Survey again.";
       var link1 = str1.link("/survey.html");
       document.getElementById('a').innerHTML = link;
       document.getElementById('again').innerHTML = link1;

   }
   if (c==5){
        result.textContent="You can learn with both video or text !!!"
        var str1 = "Do the Survey again.";
        var link1 = str1.link("/survey.html");
        document.getElementById('again').innerHTML = link1;

   } 
   if (c>5) {
        result.textContent="You are the TEXT learner"
        var str = "Click here to try to learn with text only";
        var link = str.link("/text.html");
        var str1 = "Do the Survey again.";
        var link1 = str1.link("/survey.html");
       document.getElementById('a').innerHTML = link;
       document.getElementById('again').innerHTML = link1;

   }

}