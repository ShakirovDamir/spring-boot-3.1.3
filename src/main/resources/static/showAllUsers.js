showAllUsers();
showAllRoles();


function showAllUsers(){
    let tBody = document.getElementById("tBody");
    tBody.innerHTML = "";

    fetch('http://localhost:8080/getAllUsers')
        .then(response => response.json())
        .then(users => {
            users.forEach(function (user) {

                //заполняем таблицу информацией юзера
                var row = tBody.insertRow();
                var cell0 = row.insertCell();
                cell0.innerHTML = user.id;
                var cell1 = row.insertCell();
                cell1.innerHTML = user.name;
                var cell2 = row.insertCell();
                cell2.innerHTML = user.lastName;
                var cell3 = row.insertCell();
                cell3.innerHTML = user.age;
                var cell4 = row.insertCell();
                cell4.innerHTML = user.email;
                var cell5 = row.insertCell();
                cell5.innerHTML = getRolesFromUser(user).textContent;

                var cell6 = row.insertCell();
                cell6.innerHTML =
                    '<button type="button" onclick="getModalEdit(' + user.id +')" class="btn btn-primary btn-sm">\n' +
                    '   Edit</button>\n';

                var cell7 = row.insertCell();
                cell7.innerHTML =
                    '<button type="button" onclick="getModalDelete(' + user.id +')" class="btn btn-danger btn-sm">' +
                    'Delete</button>\n';
            })
        });
}

function showAllRoles(){
    let selectCreate = document.getElementById("newRoles");
    let selectEdit = document.getElementById("editRoles");
    let selectDelete = document.getElementById("deleteRoles");
    fetch('http://localhost:8080/getAllRoles')
        .then(response => response.json())
        .then(roles => {
            roles.forEach(function (role) {
                let option = document.createElement("option");
                option.text = role;
                selectCreate.add(option);

                let option1 = document.createElement("option");
                option1.text = role;
                selectEdit.add(option1);

                let option2 = document.createElement("option");
                option2.text = role;
                selectDelete.add(option2);

                //selectEdit.add(option);
                //selectDelete.add(option);
            })
        });
}

