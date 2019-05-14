$(document).ready(function(){
    $('.button-group a').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.button-group a:first-child').on('click',function(e){
        $('.total td h2 span:first-child').addClass('active');
        $('.total td h2 span:first-child').siblings().removeClass('active');
    });
    $('.button-group a:last-child').on('click',function(e){
        $('.total td h2 span:last-child').addClass('active');
        $('.total td h2 span:last-child').siblings().removeClass('active');
    });
    $('.tag i').on('click',function(e){
        $(this).parent('.tag').css({'display':'none'});
    });
    
    
    $('#example').DataTable( {
        "lengthMenu": [[15, 50, -1], [15, 50, "All"]]
    } );
    
    
     $("#project2").change(function(){
        $('.equals').toggleClass('d-none')
    });
    
    $('#date1').datepicker({
            format: "dd-mm-yyyy",
            autoclose: true,
        }).datepicker("setDate",'now');
        $('#date2').datepicker({
            format: "dd-mm-yyyy",
            autoclose: true,
        }).datepicker("setDate",'now');

    
    
});

var canvas = document.getElementById("myChart");
        canvas.height = 90;
        var ctx = canvas.getContext('2d');
        // Global Options:
        Chart.defaults.global.defaultFontColor = 'black';
        Chart.defaults.global.defaultFontSize = 14;

        var data = {
            labels: ["01/02/2019", "01/02/2019", "01/02/2019", "01/02/2019", "01/02/2019", "01/02/2019", "01/02/2019", "01/02/2019", "01/02/2019"],

            datasets: [{
                    label: "Desktop",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(55,101,147,1)",
                    borderColor: "rgba(55,101,147,1)", // The main line color
                    borderCapStyle: 'square',
                    borderDash: [], // try [5, 15] for instance
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "white",
                    pointBackgroundColor: "rgba(55,101,147,1)",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,
                    // notice the gap in the data and the spanGaps: true
                    data: [16, 16.8, 17, 17.8, 18, 18.8, 19, 19.8, 20, ],
                    spanGaps: true,
                }, {
                    label: "Mobile",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(255,162,0,1)",
                    borderColor: "rgba(255,162,0,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "white",
                    pointBackgroundColor: "rgba(255,162,0,1)",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,
                    // notice the gap in the data and the spanGaps: false
                    data: [17, 17.8, 18, 18.8, 19, 19.8, 20, 20.8, 21],
                    spanGaps: false,
                }

            ]
        };

        // Notice the scaleLabel at the same level as Ticks
        var options = {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        max: 25,
                        min: 15,
                    },
                }]
            },
            legend: {
                display: false,
            }
        };

        // Chart declaration:
        var myBarChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });