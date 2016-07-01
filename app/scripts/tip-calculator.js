(function(global) {
  global.tipCalculator = {
    calculateTip: function(billAmount, tipPercent) {
      var tip = billAmount * (tipPercent / 100)
      var total = billAmount + tip;
      return {
        tip: tip.toFixed(2),
        total: total.toFixed(2)
      };
    }
  }
})(window);
