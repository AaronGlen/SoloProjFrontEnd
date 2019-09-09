 

function homePage(){

location.href = "home.html";
}

function heroPage(){

location.href = "heros.html";
}

function teamPage(){

location.href = "teams.html";
}
const formDataObj = {};
    
function handleSubmit(form){
   
    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    console.log(formDataObj);
    newTableEntries(formDataObj["heroName"],formDataObj["issueOne"],formDataObj["description"]);
    return false;
}

const heroTable = document.getElementById("heroTable");

function newTableEntries(){
    row = document.createElement("tr")
    for( let i =0; i <arguments.length;i++){
        box = document.createElement("td")
        box.innerHTML = arguments[i];
        row.append(box)
    }
    heroTable.append(row)

}

function newInfo(text, data, section) {
    test = document.createElement('p');
    test.innerHTML = text + data;
    section.append(test);
}