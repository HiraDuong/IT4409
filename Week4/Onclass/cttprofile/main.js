var tt_text = document.getElementById('tt-text');
var ql_text = document.getElementById('ql-text');

const nav2IdArray = ['ll-text', 'qd-text', 'kt-text', 'lh-text', 'nx-text', 'hdtg-text'];


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

function display_content_two(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === 'none') {

    for (let i = 0; i < nav2IdArray.length; i++) {
      if(nav2IdArray[i] !== elementId){
        var curElement = document.getElementById(nav2IdArray[i])
        curElement.style.display = 'none';
      }
    }
    element.style.display = 'block';

  }


}
var isSearchBoxOpen = false;


function toggleSearch() {
  var searchBox = document.querySelector('.search-box');
  if (!isSearchBoxOpen) {
    searchBox.style.width = '200px';
    isSearchBoxOpen = true;
  }
}