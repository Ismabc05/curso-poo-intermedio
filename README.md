# 📚 Curso de Programación Orientada a Objetos (POO) - Platzi

Este repositorio contiene las notas, ejercicios y prácticas realizadas durante los cursos de **Programación Orientada a Objetos (POO)** de Platzi.

---

## 🚀 Descripción

Este proyecto es un seguimiento personal de los cursos de POO de Platzi, donde se aplican los conceptos fundamentales de la programación orientada a objetos mediante ejemplos prácticos y ejercicios en código.

El objetivo es reforzar el aprendizaje y dejar un repositorio de consulta con lo aprendido.

---

## 🎯 Objetivos del repositorio

- Documentar el progreso de los cursos
- Practicar conceptos de POO con código real
- Reforzar el aprendizaje con ejercicios
- Tener ejemplos reutilizables para futuros proyectos

---

## 🧠 Contenidos del curso

## 🔰 POO Básico

### 1. Introducción a la POO
- Qué es la programación orientada a objetos
- Ventajas frente a programación estructurada

### 2. Clases y Objetos
- Definición de clases
- Instanciación de objetos
- Atributos y métodos

### 3. Encapsulación
- Modificadores de acceso
- Getters y setters
- Protección de datos

### 4. Herencia
- Reutilización de código
- Clases padre e hijas
- Sobreescritura de métodos

### 5. Polimorfismo
- Métodos polimórficos
- Sobrecarga y sobrescritura

### 6. Abstracción
- Clases abstractas
- Interfaces

---

## 🧩 POO Intermedio

### 1. Relaciones entre clases
- Asociación
- Agregación
- Composición

### 2. Principios SOLID (introducción)
- Responsabilidad única
- Abierto/cerrado
- Sustitución de Liskov

### 3. Clases más avanzadas
- Clases anidadas
- Clases internas

### 4. Manejo de excepciones en POO
- Try / catch
- Excepciones personalizadas

### 5. Buenas prácticas
- Código limpio (Clean Code)
- Reutilización de código
- Bajo acoplamiento y alta cohesión

---

## 💻 Lenguaje utilizado

- Java / Python / C++ *(según corresponda al curso)*  
- IDE: Visual Studio Code / IntelliJ / PyCharm

---

## 🧪 Ejemplo de código

```java
class Persona {
    private String nombre;
    private int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public void saludar() {
        System.out.println("Hola, soy " + nombre);
    }
}

public class Main {
    public static void main(String[] args) {
        Persona persona = new Persona("Juan", 20);
        persona.saludar();
    }
}
