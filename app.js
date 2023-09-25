const boxItem = document.querySelectorAll('.box-item');
const boxText = document.querySelectorAll('.box-text');
const gameOver = document.getElementById('game-over-sec');
const winResult = document.querySelector('.win-result');
const winImg = document.getElementById('win-svg');


// music system
const popSound = new Audio ("music/pop-sound.mp3")
const winSound = new Audio ("music/win-sound.mp3")
const bgSound = new Audio ("music/game-sound.mp3")

bgSound.play();
bgSound.loop = true;
bgSound.volume = 0.5;

let tran = "X";

// change tran
const changeTran = ()=>{
    return tran === "X" ? "0" : "X"
}

// wining logic
const winingLogic = ()=>{
    const winCondetion = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    winCondetion.forEach(e =>{
        if((boxText[e[0]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[1]].innerHTML === boxText[e[2]].innerHTML) && (boxText[e[0]].innerHTML !== "")){
            gameOver.style.visibility = "visible";
            gameOver.style.height = "100%";
            winImg.style.width = "300px";
            winResult.innerHTML =` win - ${boxText[e[0]].innerHTML}`;
            winSound.play()
        }
    })
    
}

// Game logic
boxItem.forEach(ele =>{
    ele.addEventListener(
        "click",
        ()=>{
            if(ele.querySelector(".box-text").innerHTML === ""){
                tran = changeTran();
                ele.querySelector('.box-text').innerHTML = tran;
                winingLogic();
                document.getElementById('tranNext').innerHTML = `tran for ${tran === "X" ? "0" : "X"}`;
                popSound.play();
            }
        }
    )
})

// new game
const close = document.querySelector('.close');
close.addEventListener('click',()=>{
    location.reload();
})