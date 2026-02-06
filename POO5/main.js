
const obj1 = {
    a: "a",
    b: "b",
    c: {
    d: "d",
        e: "e",
    }
};


function isObject(subject) {
    return typeof subject ==  "object";
}

function isArray(subject) {
    return Array.isArray(subject)
}

function deppCopy(subject){
    let copySubject;
    
    const subjectIsObject = isObject(subject)
    const subjectIsArray = isArray(subject)  

    if(subjectIsArray) {
        copySubject = [];
    }else if(subjectIsObject){
        copySubject = {};
    } else{
        return subject
    }

    for(key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deppCopy(subject[key])
        }else {
            if(subjectIsArray) {
                copySubject.push(subject[key]);
            }else{
                copySubject[key] = subject[key]
            }

        }
    }

    return copySubject
}

/*La función deepCopy revisa si el valor que recibe es un objeto o un array.
Si es un objeto, crea un objeto vacío; si es un array, crea un array vacío;
y si no es ninguno, simplemente devuelve el valor.
Luego recorre cada propiedad del objeto original.
Si esa propiedad también es un objeto o un array, llama de nuevo a deepCopy (recursividad).
Si no, copia el valor directamente.
Al final retorna la copia completa, con todos los niveles duplicados sin compartir memoria con el original.*/


// Otras opciones:
/*
    Shallow copy: el problema es que cuando hay objetos dentro de objetos se copian en los dos
    JSON stringfy y parse cuando hay metodos no los reconocey los omite
    Object.create: no copia objetos, si no prototipos
*/