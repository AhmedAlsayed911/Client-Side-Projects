window.onload = function () {
    var students = [
        { id: "1", name: "Ali", age: 20, Crs: "CS" },
        { id: "2", name: "Sara", age: 22, Crs: "Math" },
        { id: "3", name: "Omar", age: 19, Crs: "Physics" },
        { id: "4", name: "Laila", age: 21, Crs: "CS" }
    ];
    
    var select = document.getElementById('studentSelect');
    var div = document.getElementById('std');

    select.addEventListener("change", function(){
        var studentId = this.value;

        var selectedStudent = students.find(function(stu){
            return stu.id === studentId;
        });
        if(selectedStudent){
            div.innerText = `Student name = ${selectedStudent.name} Age = ${selectedStudent.age} Course : ${selectedStudent.Crs}`
        }
        else
            div.innerText = "Invalid student!";
    })
}

