$(function () {
  // popup 03
  $("#popup-3 .size select").select2({ minimumResultsForSearch: -1 });
  $("#popup-3 .color select").select2({ minimumResultsForSearch: -1 });

  // popup 04
  $("#popup-4 .offer .color select").select2({ minimumResultsForSearch: -1 });
  $("#popup-4 .offer .size select").select2({ minimumResultsForSearch: -1 });
  $(".btn-hide-alarm").click(function () {
    $(this).parent().remove();
  });

  // popup 05
  $("#popup-5 .btn-close").click(function () {
    $("#popup-5").remove();
  });

  // popup 05
  $("#popup-6 .btn-close").click(function () {
    $("#popup-6").remove();
  });
});
