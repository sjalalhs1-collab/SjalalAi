(function(){var K='aj-skin',b=document.body;if(!b.classList.contains('water')&&!b.classList.contains('fusion'))return;var s='water';try{s=localStorage.getItem(K)||'water'}catch(e){}
function ap(){b.classList.remove('water','fusion');b.classList.add(s);t.textContent=s=='water'?'\ud83d\udd25 Fusion design':'\ud83d\udca7 Water design'}
var t=document.createElement('button');t.type='button';t.setAttribute('aria-label','Switch design');t.style.cssText='position:fixed;right:14px;bottom:14px;z-index:99;padding:10px 14px;border-radius:20px;border:1px solid rgba(255,255,255,.4);background:rgba(10,20,40,.78);color:#fff;font:700 13px system-ui;cursor:pointer';
t.onclick=function(){s=s=='water'?'fusion':'water';try{localStorage.setItem(K,s)}catch(e){}ap()};b.appendChild(t);ap()})();
