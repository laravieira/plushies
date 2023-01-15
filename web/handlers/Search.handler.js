function onSearch() {
  window.plushie.search = this.value;
  Storage.updateList();
}

function onReset() {
  $('#search-field').val('');
  window.plushie.search = '';
  Storage.updateList();
}

$('#search-field').on('input', onSearch);
$('#search-reset').on('click', onReset);