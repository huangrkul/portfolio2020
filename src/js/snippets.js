export function setAni(el, time, classname) {
  const timer = setTimeout(function(){
    document.querySelector(el).classList.add(classname);
  },time);
  return timer
}