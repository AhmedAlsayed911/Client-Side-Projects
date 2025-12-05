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

function displayAllStudents(students) {
    students.forEach(element => {
        document.write(`Name: ${element.name}, Age: ${element.age}, Course: ${element.Crs} , ${element.email}<br>`);
    });
}
// displayAllStudents(students);

function SearchByName(name) {
    students.forEach(element => {
        if (element.name.toLowerCase() === name.toLowerCase()) {
            document.write(`Name: ${element.name}, Age: ${element.age}, Course: ${element.Crs}<br>`);
        }
    });
}
// SearchByName("Ali");

function StudentsCounter(stu) {
    var countOfStudents = 0;
    stu.forEach(element => {
        countOfStudents++;
    });
    // document.write(countOfStudents);
    return countOfStudents;
}
// StudentsCounter(students);

function SearchByDept(dept) {
    students.forEach(element => {
        if (element.Crs.toLowerCase() === dept.toLowerCase()) {
            document.write(`Name: ${element.name}, Age: ${element.age}, Course: ${element.Crs}<br>`);
        }
    });
}
// SearchByDept("CS");

function GetYoungestStudent(std) {
    var minAge = 200;
    students.forEach(element => {
        if (element.age < minAge)
            minAge = element.age;
    });
    students.forEach(element => {
        if (minAge == element.age)
            document.write(`Name: ${element.name}, Age: ${element.age}, Course: ${element.Crs}<br>`);
    });
}
// GetYoungestStudent(students);


function SortStudentsByAge(stu) {
    sortedStudents = students;
    sortedStudents.sort(function (a, b) {
        return a.age - b.age;
    })
    // sortedStudents.forEach(element => {
    //     document.write(`Name: ${element.name}, Age: ${element.age}, Course: ${element.Crs}<br>`);
    // });
    return sortedStudents;
}
// SortStudentsByAge(students);


function StudentsNames(stu) {
    var studentNames = [];
    stu.forEach(element => {
        studentNames.push(element.name)
    });
    document.write(studentNames.join(", "));
}
// StudentsNames(students);

function CheckIfAllAgesAbove18(stu) {
    var test = stu.every(function (item) {
        return item.age > 0;
    })
    document.write(test);
}
// CheckIfAllAgesAbove18(students)


function StudentsWithSameCrs(stu) {
    var courses = {};
    var counter = 0;
    stu.forEach(element => {
        if (!courses[element.Crs]) {
            courses[element.Crs] = [];
        }
        courses[element.Crs].push(element.name);
    });
    for (var crs in courses) {
        if (courses[crs].length > 1){
            document.write(`Course: ${crs}, Students: ${courses[crs].join(" ,")}<br>`);
            counter++;
        }
    }
    if (counter == 0)
        document.write("No Students with Same Course<br>");
}
// StudentsWithSameCrs(students);


function CalcAgeAverage(stu) {
    var sum = 0;
    stu.forEach(element => {
        sum += element.age;
    });
    document.write(`Average of Age = ${parseFloat((sum) / (StudentsCounter(stu)))}`);
    return parseFloat(sum / StudentsCounter(stu));
}
// CalcAgeAverage(students);


function Top3Ages(stu) {
    var sortedDesc = stu.sort(function (a, b) {
        return b.age - a.age;
    })
    for (var i = 0; i < 3; i++)
        document.write(`Name: ${sortedDesc[i].name}, Age: ${sortedDesc[i].age}, Course: ${sortedDesc[i].Crs}<br>`);
}
// Top3Ages(students);


function FindSimilarNames(stu) {
    stu.forEach(element => {
        var lowerName = element.name.toLowerCase();
        if (!nameMap[lowerName]) {
            nameMap[lowerName] = [];
        }
        nameMap[lowerName].push(element.name);
    });
    for (var name in nameMap) {
        var counter = 0;
        if (nameMap[name].length > 1) {
            document.write(`Similar Names: ${nameMap[name].join(" ,")}<br>`);
            counter++;
        }
    }
    if (counter == 0)
        document.write("No Similar Names Found<br>");
}
// FindSimilarNames(students);


function ReverseStudentsList(stu) {
    var reversedStudents = [];
    for (var i = StudentsCounter(stu)-1; i >=0; i--) {
        reversedStudents.push(stu[i])
    }
    displayAllStudents(reversedStudents);
}
// ReverseStudentsList(students);


function AddProperty(stu){
    stu.forEach(element => {
        element.email = `${element.name.toLowerCase()}@iti.com`;
    });
    displayAllStudents(stu)
}
// AddProperty(students);
