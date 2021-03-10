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
    { id: 0, quantity: 1, price: 100 },
    { id: 1, quantity: 2, price: 200 },
    { id: 2, quantity: 3, price: 300 },
    { id: 3, quantity: 4, price: 400 },
    { id: 4, quantity: 5, price: 500 },
    { id: 5, quantity: 6, price: 600 },
    { id: 6, quantity: 7, price: 700 },
    { id: 7, quantity: 8, price: 800 },
    { id: 8, quantity: 9, price: 900 },
    { id: 9, quantity: 10, price: 1000 },
  ];
  $("#quantity").select2({
    minimumResultsForSearch: -1,
    data: dataQuantity,
    templateResult: function (data) {
      var html =
        "<div class='quantity-item'><b>Qty:" +
        data.quantity +
        " = $" +
        data.price +
        "</b> &nbsp;&nbsp;(31% OFF)&nbsp;&nbsp;<span>BEST SELLER</span></div>";
      return $(html);
    },
    templateSelection: function (data) {
      var html =
        "<div class='quantity-item'><b>Qty:" +
        data.quantity +
        " = $" +
        data.price +
        "</b> &nbsp;&nbsp;(31% OFF)&nbsp;&nbsp;<span>BEST SELLER</span></div>";
      return $(html);
    },
  });
  $("#quantity").change(function () {
    var amount = parseInt($(this).val()) + 1;
    var html = "";
    for (let i = 0; i < amount; i++) {
      html +=
        "<tr>" +
        '<td><span class="attr-id">' +
        (i + 1) +
        "</span></td>" +
        "<td>" +
        '<select class="form-control color" name="color">' +
        '<option value="red">Red</option>' +
        '<option value="red">Green</option>' +
        "</select>" +
        "</td>" +
        "<td>" +
        '<select class="form-control size" name="size">' +
        '<option value="red">XS</option>' +
        '<option value="red">S</option>' +
        '<option value="red">L</option>' +
        '<option value="red">XL</option>' +
        '<option value="red">XXL</option>' +
        "</select>" +
        "</td>" +
        "<td>" +
        '<input class="form-control" type="text" placeholder="Add your text here">' +
        "</td>" +
        "</tr>";
    }
    $(".attrs table tbody").html(html);
    initAttrSelector();
  });
  function initAttrSelector() {
    $(".size").select2({ minimumResultsForSearch: -1 });
    $(".color").select2({ minimumResultsForSearch: -1 });
  }
  initAttrSelector();

  setTimeout(function () {
    $(".btn-cart button").removeClass("btn-wobble");
  }, 10000);

  $(".btn-buy").click(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
