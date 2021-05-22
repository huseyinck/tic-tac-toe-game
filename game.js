const blocks = document.querySelectorAll(".block");
const playerText = document.getElementById("player");
const errorText = document.getElementById("error");
let player = "X";
let gameOver = false;
let winner;

function oyunBasla() {


    playerText.textContent = `${player} Sırası`;
    // block class ının alıyor ve block diye bir değişken oluşturuyor ve koy fonksiyonunu ekliyor
    blocks.forEach(block => block.addEventListener("click", () => koy(block)));

}

// block değişkenini içini değiştirdiği kısım ve dolumu değilmi kontrol ediyor
function koy(block) {



    if (block.textContent === "") {

        block.textContent = player;
        turnPlayer();
    }
    else {

        errorText.textContent = "Block DOLU ";
        block.style.border = "2px solid red";
        setTimeout(() => {

            errorText.textContent = "";
            block.style.border = "1px solid black";

        }, 2500);
    }



    checkWin();
    checklost();
    if (gameOver == true) {



        playerText.textContent = `KAZANDI ${winner}`;
        blocks.forEach(block => block.style.pointerEvents = 'none');


    }



}

function turnPlayer() {


    if (player === "X") {


        player = "O";

        playerText.textContent = `${player} Sırası`;

        return;

    }

    else if (player === "O") {

        player = "X"

        playerText.textContent = `${player} Sırası`;




    }


}

function checkWin() {

    kontrolDuz();
    kontrolasagı();
    kontrolcapraz();

}


function checklost() {

    const values = [];
    blocks.forEach(block => values.push(block.textContent))
    if(!values.includes("")){

        playerText.textContent ="Berabere "
        blocks.forEach(block => block.style.pointerEvents = 'none');
    }

}

// değişken oluşturuyor ve bloklerın değişkenlerini yanındakiyle eşitmi değilmi diye bakıyor
function kontrolDuz() {


    let row1 = blocks[0].textContent == blocks[1].textContent &&
        blocks[0].textContent == blocks[2].textContent && blocks[0].textContent !== ""
    let row2 = blocks[3].textContent == blocks[4].textContent &&
        blocks[3].textContent == blocks[5].textContent && blocks[3].textContent !== ""
    let row3 = blocks[6].textContent == blocks[7].textContent &&
        blocks[6].textContent == blocks[8].textContent && blocks[6].textContent !== ""


    if (row1 || row2 || row3) {
        gameOver = true
    }

    if (row1) return winner = blocks[0].textContent
    if (row2) return winner = blocks[3].textContent
    if (row3) return winner = blocks[6].textContent



}

function kontrolasagı() {


    let col1 = blocks[0].textContent == blocks[3].textContent &&
        blocks[0].textContent == blocks[6].textContent && blocks[0].textContent !== ""
    let col2 = blocks[1].textContent == blocks[4].textContent &&
        blocks[1].textContent == blocks[7].textContent && blocks[1].textContent !== ""
    let col3 = blocks[2].textContent == blocks[5].textContent &&
        blocks[2].textContent == blocks[8].textContent && blocks[6].textContent !== ""


    if (col1 || col2 || col3) {
        gameOver = true
    }

    if (col1) return winner = blocks[0].textContent
    if (col2) return winner = blocks[1].textContent
    if (col3) return winner = blocks[2].textContent



}




function kontrolcapraz() {



    let cap1 = blocks[0].textContent == blocks[4].textContent &&
        blocks[0].textContent == blocks[8].textContent && blocks[0].textContent !== ""
    let cap2 = blocks[2].textContent == blocks[4].textContent &&
        blocks[2].textContent == blocks[6].textContent && blocks[2].textContent !== ""


    if (cap1 || cap2 ) {
        gameOver = true
    }

    if (cap1) return winner = blocks[0].textContent
    if (cap2) return winner = blocks[2].textContent




}
oyunBasla();