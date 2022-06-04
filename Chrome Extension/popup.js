//var dem=document.getElementById("key");
//var parent=document.getElementById('ember75');
    //var children=parent.children[1];
    

    //var aaaa = document.getElementsByClassName('t-16.t-black.t-bold:first-child');
	//	dem.innerHTML=children.innerHTML; 
//  var a= document.getElementById("key").innerHTML=document.getElementsByClassName('t-16.t-black.t-bold')[0].innerHTML;
//  console.log(a);
//  window.addEventListener('load',(event)=>
//  {
//     document.getElementById("key").innerHTML=document.getElementsByClassName('t-16.t-black.t-bold').innerHTML;
//  });
 var a=document.getElementById("ember63");
key.innerHTML=a.innerHTML;
key.select();
key.setSelectionRange(0, 99999);
//var a=document.getElementById("ember63")
navigator.clipboard.writeText(key.value);