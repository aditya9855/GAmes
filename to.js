const boardRegion = document.querySelectorAll('#board span')
let vBoard = [];
let turnPLayer = "";

function updateTittle(){
    const playerInput = document.getElementsById(turnPlayer)
    document.getElementById('turnPlayer').innerHTML = playerInput.value;
    
}

function initialize(){
    vBoard = [['','',''],['','',''],['','','']]
    turnPLayer = 'player1'
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
    updateTittle()
    boardRegion.forEach(function (element){
        element.classList.remove('win')
        element.innerText = ''
        element.classList.add('cursor-pointer')
        element.addEventListener('click',handleBoardClick)

    })
}
function disableAllRegions(regions) {
    boardRegion.forEach(function (region) {
      region.classList.remove('cursor-pointer')
      region.removeEventListener('click', handleBoardClick)
    })
}

