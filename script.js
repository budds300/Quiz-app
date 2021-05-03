const quizData=[{
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
const a_text= document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn= document.getElementById("submit");

let currentQuiz= 0;
let answer = undefined; 
let score = 0;

loadQuiz();
function loadQuiz(){
    deselectAnswers();
    const currentQuizData= quizData[currentQuiz];

    questionE1.innerText= currentQuizData.quiz;
    a_text.innerText= currentQuizData.a;
    b_text.innerText= currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText= currentQuizData.d;
}
function getSelected(){
    const answerE1s = document.querySelectorAll(".answer");
    let answer= undefined;
    
    answerE1s.forEach((answerE1)=>{
        if (answerE1.checked){
            answer=answerE1.id;
        }
    });
    return answer;
}
function deselectAnswers(){
    const answerE1s=document.querySelectorAll(".answer");
    answerE1s.forEach((answerE1)=>{
        answerE1.checked=false;
    });
}
submitBtn.addEventListener("click",()=>{
    const answer= getSelected();
    console.log(answer);
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
        quizContainer.innerHTML = `<h2 style="padding: 1rem;text-align:center;">You have answered correctly ${score}/${quizData.length} questions</h2>
        <button onClick="location.reload()">Reload</button>` 
        }
    }
    loadQuiz();

})
