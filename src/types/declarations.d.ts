//path: src\types\declarations.d.ts

declare type UserProfile = {
  user_id: string,
  first_name: string,
  last_name: string,
  avatar_url: string,
};

declare module 'react-tailwindcss-datepicker';
declare module 'react-notifications' {
    const content: any;
    export = content;
  }