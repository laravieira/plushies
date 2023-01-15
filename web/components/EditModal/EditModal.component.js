function onEditModalOpen() {
  const id = $('#edit-form').attr('data-plushie-id');
  const plushie = window.plushie.all.find(plushie => plushie.id === parseInt(id));
  if(!plushie)
    return;

  $('#edit-modal-image').attr('src', plushie.image);
  $('#edit-form-image').val(plushie.image);
  $('#edit-form-name').val(plushie.name);
  $('#edit-form-color').val(plushie.color);
  $('#edit-form-height').val(plushie.height);
}

function onImageChange() {
  $('#edit-modal-image').attr('src', this.value);
}

$('#edit-modal').on('show.bs.modal', onEditModalOpen);
$('#edit-form-image').on('input', onImageChange);