function getFahrenheits(result){
  // Your code goes here
  return result.hourly_forecast.map(function(hour){
    return hour.temp.english
  })
}

function getHours(result){
  // Your code goes here
  return result.hourly_forecast.map(function(hour){
    return hour.FCTTIME.hour
  })
}

function generateDataSet(labels, data) {
  var obj = {
  labels:labels,
  datasets: [
      {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: data
      }
  ]
};
return obj
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    method: 'get',
    url: endpoint,
    dataType: 'json',
    success: success
  });
}
