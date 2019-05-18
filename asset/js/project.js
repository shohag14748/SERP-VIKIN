$(document).ready(function () {
    $('.addNewProject a').on('click',function(e){
        e.preventDefault();
        $('.popup').addClass('active');
        $('.popup fieldset:first-child').fadeIn('slow');
    });

    $('.popup input,.popup select,.popup textarea').on('focus', function () {
        $(this).removeClass('input-error');
    });
    
     $('.popup .btn-cancel').on('click', function () {
        $(this).parents('fieldset').fadeOut(400);
          $('.popup').removeClass('active');
    });

    // next step
    $('.popup .btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;

        parent_fieldset.find('select,input,textarea').each(function () {
            if ($(this).val() == "") {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
            }
        });

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }

    });

});



var data = {
  labels: [
    "Red",
    "Blue"
  ],
  datasets: [
    {
      data: [22, 78],
      backgroundColor: [
        "transparent",
        "#634297"
      ],
      hoverBackgroundColor: [
        "#FFCE56",
        "#36A2EB"
      ],
        borderWidth: 0,
    }]
};

var promisedDeliveryChart = new Chart(document.getElementById('myPieChart'), {
  type: 'doughnut',
  data: data,
  options: {
  	responsive: true,
    cutoutPercentage: 85,
    legend: {
      display: false
    }
  }
});

Chart.pluginService.register({
  beforeDraw: function(chart) {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var text = "78%",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
});
