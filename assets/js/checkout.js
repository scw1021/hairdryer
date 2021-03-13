$(function () {
  $("#checkout #b_country").select2({ minimumResultsForSearch: -1 });
  $("#checkout #b_country_1").select2({ minimumResultsForSearch: -1 });

  $("#checkout #create_account").change(function () {
    $("#checkout .password").toggle();
  });
  $("#checkout #ship_to").change(function () {
    $("#checkout .address_1").toggle();
  });
  $("#checkout input[name=card_or_paypal]").change(function () {
    $("#checkout .card-info").toggle();
  });
});
