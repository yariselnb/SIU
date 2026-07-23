
const cv=document.getElementById('bg'),x=cv.getContext('2d');
function r(){cv.width=innerWidth;cv.height=innerHeight}r();onresize=r;
let pts=[...Array(80)].map(()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,v:0.3+Math.random()}));
function a(){x.clearRect(0,0,cv.width,cv.height);x.fillStyle='#33dfff';pts.forEach(p=>{p.y+=p.v;if(p.y>cv.height)p.y=0;x.beginPath();x.arc(p.x,p.y,1.6,0,7);x.fill()});requestAnimationFrame(a)}a();
document.querySelectorAll('.count').forEach(e=>{let t=+e.dataset.target,c=0;let i=setInterval(()=>{c++;e.textContent=c;if(c>=t)clearInterval(i)},20)});
new Chart(document.getElementById('c'),{type:'radar',data:{labels:['Presupuesto','Estadísticas','Automatización','Coordinación','Procesos','Planificación'],datasets:[{data:[95,98,90,94,96,99]}]},options:{plugins:{legend:{display:false}},scales:{r:{suggestedMax:100}}}});
