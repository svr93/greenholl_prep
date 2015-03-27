function postOrder(userData) {

  var AJAX_TIMEOUT = 7000;
  var FORM_DELAY_TIME = 3000;

  $.ajax({
    url: "/order_call_back_check.php",
    type: "POST",
    data: userData,
    timeout: AJAX_TIMEOUT,

    beforeSend: function() {
      $('#sendButton').html('Идёт отправка...');
    },

    success: function(resp) {
      if (resp === "success") {
        $('#sendButton').html('Ваша заявка отправлена!');

        setTimeout(function() {
          parent.$.fancybox.close();
        }, FORM_DELAY_TIME);

      } else {
        $('#sendButton').html('Ошибка сохранения заявки');

        setTimeout(function() {
          $('#sendButton').html('Заказать обратный звонок!');
        }, FORM_DELAY_TIME);

      }
    },

    error: function(xhr, status, errThrown) {
      if (status !== "timeout") { return; }

      $('#sendButton').html('Ошибка отправки');

      setTimeout(function() {
        $('#sendButton').html('Заказать обратный звонок!');
      }, FORM_DELAY_TIME);

    }
  });
}
