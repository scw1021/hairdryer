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
  }
  $(".btn-save").click(function () {
    updateLangCountry();
    $("#country-language-menu").removeClass("show");
  });

  $("#language").click(updateLangCountry);
  $("#country").click(updateLangCountry);

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

  // Closes the menu in the event of outside click
  window.onclick = function (event) {
    if (!event.target.matches("#country-language")) {
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
});
