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

// const studentBase = {
//   name: undefined,
//   email: undefined,
//   age: undefined,
//   approvedCourses: undefined,
//   learningPaths: undefined,
//   socialMedia: {
//     twitter: undefined,
//     instagram: undefined,
//     facebook: undefined,
//   },
// };

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
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
  };
  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    readName(){
      return private["_name"];
    },
    changeName(newName){
      private["_name"] = newName;
    },
  };

  Object.defineProperty(public, "readName",{
    configurable: false,
    writable: false,
  })

  Object.defineProperty(public, "changeName",{
    configurable: false,
    writable: false,
  })





  return public;
}

const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });


// Factory Function que implementa el Module Pattern y namespaces (estado privado con closures)
//RORO son las {} que sirven para que no importen el orden en el que definimos las propiedades cuando cremoa un objeto y factory sirve para crear objetos a partir de una funcion

/* 
✅ ÚSALO cuando:

Quieres crear objetos configurables

Hay valores por defecto

Necesitas parámetros obligatorios

Quieres independencia del orden

Prefieres composición*/