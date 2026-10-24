export type UserRole = 'ADMIN' | 'SECRETARY' | 'TEACHER' | 'CASHIER';

export interface User {
  id: string;
  username: string;
  fullName: string;
  email: string;
  role: UserRole;
  phone?: string;
  avatarUrl?: string;
  title: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  identifier: string; // email or username
  password?: string;
}