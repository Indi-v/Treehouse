
var quizQuestions = [ ["Who is the best wife?", "maggie"], 
             ["Who is suppa sexy?", "maggie"], 
             ["What is the answer to all of theses questions?", "maggie"]
           ]
var answer;
var questionsRight =0;
var quizResults ;

for (i=0; i < quizQuestions.length; i++) {
   answer = prompt(quizQuestions[i][0])
   answer = answer.toLowerCase();
   if (answer === quizQuestions[i][1]) {
     questionsRight += 1;
     }
 }
 if (questionsRight===3) { 
   quizResults = "<h1>You da real MVP!</h1>"
 }
else {
  quizResults = "<h1>Why you so hard on yourself?!?!</h1>"
}

function print(message) {
  document.write(message);
}

print(quizResults);