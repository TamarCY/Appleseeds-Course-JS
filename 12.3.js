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

   

   

   school.findPerson = function (type, id){
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
                    console.log(element)
                    return element
                }
            }
        }
        
    }
    
    school.findPerson("student", 13)