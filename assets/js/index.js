$(function () {
  $("#myCarousel").carousel({
    interval: false,
  });
  $("#carousel-thumbs").carousel({
    interval: false,
  });

  // handles the carousel thumbnails
  // https://stackoverflow.com/questions/25752187/bootstrap-carousel-with-thumbnails-multiple-carousel
  $("[id^=carousel-selector-]").click(function () {
    var id_selector = $(this).attr("id");
    var id = parseInt(id_selector.substr(id_selector.lastIndexOf("-") + 1));
    $("#myCarousel").carousel(id);
  });
  // Only display 3 items in nav on mobile.
  if ($(window).width() < 575) {
    $("#carousel-thumbs .row div:nth-child(4)").each(function () {
      var rowBoundary = $(this);
      $('<div class="row mx-0">')
        .insertAfter(rowBoundary.parent())
        .append(rowBoundary.nextAll().addBack());
    });
    $("#carousel-thumbs .carousel-item .row:nth-child(even)").each(function () {
      var boundary = $(this);
      $('<div class="carousel-item">')
        .insertAfter(boundary.parent())
        .append(boundary.nextAll().addBack());
    });
  }
  // Hide slide arrows if too few items.
  if ($("#carousel-thumbs .carousel-item").length < 2) {
    $("#carousel-thumbs [class^=carousel-control-]").remove();
    $(".machine-carousel-container #carousel-thumbs").css("padding", "0 5px");
  }
  // when the carousel slides, auto update
  $("#myCarousel").on("slide.bs.carousel", function (e) {
    var id = parseInt($(e.relatedTarget).attr("data-slide-number"));
    $("[id^=carousel-selector-]").removeClass("selected");
    $("[id=carousel-selector-" + id + "]").addClass("selected");
  });
  /*
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
  */

  $("#myCarousel .carousel-item img").on("click", function (e) {
    var src = $(e.target).attr("data-remote");
    if (src) $(this).ekkoLightbox();
  });

  // quantity select
  var dataQuantity = [
    {
      id: 0,
      text: '<div style="color:green">enhancement</div>',
      html:
        "<div class='quantity-item'><b>Qty:2 = $178</b> $268&nbsp;&nbsp;(31% OFF)&nbsp;&nbsp;<span>BEST SELLER</span></div>",
    },
    {
      id: 1,
      text: '<div style="color:red">bug</div>',
      html:
        "<div class='quantity-item'><b>Qty:2 = $178</b> $268&nbsp;&nbsp;(31% OFF)&nbsp;&nbsp;<span>BEST SELLER</span></div>",
    },
  ];
  $("#quantity").select2({
    minimumResultsForSearch: -1,
    data: dataQuantity,
    templateResult: function (data) {
      return $(data.html);
    },
    templateSelection: function (data) {
      return $(data.html);
    },
  });
});
