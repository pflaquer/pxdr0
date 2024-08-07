let ASCII = `

░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓███████▓▒░░▒▓████████▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓███████▓▒░ ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░ 
                                                    

`
let HTML = `

<div class="noise"></div>
<div class="terminal">
<pre>
          ${ASCII}
</pre>
Connecting...<br>
<div class="sequence">Connection Established!<br></div>
  <div class="sequence">Connected to 192.168.0.1:80</div>
  <div class="rootshell">
<h2>@echo ROOT SHELL ACCESS GRANTED</h2>
  AVAILABLE COMMANDS:<br>
  <ul>
    <li>/contact</li>
    <li>/about</li>
    <li>/portfolio</li><br>
    ---------------------------------
  <div id="input" class="input">
  <p>CMD:<span id="cursor">|</span></p><input type="text">
  </input>
</div>
</div>
</input>

`

function App(){
  return HTML
}
document.body.innerHTML = App()
setTimeout(()=>{
   let rootshell = document.querySelector(".rootshell");
  rootshell.classList.toggle('visible');
  let divs = document.querySelectorAll(".sequence");
  divs.forEach((x)=>{
    x.classList.toggle('visible')
  });
 
  
},4000);
document.querySelector("input").addEventListener('input',()=>{
  if(document.querySelector("input").value == '/contact '){
    alert('Contact Me At')
  }
  else if(document.querySelector("input").value == '/about '){
    alert('L337 H@X0R')
  }
  else if(document.querySelector("input").value == '/portfolio '){
    alert('http://www.github.com/pxdr0/portfolio')
  }
})

var cursor = true;
var speed = 220;

setInterval(() => {
   if(cursor) {
     document.getElementById('cursor').style.opacity = 0;
     cursor = false;
   }else {
     document.getElementById('cursor').style.opacity = 1;
     cursor = true;
   }
}, speed);
