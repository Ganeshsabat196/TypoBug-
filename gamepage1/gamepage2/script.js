const timer = document.getElementById('stopwatch')
var appendsec=document.getElementById('s2');
var appendmin=document.getElementById('s1');

var min = 0;
var sec = 00;
var stoptime = true;

function startTime() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
function stpTime(){
  stoptime = true;
}
function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    timer.innerHTML = min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

// another part

const typingtext = document.getElementById("para") ;
const text= document.getElementById("inpfield1");
const para = 'The function of a paragraph is to mark a pause, setting the paragraph apart from what precedes it. If a paragraph is preceded by a title or subhead, the indent is superfluous and can therefore be omitted.';

let charindex=0;
let val = 0;
let alpha= para.length;

console.log(alpha);
alpha--;

const splt = para.split("").map((char)=>{
    const span = document.createElement("span");
    span.innerText = char;
    typingtext.appendChild(span);
    return span;
});

function start(){
  if (val === 0) {
    console.log ("done")
    startTime();
    val++;
  }
  
}

function run3(){
    const firstcharacter=splt[charindex];
    firstcharacter.classList.add('light');
}
run3();
function init(){
    firstcharacter.classList.remove('light');
    firstcharacter.classList.add('dark');

}


function run(){
    // const firstcharacter=splt[0];
    const run2=para[charindex];
    // console.log(firstcharacter)
    
    if (run2=== text.value[charindex]) {
        charindex++;
        if (run2===text.value[alpha]) {
            // console.log()
            end();
        }
        run3();
    
    }
    else{
        // console.log("incorrect")
        
    }
    console.log(text.value[charindex])
}

text.addEventListener("input",start);
text.addEventListener("input",run);
function end(){
  document.getElementById('inpfield1').value='';
    console.log('working')
    
}

// start();