$(function () {
  function formatState(el) {
    var $st = $(
      "<span class='pl-4 w-100 flag-icon flag-icon-" +
        el.id +
        "'>" +
        el.text +
        "</span>"
    );
    return $st;
  }

  // init select items
  $("#currency").select2();
  $("#country").select2({
    width: "100%",
    minimumResultsForSearch: -1,
    templateResult: formatState,
    templateSelection: formatState,
  });
  $("#language").select2({
    width: "100%",
    minimumResultsForSearch: -1,
  });

  // country language selector action
  function updateLangCountry() {
    var country = $("#country").val();
    var language = $("#select2-language-container").text();
    var html =
      "<span class='flag-icon flag-icon-" +
      country +
      "'></span>&nbsp;/ " +
      language;
    $("#country-language").html(html);
    $("#country-language-mobile").html(html);
  }

  $("#language").change(updateLangCountry);
  $("#country").change(updateLangCountry);

  // disable language-country selector close when click inside
  // Clicking dropdown button will toggle display
  function dropdownToggle() {
    document.getElementById("Dropdown").classList.toggle("show");
  }

  // Prevents menu from closing when clicked inside
  document
    .getElementById("country-language-menu")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });

  //////////////////////////////////////
  $("#currency-mobile").select2();
  $("#country-mobile").select2({
    width: "100%",
    minimumResultsForSearch: -1,
    templateResult: formatState,
    templateSelection: formatState,
  });
  $("#language-mobile").select2({
    width: "100%",
    minimumResultsForSearch: -1,
  });

  // country language selector action
  function updateLangCountryMobile() {
    var country = $("#country-mobile").val();
    var language = $("#select2-language-mobile-container").text();
    var html =
      "<span class='flag-icon flag-icon-" +
      country +
      "'></span>&nbsp;/ " +
      language;
    var htmlMobile =
      "<span class='flag-icon flag-icon-" + country + "'></span>";
    $("#country-language-mobile").html(htmlMobile);
    $("#country-language").html(html);
  }

  $("#language-mobile").change(updateLangCountryMobile);
  $("#country-mobile").change(updateLangCountryMobile);

  // disable language-country selector close when click inside
  // Clicking dropdown button will toggle display
  function dropdownToggle() {
    document.getElementById("Dropdown").classList.toggle("show");
  }

  // Prevents menu from closing when clicked inside
  document
    .getElementById("country-language-menu")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });

  document
    .getElementById("country-language-menu-mobile")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });

  // Closes the menu in the event of outside click
  window.onclick = function (event) {
    if (
      !event.target.matches("#country-language") &&
      !event.target.matches("#country-language-mobile")
    ) {
      var dropdowns = document.getElementsByClassName("dropdown-menu");

      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  $("#currency").change(function () {
    console.log("asdf");
    $("#currency-mobile").val($(this).val());
    $("#currency-mobile").trigger("change.select2");
  });
  $("#currency-mobile").change(function () {
    $("#currency").val($(this).val());
    $("#currency").trigger("change.select2");
  });

  $("#select2-currency-container").click(function () {
    $(".select2-dropdown").css({ width: "200px" });
  });

  $("#select2-currency-mobile-container").click(function () {
    $(".select2-dropdown").css({ width: "200px" });
  });

  var images = [
    "assets/img/Product-1.jpg",
    "assets/img/Product-2.jpg",
    "assets/img/Product-3.jpg",
    "assets/img/Product-4.jpg",
    "assets/img/Product-5.jpg",
    "assets/img/Product-9.jpg",
    "assets/img/Product-10.jpg",
    "assets/img/Product-11.jpg",
    "assets/img/Product-12.jpg",
  ];
  $(".size select").change(function () {
    var img = images[Math.floor(Math.random() * images.length)];
    $("img", $(this).parent().parent()).attr("src", img);
  });
  $(".color select").change(function () {
    var img = images[Math.floor(Math.random() * images.length)];
    $("img", $(this).parent().parent()).attr("src", img);
  });
});
