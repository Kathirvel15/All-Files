var hide=document.getElementById("hide");
var button="success";
var ques=document.getElementById("ques");
function generate()
{
if(button=="success")
{
hide.style.display="none";
ques.style.display="block";
}
}
var pos=0,correct=0,question,a,b,c,choices,choice;
var quizz=document.getElementById("quizz");
var test=document.getElementById("test");
var questions=[
{
    question:"what is your name?",
    a:"kathirvel",
    b:"kathir",
    c:"vel",
    answer:"A"
},
{
    question:"Blood Group",
    a:"A+",
    b:"B+",
    c:"O+",
    answer:"A"
},
{
    question:"Phone Number",
    a:"12345",
    b:"67890",
    c:"6385822424",
    answer:"C"
},
{
    question:"Age",
    a:"24",
    b:"67",
    c:"21",
    answer:"C"
}
];
function kathir()
{
    if(pos>=questions.length)
    {
        test.innerHTML="You got "+correct+" of "+questions.length+" questions correct";
      quizz.innerHTML="Test Completed";
      return false;
    }
   quizz.innerHTML="Question "+(pos+1)+" of "+questions.length;
   test.innerHTML=questions[pos].question+"<br>";
   test.innerHTML+="<input type='radio' name='choices' value='A'>"+questions[pos].a+"<br>";
   test.innerHTML+="<input type='radio' name='choices' value='B'>"+questions[pos].b+"<br>";
   test.innerHTML+="<input type='radio' name='choices' value='C'>"+questions[pos].c+"<br><br>";
   test.innerHTML+="<button onclick='my()'>Submit Here</button>";
}
function my()
{
    choices=document.getElementsByName("choices");
    for(var i=0;i<choices.length;i++)
    {
        if(choices[i].checked)
        {
            choice=choices[i].value;
        }
    }
    if(choice==questions[pos].answer)
    {
        correct++;
    }
    pos++;
    kathir();
}
window.addEventListener("load",kathir);