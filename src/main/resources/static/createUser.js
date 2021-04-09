function createUser() {
    let sel = document.getElementById("newRoles");
    let roles = [];
    for (let i = 0; i < sel.length; i++) {
        if(sel[i].selected){
            roles.push(sel[i].value);
        }
    }
    const user = {
        name: window.formNewUser.newName.value,
        lastName: window.formNewUser.newLastName.value,
        age: window.formNewUser.newAge.value,
        email: window.formNewUser.newEmail.value,
        password: window.formNewUser.newPassword.value,
        roles: roles
    };
    fetch('http://localhost:8080/create', {
        method: 'POST',
        headers: {"Content-type": "application/json; charset=UTF-8"},
        // Метод JSON.stringify() преобразует значение JavaScript в строку JSON, возможно с заменой значений,
        // если указана функция замены, или с включением только определённых свойств, если указан массив замены.
        body: JSON.stringify(user),

    })
        .then(response => {
            window.formNewUser.newName.value = "";
            window.formNewUser.newLastName.value = "";
            window.formNewUser.newAge.value = "";
            window.formNewUser.newEmail.value = "";
            window.formNewUser.newPassword.value = "";
            window.formNewUser.newRoles.value = "";

            showAllUsers();
        });
}