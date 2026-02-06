// Duck typing es comprobar que un objeto tiene la estructura o el comportamiento esperado,
// sin importar su tipo; por ejemplo, verificar que los elementos de learningPath
// tengan las propiedades necesarias para funcionar como rutas.


function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createlearningPath({
    name = requiredParam("name"),
    courses = [],

}){
    const private = {
        "_name": name,
        "_courses": courses,
    };

    const public = {
        get name(){
      return private["_name"];
    },

    set name(newName){
      if(newName.length != 0){
        private["_name"] = newName;
      }else{
        console.warn("Tu nombre debe tener al menos un caracter")
      }
    },

    get courses(){
      return private["_courses"];
    },
};

    return public;


}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    "_name": name,
    "_learningPaths": learningPaths,
  };
  const public = {
    email,
    age,
    approvedCourses,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },

    get name(){
      return private["_name"];
    },

    set name(newName){
      if(newName.length != 0){
        private["_name"] = newName;
      }else{
        console.warn("Tu nombre debe tener al menos un caracter")
      }
    },

    get learningPaths(){
      return private["_learningPaths"];
    },
// ESTO ES DUCKTYPING
// // Con duck typing no validamos de dónde viene el objeto,
// sino que verificamos que tenga la estructura necesaria
// para comportarse como un learningPath.

    set learningPaths(newLP){
    if(!newLP.name){
        console.warn("Tu LP no tiene la propiedad name");
        return;
    }

    if(!newLP.courses){
        console.warn("Tu LP no tiene la courses");
        return;
    }

    if(!isArray(newLP.courses)){
        console.warn("Tu LP no es una lista de cursos");
        return;
    }


    private["_learningPaths"].push(newLP);

    },
    
  };

  return public;
}

const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });