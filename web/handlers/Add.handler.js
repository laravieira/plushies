function onCreate(e) {
  e.preventDefault();
  if(!this.checkValidity())
    return;

  Storage.create(this.name.value, this.image.value, this.color.value, this.height.value);
  bootstrap.Modal.getOrCreateInstance($('#create-modal')).hide();
}

$('#create-form').on('submit', onCreate);