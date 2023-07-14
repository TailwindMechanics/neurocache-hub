//path: src\stores\MessageStore.ts

import { makeAutoObservable } from "mobx";

class MessageStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default MessageStore;