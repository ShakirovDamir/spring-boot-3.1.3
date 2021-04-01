function editUser() {

    fetch('http://localhost:8080/update', {
        method: 'PUT',
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
            id: window.formEditUser.editID.value,
            name: window.formEditUser.editName.value,
            lastName: window.formEditUser.editLastName.value,
            age: window.formEditUser.editAge.value,
            email: window.formEditUser.editEmail.value,
            password: window.formEditUser.editPassword.value,
            roles: window.formEditUser.editRoles.value
        }),

    })
        .then(response => response.json())
        .then(user => {
            showAllUsers();
        });
}