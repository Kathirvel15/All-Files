function generate()
{
    var num='1234567890';
    var numb="";
    for(let i=0;i<5;i++)
    {
      numb=numb+num[Math.floor(Math.random()*10)];
      document.getElementById("dem").innerHTML=numb;
    }
}