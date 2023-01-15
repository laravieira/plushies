function onAmountSelect() {
  window.plushie.limit = parseInt(this.value);
  Storage.updateList();
}

$('#amount').on('change', onAmountSelect);
