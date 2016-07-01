module("BuildToolExercise Tests", {
    setup: function() {

    }
});

test('test name', function() {
    equal(true, true, "Message");
});

test('Tip Calculator - calculateTip', function() {
  var bill = 100, tipPercent = 15;
  var result = tipCalculator.calculateTip(bill, tipPercent);
  equal(result.tip, '15.00', 'Tip should be 15.00');
  equal(result.total, '115.00', 'Total should be 115.00');
});
