// src/services/authService.ts
import type { AuthResponse, LoginCredentials, User } from '../types/auth';
import { SEED_USERS } from '../mock-data/seedUsers';
import { storageAdapter } from './storage/localStorageAdapter';

const AUTH_USER_KEY = 'ama_sms_current_user';
const AUTH_TOKEN_KEY = 'ama_sms_auth_token';

class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    await new Promise((resolve) => setTimeout(resolve, 350));

    const user = SEED_USERS.find(
      (u) =>
        u.email.toLowerCase() === credentials.identifier.toLowerCase() ||
        u.username.toLowerCase() === credentials.identifier.toLowerCase()
    );

    if (!user) {
      throw new Error('Invalid credentials. Check username or use demo accounts.');
    }

    const token = `mock-jwt-token-${user.id}-${Date.now()}`;
    storageAdapter.set(AUTH_USER_KEY, user);
    storageAdapter.set(AUTH_TOKEN_KEY, token);

    return { user, token };
  }

  async logout(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 150));
    storageAdapter.remove(AUTH_USER_KEY);
    storageAdapter.remove(AUTH_TOKEN_KEY);
  }

  async getCurrentUser(): Promise<User | null> {
    return storageAdapter.get<User | null>(AUTH_USER_KEY, null);
  }
}

export const authService = new AuthService();