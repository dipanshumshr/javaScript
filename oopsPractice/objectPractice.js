const student = {
    name : "Dipanshu",
    roll : 36,
    subject : ["Maths","Science","Hindi","English"],

    studentID : function(){
        return `${this.name}${this.roll}ID`;
    }
}

console.log(student.studentID());


function enrollStudent(name,roll , subject)
{
    this.name = name;
    this.roll = roll;
    this.subject = subject;


    console.log(this)

    this.studentID = function(){
        return `${this.name}${this.roll}ID`;
    }

    return this;
}

const studentOne = new enrollStudent("Ritik",21, ["Maths","Science","Hindi","English"]);

const studentTwo = new enrollStudent("Hitesh", 45, ["Maths","Science","Hindi","English"]);

console.log(studentOne.name);

console.log(studentOne.studentID());

console.log(studentTwo.studentID());
