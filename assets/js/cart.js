$(function () {
  function calcTotal(e) {
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

  var idToDel = 0;

  $(".quantity select").change(function () {
    var quantity = $(this).val();
    if (quantity == 0) {
      $(".confirm-delete").show();
      idToDel = parseInt($(this).attr("id").replace("quantity-", ""));
    } else {
      calcTotal();
    }
  });

  $(".confirm-delete .btn-close").click(function () {
    $(".confirm-delete").hide();
    calcTotal();
    idToDel = 0;
  });

  $(".confirm-delete .btn-confirm").click(function () {
    if (idToDel == 0) return;
    $("#prow-" + idToDel).remove();
    $(".confirm-delete").hide();
    idToDel = 0;
    calcTotal();
  });

  calcTotal();
});
