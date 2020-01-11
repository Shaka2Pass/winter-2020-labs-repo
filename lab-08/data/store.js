import crystals from './crystals.js';

const store = {
  storage: window.localStorage,
  save(key, item ){
    const json = JSON.stringify(item);
    store.storage.setItem(key, json);
  },
  get(key){
    const json = store.storage.getItem(key);
    const product = JSON.parse(json);
    return product;
  }
};
