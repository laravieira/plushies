function onEditModalOpen() {
  const id = $('#delete-form').attr('data-plushie-id');
  const plushie = window.plushie.all.find(plushie => plushie.id === parseInt(id));
  if(!plushie)
    return;

  $('#delete-modal-name').text(plushie.name);
  $('#delete-modal-image').attr('src', plushie.image);
  $('#delete-form-name').val(plushie.name);
  $('#delete-form-color').val(plushie.color);
  $('#delete-form-height').val(plushie.height);
}

$('#delete-modal').on('show.bs.modal', onEditModalOpen);