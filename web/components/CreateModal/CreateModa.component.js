function onImageChange() {
  $('#create-modal-image').attr('src', this.value);
}

$('#create-form-image').on('input', onImageChange);