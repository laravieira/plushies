const pagination = {
  begin: (current) => $(`<li class="page-item">
    <button type="button"
            class="page-link"${ current ? ' disabled' : ''}
            onClick="javascript:pagination.onPrevious();"
            aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
    </button>
  </li>`),

  page: (page, current) => $(`<li class="page-item">
    <button type="button"
            class="page-link${ current ? ' active' : ''}"
            onClick="javascript:pagination.onPage(${page});"
            ${ current ? ' disabled' : ''}>
      ${page}
    </button>
  </li>`),

  end: (current) => $(`<li class="page-item">
    <button type="button"
            class="page-link"
            onClick="javascript:pagination.onNext();"
            ${ current ? ' disabled' : ''}
            aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </button>
  </li>`),

  onPrevious: () => {
    window.plushie.page -= 1;
    Storage.updateList();
  },

  onNext: () => {
    window.plushie.page += 1;
    Storage.updateList();
  },

  onPage: (page) => {
    window.plushie.page = page;
    Storage.updateList();
  }
};

function onStorageUpdate() {

  const pages = Math.ceil((window.plushie.amount)/window.plushie.limit);
  const isFirstPage = window.plushie.page === 1;
  const isLastPage = window.plushie.page === pages;

  const selector = $('#pagination');

  selector.html('')
    .append(pagination.begin(isFirstPage).html());
  for(let i = 0; i < pages; i++)
    selector.append(pagination.page(i+1, i+1 === window.plushie.page).html());
  selector.append(pagination.end(isLastPage).html());
}

Storage.addListener(onStorageUpdate);