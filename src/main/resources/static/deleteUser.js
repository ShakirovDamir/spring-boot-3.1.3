function deleteUser(id) {
    fetch('http://localhost:8080/delete/' + id, {
        method: 'DELETE',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => {
            let tBody = document.getElementById("tBody");
            let rowIndex = 0;
            for (let row of tBody.rows) {
                if (row.cells[0].innerHTML === id.toString()) {
                    break;
                }
                rowIndex++;
            }
            tBody.deleteRow(rowIndex);
        });
}