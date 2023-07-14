//path: src\stores\ChannelStore.ts

import { makeAutoObservable } from "mobx";

class ChannelStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default ChannelStore;