
function deleteNote(id){
 var ajaxRequest = {
   url: '/notes/' + id,
   method:'delete',
   success: function() {
     window.location.reload();
   }
 };
 $.ajax(ajaxRequest);
}

function sendAlert(){
  alert("custom js at work ")
}