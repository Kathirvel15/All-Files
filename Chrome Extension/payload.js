var result="";
var some=document.getElementsByClassName('t-16 t-black t-bold');
for(var i=0;i<some.length;i++)
{
    result+=some[i].innerHTML;
}
console.log(result);
chrome.runtime.sendMessage(document.getElementsByClassName('t-16 t-black t-bold'));
console.log("gggg");