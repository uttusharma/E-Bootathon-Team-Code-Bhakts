function startTutorial() {
  var next1 = document.getElementById("intro");
  var playground  = document.getElementById("slide1");
  next1.setAttribute("hidden", "true");
  playground.removeAttribute("hidden");
}
/*
            For Slide PUSH
*/
function gotoSlide2(){
    var slide = document.getElementById("slide1");
    var nextSlide = document.getElementById("slide2");
    slide.setAttribute("hidden","true");
    nextSlide.removeAttribute("hidden");
}
function pushC(){
    var codeC = document.getElementById("pushC");
    var codePy = document.getElementById("pushPy");
    codePy.setAttribute("hidden","true");
    codeC.removeAttribute("hidden");

}function pushPy(){
    var codeC = document.getElementById("pushC");
    var codePy = document.getElementById("pushPy");
    codeC.setAttribute("hidden","true");
    codePy.removeAttribute("hidden");
}
/*
            For Slide POP
*/
function gotoSlide3(){
    var slide = document.getElementById("slide2");
    var nextSlide = document.getElementById("slide3");
    slide.setAttribute("hidden","true");
    nextSlide.removeAttribute("hidden");
}
function popC(){
    var codeC = document.getElementById("popC");
    var codePy = document.getElementById("popPy");
    codePy.setAttribute("hidden","true");
    codeC.removeAttribute("hidden");

}function popPy(){
    var codeC = document.getElementById("popC");
    var codePy = document.getElementById("popPy");
    codeC.setAttribute("hidden","true");
    codePy.removeAttribute("hidden");
}
 






function gotoPlayground(){
    var slide = document.getElementById("slide3");
    var nextSlide = document.getElementById("container");
    slide.setAttribute("hidden","true");
    nextSlide.removeAttribute("hidden");
}