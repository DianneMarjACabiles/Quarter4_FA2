function generateTable() {
    var rows = parseInt(document.getElementById("rows").value);
    var columns = parseInt(document.getElementById("columns").value);
    var outputDiv = document.getElementById("output");
  
    outputDiv.innerHTML = ""; // Clear previous output
  
    if (isNaN(rows) || isNaN(columns) || rows < 2 || rows > 10 || columns < 2 || columns > 10) {
      alert("Please enter numbers between 2 and 10");
      return;
    }
  
    var result = "<div class='outer'><div class='grid'>";
    for (var i = 1; i <= rows; i++) {
      result += "<div class='row'>";
      for (var j = 1; j <= columns; j++) {
        result += "<div class='cell'>" + (i * j) + "</div>";
      }
      result += "</div>";
    }
    result += "</div></div>";
  
    outputDiv.innerHTML = result;
  }
  