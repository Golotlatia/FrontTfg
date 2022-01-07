$(document).ready(function(){
  $('.close_btn').click(function(){
    $('.offcanvas').addClass("offcanvaswidth");
  });
});



var optionsBar = {
        responsive: true
    };

    var dataBar = {
        labels: ["Outubro", "Novembro", "Dezembro"],
        datasets: [
            {
                label: "CPF's Enviados",
                fillColor: "#00335A",
                strokeColor: "#00243F",
                highlightFill: "#00243F",
                highlightStroke: "#00192B",
                data: [6920, 7226, 7969]
            },
            {
                label: "Propostas Finalizadas",
                fillColor: "#007CDA",
                strokeColor: "#0066B4",
                highlightFill: "#0066B4",
                highlightStroke: "#005290",
                data: [6325, 6825, 7586]
            },
            {
                label: "Propostas Aprovadas",
                fillColor: "#2B8B4A",
                strokeColor: "#196431",
                highlightFill: "#196431",
                highlightStroke: "#114622",
                data: [5463, 6606, 6501]
            }
        ]
    };

    var optionsLine = {
        responsive: true
    };

    var dataLine = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        datasets: [
            {
                label: "Dados primários",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
              data: [28, 48, 40, 19, 86, 27, 90, 200, 87, 20, 50, 20]
            },
            {
                label: "Dados secundários",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90, 200, 87, 20, 50, 20]
            }
        ]
    };     

    function start(){
        var ctx = document.getElementById("humidity_chart").getContext("2d");
        var BarChart = new Chart(ctx, {
              type: 'bar',
              data: dataBar,
              options: optionsBar          
        });

        var ctx2 = document.getElementById("temprature_chart").getContext("2d");
        var LineChart = new Chart(ctx2, {
              type: 'line',
              data: dataLine,
              options: optionsLine          
        });
    }

    window.onload = start;

	Chart.plugins.register({
	  beforeDraw: function(chartInstance) {
	    var ctx = chartInstance.chart.ctx;
	    ctx.fillStyle = "white";
	    ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
	  }
	});


