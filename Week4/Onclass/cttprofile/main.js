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

function showSignOut(){
  var signout_btn = document.getElementById('signout-btn')
  if (signout_btn.style.display ==='none'){
    signout_btn.style.display = 'block'
  }

}

function hideSignOut(){
  var signout_btn = document.getElementById('signout-btn')
  if (signout_btn.style.display ==='block'){
    signout_btn.style.display = 'none'
  }
}

// chart
  //htChart
const xValues = ["2020-1", "2020-2", "2021-1", "2021-2", "2022-1", "2022-2"];
const tcValues = [10, 23, 46, 70, 92, 112];
const tcNo = [0,3,0,0,0,0]
const GPAValues = [3.9, 4.0, 3.6, 3.9, 4.0, 3.9];
const CPAValues = [3.9, 3.9, 3.8, 3.9, 3.9, 3.9];
const rlValues = [88,90,98,90,100,92];
new Chart("htChart", {
  type: "bar",
  data: {
    datasets: [
     
      {
        type: 'line',
        yAxisID: 'B',
        fill: false,
        lineTension: 0,
        data: CPAValues,
        backgroundColor:"rgba(120,120,120,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        label:'CPA',
        pointStyle: 'circle',
        
      },{
        type: 'line',
        yAxisID: 'B',
        fill: false,
        lineTension: 0,
        data: GPAValues,
        backgroundColor:"rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        label:'GPA',
      },
      {
        type: 'bar',
        yAxisID: 'A',
        data: tcValues,
       
        backgroundColor: "green",
        label:"TC tích lũy",
        pointStyle: 'circle',
        stack:"stack0",
      },
      {
        type:'bar',
        yAxisID:'A',
        data: tcNo,
        backgroundColor:"red",
        label:'TC nợ',
        stack:"stack0",

      }
    ],
    labels: xValues
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false 
          }
        }],
      yAxes: [
        {
          id: 'A',
          type: 'linear',
          position: 'left',
          ticks: {
            max: 200,
            min: 0,
            stepSize:50,
          },
          stacked: true, 
        },
        {
          id: 'B',
          type: 'linear',
          position: 'right',
          ticks: {
            max: 4,
            min: 0
          },gridLines: {
            display: false 
          }
        }
      ]
      
    },
    title: {
      display: false 
    },
    legend: {
      display: true,
      position: 'bottom', 
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'index',
      intersect: false,
      
    },
    responsive  : true,
    
  }
});
  //rlChart
  new Chart("rlChart", {
    type: "bar",
    data: {
      datasets: [
        {
          type: 'line',
  
          fill: false,
          lineTension: 0,
          data: rlValues,
          backgroundColor:"rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          label:'Điểm rèn luyện',

        }
      ],
      labels: xValues
    },
    options: {
      
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false // Ẩn lưới cho trục x
            }
          }],
        yAxes: [
         {
           ticks:{
            max :100,
            min:0,
            stepSize: 20,
          },
        }
        ]
      },
      title: {
        display: false 
      },
      legend: {
        display: true,
        position: 'bottom',      

      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'index',
        intersect: false,
        
      },
      responsive: true,
    }
  });