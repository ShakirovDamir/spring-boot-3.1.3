function editUser() {
    let sel = document.getElementById("editRoles");
    let roles = [];
    for (let i = 0; i < sel.length; i++) {
        if(sel[i].selected){
            roles.push(sel[i].value);
        }
    }
    const user = {
        id: window.formEditUser.editID.value,
        name: window.formEditUser.editName.value,
        lastName: window.formEditUser.editLastName.value,
        age: window.formEditUser.editAge.value,
        email: window.formEditUser.editEmail.value,
        password: window.formEditUser.editPassword.value,
        roles: roles
    };

    fetch('http://localhost:8080/update', {
        method: 'PUT',
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(user),

    })
        .then(() => {
            let tBody = document.getElementById("tBody");
            let rowIndex = 0;
            for (let row of tBody.rows) {
                if (row.cells[0].innerHTML === user.id.toString()) {
                    break;
                }
                rowIndex++;
            }
            let rowEdit = tBody.rows[rowIndex];
            rowEdit.cells[0].innerHTML = user.id;
            rowEdit.cells[1].innerHTML = user.name;
            rowEdit.cells[2].innerHTML = user.lastName;
            rowEdit.cells[3].innerHTML = user.age;
            rowEdit.cells[4].innerHTML = user.email;

            let cell5 = rowEdit.cells[5];
            cell5.innerHTML = user.roles.join(' ');
            let cell6 = rowEdit.cells[6];
            cell6.innerHTML =
                '<button type="button" onclick="getModalEdit(' + user.id +')" class="btn btn-primary btn-sm">\n' +
                '   Edit</button>\n';

            let cell7 = rowEdit.cells[7];
            cell7.innerHTML =
                '<button type="button" onclick="getModalDelete(' + user.id +')" class="btn btn-danger btn-sm">' +
                'Delete</button>\n';
        });
}


