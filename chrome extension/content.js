
var elmId = null;

document.addEventListener("contextmenu", function(event){
  console.log(event);
    elmId = event.target;
}, true);
chrome.runtime.onMessage.addListener( (req,snd,rsp) => {
    var result = null;
    if(req.editable){
      result = window.prompt("Enter data");
      console.log(document.getElementsByName(elmId.name));
      document.getElementsByName(elmId.name)[0].value = result;
    } else {
      alert("Field not editable");
    }
    rsp( result );
} );
