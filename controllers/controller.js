app.controller('MainController', function($scope) {
    $scope.isSidebarHidden = false;

    $scope.toggleSidebar = function() {
        $scope.isSidebarHidden = !$scope.isSidebarHidden 
        $http.get('incidents.json').then(function(response) {
            $scope.incidents = response.data;
            startNewsTicker();
        });
        function startNewsTicker() {
            const ticker = document.getElementById('news-ticker');
            let scrollHeight = 0;
            
            function scroll() {
                scrollHeight += 1;
                ticker.style.transform = `translateY(-${scrollHeight}px)`;

                if (scrollHeight > ticker.scrollHeight - 20) { 
                    scrollHeight = 0;
                }
                requestAnimationFrame(scroll);
            }
            requestAnimationFrame(scroll);
        }pe.isSidebarHidden;
    };
});

app.controller('IncidentsController', function($scope, $http) {
    $http.get('incidents.json').then(function(response) {
        $scope.incidents = response.data.incidents;
    });
});
app.controller('HomeController', function($scope,$http) {


      
    var options1 = {
        series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
        chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      };

      var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
      chart1.render();
    
      var options2 = {
        series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
      };

      var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
      chart2.render();

      var options3 = {
        series: [42, 47, 52, 58, 65],
        chart: {
        width: 380,
        type: 'polarArea'
      },
      labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
        show: false
      },
      legend: {
        position: 'bottom'
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          },
          spokes: {
            strokeWidth: 0
          },
        }
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: 'light',
          shadeIntensity: 0.6
        }
      }
      };

      var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
      chart3.render();


      var options4 = {
        series: [{
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
      }],
        chart: {
        height: 350,
        type: 'line',
      },
      forecastDataPoints: {
        count: 7
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
        tickAmount: 10,
        labels: {
          formatter: function(value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), 'dd MMM')
          }
        }
      },
      title: {
        text: 'Forecast',
        align: 'left',
        style: {
          fontSize: "16px",
          color: '#666'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [ '#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      }
      };

      var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
      chart4.render();
     
    

    
});