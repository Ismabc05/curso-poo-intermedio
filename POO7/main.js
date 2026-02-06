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

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        facebook: undefined,
        instagram: undefined,
    },

};

const juan = deepCopy(studentBase)
Object.seal(juan);
juan.name = "Juanito";
Object.isSealed(juan) // los que hace es verificar si las propiedades de nuestro objeto tiene el configurable en false
Object.freeze(juan)// lo mismo  que isSealed pero tambien los writablle en false

/* 
✅ ÚSALO cuando:

Solo necesitas datos

Quieres una estructura fija

Quieres evitar mutaciones

No necesitas métodos
*/