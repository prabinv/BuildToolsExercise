(function($) {
  $(function() {
    calculateTip();

    $('#calculateTipButton').on('click', function(e) {
      e.preventDefault();
      calculateTip();
    });

    $('#reset').on('click', function(e) {
      e.preventDefault();
      resetForm();
    })
  });

  function calculateTip() {
    var billAmount = parseFloat($('#billAmount').val());
    var tipPercent = $('#percentage').val();

    var result = tipCalculator.calculateTip(billAmount, tipPercent);
    $('#tip').text(result.tip);
    $('#total').text(result.total);
  }

  function resetForm() {
    $('#billAmount').val(0);
    $('#percentage').val(10);
    calculateTip();
  }

}(jQuery));
