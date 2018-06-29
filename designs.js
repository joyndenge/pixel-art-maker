// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!

// Get table input values
const inputHeight =  document.getElementById("inputHeight").value
const inputWidth = document.getElementById("inputWidth").value
var tt = document.getElementById('pixelCanvas');

// Validate input values
if(inputHeight > 0 && inputWidth > 0){
  // Draw a table
    tt.innerHTML = '';

    var tbl = document.createElement('table');

    tbl.style.width = '100%';

    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < inputHeight; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < inputWidth; j++) {
                var td = document.createElement('td');
                    td.classList.add('cellBox')
                tr.appendChild(td);
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    tt.appendChild(tbl);
}
return false;
}

$(document).ready(function(){
  $("#pixelCanvas").on("click", "td", function() {
          let selectedColor = $("#colorPicker").val();
          $(this).css( "backgroundColor",selectedColor);
     });
});
