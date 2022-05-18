let asideBtn = document.querySelector('.aside-btn');
let aside = document.querySelector('.aside');
let backDrop = document.querySelector('.__backdrop');
asideBtn.addEventListener('click',()=>{
    aside.classList.add('show');
    backDrop.classList.add('offcanvas-backdrop');
    backDrop.classList.add('show');
});
backDrop.addEventListener('click',()=>{
    aside.classList.remove('show');
    backDrop.classList.remove('offcanvas-backdrop');
    backDrop.classList.adremoved('show');
});

//chart js

const labels = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      borderRadius:5,
      data: [0, 10, 5, 2, 20, 30, 45, 34,23,50,14,23,56,16,26,31,41,21,12,32,10],
    },{
        label: 'My Second dataset',
        backgroundColor: 'rgb(255, 99, 132,0.3)',
        borderColor: 'rgb(255, 99, 132)',
        borderRadius:5,
        data: [0, 10, 5, 2, 20, 30, 45, 34,23,50,14,23,56,16,26,31,41,21,12,32,10],
      }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
        maintainAspectRatio:false,
        scales:{
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                grid:{
                    borderDash:[3],
                    borderColor:'transparent'
                },
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 20
                  }
            }
        },
        plugins:{
            legend:{
                position:'bottom',
                align:'start',
                labels:{
                    usePointStyle:true
                }
            }
        }
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


  //data table
  $(document).ready(function () {
    $('#tt').DataTable({
        pageLength : 5,
    });
});

//visitor

  const vLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const vData = {
    labels: vLabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(77, 240, 194)',
      borderColor: 'rgb(77, 240, 194)',
      data: [0, 10, 5, 2, 20, 30, 45],
      borderRadius:5
    },{
        label: 'My Second dataset',
        backgroundColor: 'rgb(105, 240, 110,0.4)',
        borderColor: 'rgb(105, 240, 110,0.4)',
        data: [3, 14, 15, 22, 24, 31, 25],
        borderRadius:5
      }]
  };

  const vConfig = {
    type: 'bar',
    data: vData,
    options: {
        maintainAspectRatio:false,
        scales:{
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                grid:{
                    borderDash:[3],
                    borderColor:'transparent'
                },
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 10
                  }
            }
        },
        plugins:{
            legend:{
                position:'bottom',
                align:'start',
                labels:{
                    usePointStyle:true
                }
            }
        }
    }
};

  const myVisitor = new Chart(
    document.getElementById('myVisitor'),
    vConfig
  );