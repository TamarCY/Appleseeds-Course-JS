

const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
   };

   

   school.findPerson = (type, id) => {
    let whichArr = type === "teacher" ? "teachers" : "students";
    return school[whichArr].find(person => person.id === id);
}

   school.findPerson2 = function (type, id){
        if (type === "student"){
            for(let element of this.students){
                if(element.id === id){
                    console.log(element)
                    return element
                }
            }
        } else if (type === "teacher"){
            for(let element of this.teachers){
                if(element.id === id){
                    return element
                }
            }
        }
        
    }
    
//find a teacher that teach the subject && have capasity 
//      find student
//      add student to teacher
// didnt find? return   “Sorry,no available teachers left”
    
school.assignStudent = (studentId, subject) => {
        let student = school.findPerson("student", studentId);
        let teacher = school.teachers.find( el =>  el.subjects.includes(subject) && el.capacityLeft > 0)
        if (!teacher){
            return "Sorry,no available teachers left"
        }
        teacher.students.push(student)
        teacher.capacityLeft--
        return
    }
    
console.log(school.assignStudent( 10 ,"physics")) 
console.log(school.teachers)
console.log(school.teachers[0].students)

