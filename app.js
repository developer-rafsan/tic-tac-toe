const itemAll = document.querySelectorAll('.item');
const backSideAll = document.querySelectorAll('.back-side');

// sound system
const popSound = new Audio ('music/pop-sound.mp3')
const winSound = new Audio ('music/win-sound.mp3')
const gameSound = new Audio ('music/game-sound.mp3')
const lossSound = new Audio ('music/loss.mp3')

// gameSound.play();
gameSound.volume = 0.4;

let tran = '0';


// tran change
const tranChange = () => {
    return tran === '0' ? 'X' : '0'
}


const winLogic = () => {
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

    winCondetion.forEach(e => {
        if( (backSideAll[e[0]].innerText === backSideAll[e[1]].innerText) && (backSideAll[e[1]].innerText === backSideAll[e[2]].innerText) && (backSideAll[e[0]].innerText !== "") ) {
            document.querySelector('.game-over').style.height = "100vh";
            document.querySelector('.game-over').style.visibility = "visible";
            document.querySelector('.isWin').innerHTML = `Win Result - ${backSideAll[e[0]].innerText}`;
            winSound.play();
        }
    })

   
}



// click and flip card
itemAll.forEach(ele => {
    ele.addEventListener('click',()=>{
        if(!ele.querySelector('.back-side').innerText){
            popSound.play();
            tran = tranChange();
            document.querySelector(".titel").innerText = `Next Tran - ${tran === "X" ? "0" : "X"}`
            ele.querySelector('.back-side').innerHTML = tran;
            ele.querySelector('.inner-item').style.transform = "rotateY(180deg)";
            winLogic();
        }

        if((backSideAll[0].innerText !== "") && (backSideAll[1].innerText !== "") && (backSideAll[3].innerText !== "") && (backSideAll[4].innerText !== "") && (backSideAll[5].innerText !== "") && (backSideAll[6].innerText !== "") && (backSideAll[7].innerText !== "") && (backSideAll[8].innerText !== "")){
            document.querySelector('.game-over').style.height = "100vh";
            document.querySelector('.game-over').style.visibility = "visible";
            document.querySelector('.isWin').innerHTML = `Win Result loss`;
            document.querySelector("#sbgimg").src = "loss.svg";
            lossSound.play();
        }  
    })
})



// close funtion
const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click',()=>{
    location.reload();
})