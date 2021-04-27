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
            showAllUsers();
            showAllRoles();
        });
}


