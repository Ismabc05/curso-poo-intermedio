// la palabra static se usa en metodos o atributos de clases para llamarlas sin la necesidad de crear instancias

const juan = {
    name: "juan",
    age : 18,
    approvedCourses : ["Curso 1"], 
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};


console.log(Object.keys(juan)); 
console.log(Object.getOwnPropertyNames(juan)); 
console.log(Object.entries(juan)); // Muestra pares [propiedad, valor]. Devuelve un array de arrays.
// El push NO funciona porque Object.entries NO devuelve el objeto,
// sino una copia en forma de array.



 Object.defineProperty(juan, "pruebaNada", {
    value: "extraterrestres",
    writable: false,
    enumerable: false,
    configurable: false,
})

Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    writable: true,
    enumerable: false,  // si es false no va a aparecer en object.keys pero si es getOwnPropertyNames
    configurable: true,
})

Object.defineProperty(juan, "editor", {
    value: "VScode",
    writable: false, // no se puede cambiar el valor de la propiedad
    enumerable: true,
    configurable: true,
})

Object.defineProperty(juan, "terminal", {
    value: "WSL",
    writable: true,
    enumerable: true,
    configurable: false, // no permite borrar propiedades
})

console.log(Object.getOwnPropertyDescriptors(juan)); // / Muestra TODAS las propiedades del objeto:
 { value, writable, enumerable, configurable, get, set }



Object.seal(juan) // pone todas las propiedades con el configurable en false
 Object.freeze() // pone todas las propiedades con el configurable y el  writable en false

console.log(Object.getOwnPropertyDescriptors(juan));

// class
/*
✅ ÚSALO cuando:

Los objetos actúan

Hay métodos compartidos

Necesitas herencia

El dominio es claramente OOP
*/ 