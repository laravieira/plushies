function onUpdate(e) {
  e.preventDefault();
  if(!this.checkValidity())
    return;
  const id = parseInt($(this).attr('data-plushie-id'));
  Storage.update(id, this.name.value, this.image.value, this.color.value, this.height.value);
  bootstrap.Modal.getOrCreateInstance($('#edit-modal')).hide();
}

$('#edit-form').on('submit', onUpdate);