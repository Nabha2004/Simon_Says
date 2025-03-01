let gameSeq=[];
let userSeq=[];
let btns=["red","green","yellow","purple"];
let h4=document.createElement('h4');
let started=false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },250)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let idx=Math.floor(Math.random()*4);
    let randColor = btns[idx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    let btn = document.querySelector(`.${btns[idx]}`);
    btnFlash(btn);
}

function checkAns(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
        console.log("same value");
        setTimeout(levelUp,1000);}
        else{
            console.log("add one more");
        }
    }else{
        let body = document.querySelector('body');
        h4.innerText=`Your Max score till now: ${max(level)} `;
        body.appendChild(h4);
        h2.innerHTML=`Game over! Your score was <b>${level}</b><br> Press any key to start`;
        body.classList.add("redwrong");
        setTimeout(function(){
        body.classList.remove("redwrong");
        },150)
        reset();
    }

}


function btnPress(){
    let btn = this;
    userflash(btn);
    let color=btn.getAttribute("id");
    userSeq.push(color);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');

for(btn of allBtns){
btn.addEventListener("click",btnPress);
}

function reset(){
    userSeq=[];
    gameSeq=[];
    started=false;
    level=0;

}

function max(score){
    let arr=[];
    arr.push(score);
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}