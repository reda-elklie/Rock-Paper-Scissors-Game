let game = ['https://cdn-icons-png.flaticon.com/512/3562/3562093.png', 'https://cdn-icons-png.flaticon.com/512/7127/7127833.png', 'https://cdn-icons-png.flaticon.com/512/9534/9534501.png']
let button = document.querySelector("button")
let player1Score = 0;
let player2Score = 0;
let player1Losses = 0;
let player2Losses = 0;
let tr = document.querySelector("#try")
let sc = document.querySelector(".score")

let re = document.querySelector(".left").src = game[Math.floor(Math.random() * 3)];
let ce = document.querySelector(".right").src = game[Math.floor(Math.random() * 3)];


tr.addEventListener("click", function() {
    window.location.reload();
})

button.addEventListener("click", function() {
    sc.style.display = "flex"
    if (player1Losses < 3 && player2Losses < 3) {
        let player1Choice = game[Math.floor(Math.random() * 3)];
        let player2Choice = game[Math.floor(Math.random() * 3)];

        document.querySelector(".left").src = player1Choice;
        document.querySelector(".right").src = player2Choice;

        if (player1Choice === player2Choice) {
            // Tie game
            console.log("Tie game!");
        } else if (
            (player1Choice === game[0] && player2Choice === game[1]) ||
            (player1Choice === game[1] && player2Choice === game[2]) ||
            (player1Choice === game[2] && player2Choice === game[0])
        ) {
            // Player 2 wins
            console.log("Player 2 wins!");
            player2Score++;
            player1Losses++;
        } else {
            // Player 1 wins
            console.log("Player 1 wins!");
            player1Score++;
            player2Losses++;
        }

        document.querySelector(".lefft").textContent = `B : ${player1Score}`;
        document.querySelector(".rightt").textContent = `A : ${player2Score}`;

        if (player1Score === 3) {
            alert("Player B wins the game!");
            button.style.display = "none"
            tr.style.display = "block"
        } else if (player2Score === 3) {
            alert("Player A wins the game!");
            button.style.display = "none"
            tr.style.display = "block"
        }
    }
});