const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let board = Array(9).fill(null);

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (board[index] === null && !checkWin()) {
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            if (checkWin()) {
                setTimeout(() => alert(`${currentPlayer} wins!`), 100);
            } else if (board.every(cell => cell !== null)) {
                setTimeout(() => alert('It\'s a draw!'), 100);
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

resetButton.addEventListener('click', resetGame);

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winConditions.some(condition => {
        const [a, b, c] = condition;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    board.fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}
