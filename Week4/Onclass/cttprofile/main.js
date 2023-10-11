var tt_text = document.getElementById('tt-text');
var ql_text = document.getElementById('ql-text');

function display_content(elementId) {
  var element = document.getElementById(elementId);
  if(element == tt_text){
    if (tt_text.style.display === 'none') {
      tt_text.style.display = 'block';
      ql_text.style.display = 'none';
    } 
  }
  if(element == ql_text){
    if (ql_text.style.display === 'none') {
      ql_text.style.display = 'block';
      tt_text.style.display = 'none';
    } 
  }
 
}
