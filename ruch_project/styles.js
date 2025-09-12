(function(){
function setupToggle(toggleId){
const btn=document.getElementById(toggleId);
const nav=btn?.parentElement.querySelector('.nav');
if(!btn||!nav) return;
btn.addEventListener('click',()=>{
nav.style.display = nav.style.display==='flex' ? 'none' : 'flex';
});
}
setupToggle('menu-toggle');
setupToggle('menu-toggle-1');
setupToggle('menu-toggle-2');


// highlight current link
const links=document.querySelectorAll('.nav-link');
links.forEach(l=>{if(l.href===location.href)l.classList.add('active')});
})();