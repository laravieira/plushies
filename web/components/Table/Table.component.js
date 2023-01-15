function openEditModal(plushie) {
  const modal = bootstrap.Modal.getOrCreateInstance('#edit-modal');
  $('#edit-form').attr('data-plushie-id', plushie);
  modal.show(modal);
}

function openDeleteModal(plushie) {
  const modal = bootstrap.Modal.getOrCreateInstance('#delete-modal');
  $('#delete-form').attr('data-plushie-id', plushie);
  modal.toggle($('body'));
}

function Table() {
  const updateBody = () => {
    const body = $('#table-body').html('');
    window.plushie.all.map(plushie => body.append(
      // Image cell
      $('<tr>').addClass('align-middle').html(
        $('<th>').attr('scope', 'row')
          .addClass('col-1 p-1')
          .html(
            $('<img>')
              .addClass('col-12')
              .attr('src', plushie.image)
              .attr('alt', plushie.name)
          )
        )

      // Name cell
      .append($('<th>').text(plushie.name))

      // Color cell
      .append($('<th>').html(
        $('<div>', {
          style: `background-color: ${plushie.color}`
        }).addClass('color')
      ))

      // Height cell
      .append($('<th>').text(plushie.height))

      // Actions cell
      .append(
        $('<th>').html(
          $('<div>').addClass('btn-group justify-content-end w-100').html($('<button>')
            .addClass('btn btn-info')
            .attr('onClick', `javascript:openEditModal(${plushie.id})`)
            .text('Edit'))
          .append($('<button>')
            .addClass('btn btn-danger')
            .attr('onClick', `javascript:openDeleteModal(${plushie.id})`)
            .text('Delete'))
        )
      )
    ));
  }

  Storage.addListener(updateBody);
}
