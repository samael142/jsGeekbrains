const chessTable = {
    parentElement: document.getElementById('chess__table'),
    drowTable() {
        rows = ['', 8, 7, 6, 5, 4, 3, 2, 1, '']
        cols = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '']
        for (row = 0; row < 10; row++) {
            divRow = document.createElement('div')
            divRow.className = 'row'
            this.parentElement.appendChild(divRow)
            for (cell = 0; cell < 10; cell++) {
                divCell = document.createElement('div')
                divCell.className = 'black__cell'
                if ((row + cell) % 2 === 0) {
                    divCell.className = 'white__cell'
                }
                if ((row === 0) || (row === 9)) {
                    divCell.className = 'transparent__cell'
                    divCell.innerHTML = cols[cell]
                }
                if ((cell === 0) || (cell === 9)) {
                    divCell.className = 'transparent__cell'
                    divCell.innerHTML = rows[row]
                }
                divRow.appendChild(divCell)
            }
        }
    }
}

chessTable.drowTable()