const quizz=[{
    quiz:"Who founded the python language?",
    a: "Guido Van Rossum",
    b: "James Gosling",
    c: "Dennis Ritchie",
    d: "Ken Thomson",
    correct:"a",
},
{
    quiz: "How many stomach's does a cow have?",
    a:"1",
    b:"2",
    c:"4",
    d:"3",
},
{
    quiz:"What is HTML in full?",
    a: "Higher Transformative Machine Language",
    b: "HyperText Markup Language",
    c: "Javascript Notation",
    d: "none of the above",
    correct: "b",
},
{
    quiz: "The answers below shows different technologies and frameworks and the organisations that created them.Which of the answers is false?",
    a: "Python - FaceBook",
    b: "Bootstrap - Twitter",
    c: "Angular - Google",
    d: "TypeScript - Microsoft",
    correct: "a",
},
{
    quiz: "Which programming language is the most used as of 2020?",
    a: "Python",
    b: "C",
    c: "Java",
    d: "JavaScript",
    correct: "d",
}
]
const questionE1= document.getElementById("question");
const quizContainer= document.getElementById("quiz");
const a_text= document.getElementById("a-text");
const b_text=document.getElementById("b-text");
const c_text=document.getElementById("c-text");
const d_text=document.getElementById("d-text");
const submitBtn= document.getElementById("submit");