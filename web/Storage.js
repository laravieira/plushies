window.plushie = {
  host: process.env.SERVER_HOST || 'http://localhost:4000',
  page: 1,
  limit: 10,
  search: '',
  all: [],
  amount: 0,
  listeners: []
}

const Storage = {
  updateList: () => {
    if(window.plushie.search === '')
      Storage.list();
    else
      Storage.search(window.plushie.search);
    Storage.amount();
  },

  updateListeners: () => window.plushie.listeners.map(listener => {
    try{
      listener();
    }catch(e) {
      console.error(e);
    }
  }),

  addListener: (listener) => {
    if(window.plushie.listeners.find(registered => registered.name === listener.name))
      return;
    window.plushie.listeners.push(listener);
  },

  list: () => {
    fetch(`${window.plushie.host}/?page=${window.plushie.page}&amount=${window.plushie.limit}`)
      .then(response => response.json())
      .then(list => window.plushie.all = list)
      .then(list => console.debug(`${list.length} plushies fetched.`))
      .then(Storage.updateListeners)
  },

  search: (query) => {
    fetch(`${window.plushie.host}/search/${query}?${window.plushie.page}&amount=${window.plushie.limit}`)
      .then(response => response.json())
      .then(list => window.plushie.all = list)
      .then(Storage.updateListeners)
  },

  amount: () => {
    fetch(`${window.plushie.host}/amount`)
      .then(response => response.json())
      .then(amount => window.plushie.amount = amount)
      .then(Storage.updateListeners)
  },

  remove: (id) => {
    fetch(`${window.plushie.host}/${id}`, {
      method: 'DELETE'
    })
      .then(Storage.updateList)
  },

  create: (name, image, color, height) => {
    fetch(`${window.plushie.host}/`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        image,
        color,
        height
      })
    })
      .then(response => response.json())
      .then(Storage.updateList)
  },

  update: (id, name, image, color, height) => {
    const plushie = window.plushie.all.find(plushie => plushie.id === id);
    if(!plushie)
      return;

    fetch(`${window.plushie.host}/${id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: plushie.name === name ? undefined : name,
        image: plushie.image === image ? undefined : image,
        color: plushie.color === color ? undefined : color,
        height: plushie.height === height ? undefined : height
      })
    })
      .then(response => response.json())
      .then(Storage.updateList)
  }
}