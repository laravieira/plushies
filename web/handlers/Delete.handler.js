function onDelete(e) {
  e.preventDefault();

  Storage.remove($(this).attr('data-plushie-id'));
  bootstrap.Modal.getOrCreateInstance($('#delete-modal')).hide();
}

$('#delete-form').on('submit', onDelete);