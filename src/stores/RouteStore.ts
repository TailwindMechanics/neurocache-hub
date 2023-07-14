//path: src\stores\RouteStore.ts

import { User } from "@supabase/supabase-js";
import { makeAutoObservable } from "mobx";


class RouteStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User | null) {
    this.user = user;
  }
}

export default RouteStore;