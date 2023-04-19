//This is wrapped in the jquery document call to make sure the functions don't run until the document is ready and loaded
$(document).ready(function () {
  // this shows the current date in the header of the page
  $("#currentDay").text(dayjs().format("MMMM DD, YYYY"))
  
  var rowEl = document.querySelectorAll('.row');
  var date = new Date();
  var currentHour = date.getHours();
  
  for (var i = 0; i < rowEl.length; i++ ) {
    var rowId = rowEl[i].id;
    if (rowId < currentHour) {
      $(`#${rowId}`).addClass('past')
    }
    if (rowId == currentHour) {
      $(`#${rowId}`).addClass('present')
    }
    if (rowId > currentHour) {
      $(`#${rowId}`).addClass('future')
    }
  }
  // Here the save button is registering any typed data to local storage so that the answers can persist
  $('.btn').on("click", function() {
  var schedUpdate = $(this).parent().attr('id')
  var allmyWords = $(this).siblings('.description').val();
  localStorage.setItem( schedUpdate, allmyWords);

  })
  // This will get whatever is in the text area for the local storage on each individual row
  $('#9 .description').val(localStorage.getItem('9'));
  $('#10 .description').val(localStorage.getItem('10'));
  $('#11 .description').val(localStorage.getItem('11'));
  $('#12 .description').val(localStorage.getItem('12'));
  $('#13 .description').val(localStorage.getItem('13'));
  $('#14 .description').val(localStorage.getItem('14'));
  $('#15 .description').val(localStorage.getItem('15'));
  $('#16 .description').val(localStorage.getItem('16'));
  $('#17 .description').val(localStorage.getItem('17'));

});