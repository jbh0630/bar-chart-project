const drawBarChart = function(data, options, element) {
  const chartAreaWidth = options['width'];
  const chartAreaHeight = options['height'];
  const chartTitle = options['title'];
  
  $('.nameOfChart').text(chartTitle);

  const chartRange = 5;
  const setMaxNumOfChart = function(data) {
    let maxNum = 0;
    for(let i = 0; i < data.length; i++) {
      if(data[i][1] > maxNum) {
        maxNum = data[i][1];
      }
    }
    maxNum = (Math.round(maxNum / chartRange)) * chartRange;
    return maxNum;
  }
  const maxNum = setMaxNumOfChart(data);
  const barChart = $(element);
 
  barChart.height(chartAreaHeight);
  barChart.width(chartAreaWidth);
  
  barChart.append("<div class= 'barName'></div>");
  barChart.append("<div class= 'barRange'></div>");

  const widthOfBar = (chartAreaHeight - (data.length - 1 * 6)) / data.length;
  
  const numOfRange = maxNum / chartRange;
  var rangeWidth = chartAreaWidth / numOfRange;
  for(let v = 0; v < data.length; v++) {
    $('.barName').append(`<div class= 'barName-${data[v][0]} bars'>${data[v][0]} ${data[v][1]}</div>`);
    
    let lengthOfBar = chartAreaWidth * data[v][1] /  maxNum;

    $(`.barName-${data[v][0]}`).css({
      "height": widthOfBar,
      "width": lengthOfBar      
    });

  }

  for(let r = 0; r < maxNum; r+=5) {
    $('.barRange').append(`<div class= 'ranges ran${r}'>${r}</div>`);
  }

  $('.ranges').css({
    "width":  rangeWidth
  });


}