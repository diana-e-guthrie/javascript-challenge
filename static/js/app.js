// from data.js
var tableData = d3.select("#ufo-table");
var tableBody = d3.select("#table-body");
// YOUR CODE HERE!

// Seperate the table construction from the button click, the table
// construction should be in a formula
function createTable(data){
    data.forEach(function(ufoSightings) {
        var row = tableData.append("tr");
        Object.entries(ufoSightings).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};
  // Button
  var dates = data;

  var button = d3.select("#filter-btn");

  button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(tableBody);

    var filteredData = data.filter(date => date.datetime === inputValue);
    tableData.html("");
    createTable(filteredData);
  });
                                                      
                                                      
  createTable(data);
