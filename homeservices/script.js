
document.addEventListener('DOMContentLoaded',function(){
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}
  var f=document.querySelector('form.f');
  if(f){f.addEventListener('submit',function(ev){ev.preventDefault();var m=f.querySelector('.form-msg');if(m)m.textContent='Thanks! This is a sample site, so nothing was actually sent.';f.reset()})}
  var bs=document.querySelectorAll('.filters button');
  if(bs.length){bs.forEach(function(b){b.addEventListener('click',function(){
    bs.forEach(function(x){x.classList.remove('on')});b.classList.add('on');
    var c=b.getAttribute('data-filter');
    document.querySelectorAll('.tile').forEach(function(t){t.style.display=(c==='all'||t.getAttribute('data-cat')===c)?'':'none'});
  })})}
});
