/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Tenant, LoginRequest, LoginResponse } from '../types';
import { getSubdomain } from '../utils';
import {
  mockFetchMeResponse,
  mockLoginResponse,
  type CommonResponse,
} from './mock';

class AuthService {
  private INSTANCE: AuthService | null = null;

  get getInstance(): AuthService {
    if (!this.INSTANCE) {
      this.INSTANCE = new AuthService();
    }

    return this.INSTANCE;
  }

  async login(request: LoginRequest): Promise<LoginResponse> {
    const tenantSlug = getSubdomain();
    const response: LoginResponse = mockLoginResponse;
    localStorage.setItem('user', JSON.stringify(response));

    return response;
  }

  async fetchMe(): Promise<Tenant> {
    if (!localStorage.getItem('user')) {
      throw new Error('Invalid authentication');
    }

    return mockFetchMeResponse;
  }

  async logout(): Promise<CommonResponse> {
    localStorage.removeItem('user');

    return {
      message: 'Logout successfully',
      success: true,
    };
  }
}

export default AuthService;
