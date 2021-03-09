export function setAni(el, time, classname) {
  setTimeout(function(){
    document.querySelector(el).classList.add(classname);
  },time);
}