export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean | null;
  phoneNumber: string | null;
  photoURL: string | null;
  uid: string | null;
}
