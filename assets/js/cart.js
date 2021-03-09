$(function () {
  function calcTotal() {
    var pRows = $(".prow");
    var total = 0;
    for (var i = 0; i < pRows.length; i++) {
      var row = pRows[i];
      var price = parseFloat($(".price", row).text().replace("$", ""));
      var amount = parseInt($(".quantity select", row).val());
      total += price * amount;
      $(".total", row).text("$" + (price * amount).toFixed(2));
    }
    $(".subtotal .value").text("$" + total.toFixed(2));
  }

  $(".quantity select").select2({ minimumResultsForSearch: -1 });
  $(".size select").select2({ minimumResultsForSearch: -1 });
  $(".color select").select2({ minimumResultsForSearch: -1 });

  $(".quantity select").change(calcTotal);

  calcTotal();
});
