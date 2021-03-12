$(function () {
  // popup 03
  $("#popup-3 .size select").select2({ minimumResultsForSearch: -1 });
  $("#popup-3 .color select").select2({ minimumResultsForSearch: -1 });

  // popup 04
  $("#popup-4 .offer .color select").select2({ minimumResultsForSearch: -1 });
  $("#popup-4 .offer .size select").select2({ minimumResultsForSearch: -1 });
  $(".btn-hide-alarm").click(function () {
    $(".popup").addClass("hide");
    $("#popup-4").addClass("hide");
  });

  // popup 05
  $("#popup-5 .btn-close").click(function () {
    $(".popup").addClass("hide");
    $("#popup-5").addClass("hide");
  });

  // popup 05
  $("#popup-6 .btn-close").click(function () {
    $("#popup-6").addClass("hide");
    $(".popup").addClass("hide");
  });

  // popup 07
  $("#popup-7 .offer .color select").select2({ minimumResultsForSearch: -1 });
  $("#popup-7 .offer .size select").select2({ minimumResultsForSearch: -1 });

  // global
  $(".popup-trigger").click(function () {
    var id = $(this).data("id");

    $(".popup").removeClass("hide");
    $("#popup-" + id).removeClass("hide");
  });

  $("body").click(function (e) {
    var container = $(".popup-content");
    var trigger = $(".popup-trigger");

    // if the target of the click isn't the container nor a descendant of the container
    if (
      !container.is(e.target) &&
      !trigger.is(e.target) &&
      container.has(e.target).length === 0
    ) {
      $(".popup").addClass("hide");
      $(".popup-content").addClass("hide");
    }
  });
  $(".refuse").click(function () {
    $(".popup").addClass("hide");
    $(".popup-content").addClass("hide");
  });
});
