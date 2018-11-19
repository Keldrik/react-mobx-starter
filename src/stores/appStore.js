import { action, observable, decorate } from 'mobx';
import axios from 'axios';

class AppStore {
  constructor() {
    this.data = [];
    this.loaded = false;
  }
  getData = async () => {
    if (this.data.length < 1) {
      const d = await axios.get(
        'https://5befcbbb5b9d1a00132445ed.mockapi.io/podapi/v1/podcast'
      );
      this.data = d.data;
    }
    this.loaded = true;
  };
}

decorate(AppStore, {
  data: observable,
  loaded: observable,
  getData: action
});

export default AppStore;
