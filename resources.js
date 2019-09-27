function httpRequest(method, url, callback, headers, body) {
    let request = new XMLHttpRequest();
    request.open(method, url);
    request.onload = () => {
        callback(request);
    };
    let key ="";
    for (key in headers) {
        request.setRequestHeader(key, headers[key]);
    }
    body ? request.send(body) : request.send();
}

let idHero = "";
let idTeam = "";

function heroHTML() {
    location.href = "heros.html";
}

function teamHTML() {
    location.href = "teams.html";
}

function newTableEntries(table) {
    let row = document.createElement("tr");
    for (let i = 1; i < arguments.length; i++) {
        let box = document.createElement("td");
        box.innerHTML = arguments[i];
        row.append(box);
    }
    table.append(row);
}

function dropBoxEntries(select, data, value) {
    for (let i = 0; i < data.length; i++) {
        let entry = document.createElement("OPTION");
        entry.innerHTML = data[i][value];
        select.append(entry);
    }
}

function searchTable(input, table) {
    input = document.getElementById(input);
    table = document.getElementById(table);
    let  filter = input.value.toUpperCase();
    let  tr = table.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        let  td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            let  txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}