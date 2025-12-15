var students = [
    { name: "Ali", age: 20, Crs: "CS" },
    { name: "Sara", age: 22, Crs: "Math" },
    { name: "Omar", age: 19, Crs: "Physics" },
    { name: "Laila", age: 21, Crs: "CS" },
    { name: "Hassan", age: 23, Crs: "Engineering" },
    { name: "Mona", age: 20, Crs: "Biology" },
    { name: "Kareem", age: 24, Crs: "Math" },
    { name: "Noor", age: 18, Crs: "CS" },
    { name: "Noor", age: 18, Crs: "CS" }
];

function DisplayStudent(student) {
    var table = '<table border="1">';
    var row = student.length;

    table += '<tr>';
    table += '<td>Name</td>';
    table += '<td>Age</td>';
    table += '<td>Course</td>';
    table += '</tr>';

    for (var i = 0; i < row; i++) {
        table += '<tr>';
        table += '<td>' + student[i].name + '</td>';
        table += '<td>' + student[i].age + '</td>';
        table += '<td>' + student[i].Crs + '</td>';
        table += '</tr>';
    }

    table += '</table>';
    
    document.getElementById("tableContainer").innerHTML = table;
}

DisplayStudent(students);

var input = document.getElementsByTagName('input')[0];
var div = document.getElementById('std');
var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', searchStudent);

function searchStudent() {
    div.innerHTML = '';
    var searchValue = input.value.toLowerCase();
    var studentFound = students.filter(function (student) {
        return student.name.toLowerCase() === searchValue || student.Crs.toLowerCase() === searchValue;
    });
    if (studentFound.length > 0) {
        studentFound.forEach(element => {
            div.innerHTML += 'Name: ' + element.name + ', Age: ' + element.age + ', Course: ' + element.Crs + '<br>';
        });
    } else {
        div.innerHTML = 'No student found';
    }
}

function SortByAge() {
    var sorted = students.sort(function (a, b) {
        return a.age - b.age;
    });
    DisplayStudent(sorted);
}
function SortByName(){
    var sorted = students.sort(function(a,b){
        return a.name.localeCompare(b.name);
    })
    DisplayStudent(sorted)
}

var select = document.getElementById('sort');
select.addEventListener('change', function(){
    if(select.value == '0'){
        SortByName();
    }
    else if(select.value == '1'){
        SortByAge();
    }
})