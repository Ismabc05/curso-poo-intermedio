class Course{
    constructor({
        name,
        isFree = false,
        lang = "spanish",
    }){
        this.name = name;
        this.isFree = isFree;
        this.lang = lang;
    }
}

class LearningPath{
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
}

class Student{
    constructor({
        name,
        email,
        username,
        LearningPaths = [],
        approvedCourses = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this._LearningPaths = [];
        this.approvedCourses = approvedCourses;

        LearningPaths.forEach(lp => { // Este bucle valida 1 por uno los elementos que hay en learningPath pasando por el setter
            this.LearningPaths = lp;
        });
    }
    get LearningPaths(){
        return [...this._LearningPaths]; // Crea un array nuevo y protege el array interno
    }
    set LearningPaths(newLearningPath){
        if(newLearningPath instanceof LearningPath){
            this._LearningPaths.push(newLearningPath);
        }else{
            console.warn("Esto no es una ruta correcta")
        }
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props)
    }
    approvedCourse(course){
        if(course.isFree){
            this.approvedCourses.push(course);
        }else{
            console.warn("Este curso es de pago")
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props)
    }
    approvedCourse(course){
        if(course.lang == "english"){
            this.approvedCourses.push(course);
        }else{
            console.warn("Este curso es de pago")
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props)
    }
    approvedCourse(course){
       this.approvedCourses.push(course);
        }
    }

const cursoJavaScript = new Course({ name: "Curso de JavaScript", isFree: true });
const cursoHtml = new Course({ name: "Curso de HTML", lang: "english"});

const rutaProgramacion = new LearningPath({name: "Ruta de Programacion", courses: [cursoJavaScript, cursoHtml]})

const ismael = new Student({name: "Ismael", email: "ismaelbedmarcejas@gmail.com", username: "ismael05", LearningPaths: [rutaProgramacion], approvedCourses: [cursoJavaScript]})