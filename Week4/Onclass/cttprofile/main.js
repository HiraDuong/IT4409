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

// chart
const xValues = ["20201", "20202", "20211", "20212", "20221", "20222"];
const tcValues = [10, 23, 46, 70, 92, 112];
const diemValues = [4, 4, 4, 4, 4, 4];

new Chart("htChart", {
  type: "bar",
  data: {
    datasets: [
     
      {
        type: 'line',
        yAxisID: 'B',
        fill: false,
        lineTension: 0,
        data: diemValues,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        borderWidth: 2, 
        pointRadius: 5, 
        pointHoverRadius: 7, 
        label:'CPA',
      },{
        type: 'line',
        yAxisID: 'B',
        fill: false,
        lineTension: 0,
        data: diemValues,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        borderWidth: 2, 
        pointRadius: 5, 
        pointHoverRadius: 7, 
        label:'GPA',
      },
      {
        type: 'bar',
        yAxisID: 'A',
        data: tcValues,
        backgroundColor: "green",
        label:"TC tích lũy",
      },
    ],
    labels: xValues
  },
  options: {
    scales: {
      yAxes: [
        {
          id: 'A',
          type: 'linear',
          position: 'left',
          ticks: {
            max: 200,
            min: 0,
            stepSize:50,
          }
        },
        {
          id: 'B',
          type: 'linear',
          position: 'right',
          ticks: {
            max: 4,
            min: 0
          }
        }
      ]
    },
    title: {
      display: false // Ẩn title của biểu đồ
    }

  }
});
