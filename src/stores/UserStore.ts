//path: src\stores\UserStore.ts

import { Session, AuthChangeEvent, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { makeAutoObservable } from "mobx";


class UserStore {
  user: UserProfile | null = null;

  constructor() {
    makeAutoObservable(this);
    supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
      this.handleAuthChange(event, session);
    });
  }

  handleAuthChange(event: AuthChangeEvent, session: Session | null) {
    if (event === 'SIGNED_IN' && session) {
      this.createProfileIfNotExist(session.user);
    }
  }
  
  async loginWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({ 
      provider: 'google'
    });
    if (error) {
      console.error('Error logging in:', error);
      return;
    }
  }
  
  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
      return;
    }
    this.setUser(null);
  }

  async createProfileIfNotExist(user: User) {
    try {
      let firstName = '';
      let lastName = '';

      if(user.user_metadata?.full_name){
        [firstName, lastName] = user.user_metadata.full_name.split(' ');
      }

      const profileData: UserProfile = {
        user_id: user.id,
        first_name: firstName,
        last_name: lastName,
        avatar_url: user.user_metadata?.avatar_url || '',
      };

      // Check if user profile already exists
      const { data } = await supabase
        .from('user_profile')
        .select('*')
        .eq('id', profileData.user_id)
        .single();
  
      // If no data, create new profile
      if (!data) {
        await supabase
          .from('user_profile')
          .insert([profileData]);
      }

      // Setting user as UserProfile
      this.setUser(profileData);
      
    } catch (error) {
      console.error('Error creating user profile:', error);
    }
  }   

  setUser(user: UserProfile | null) {
    this.user = user;
  }
}

export default UserStore;
