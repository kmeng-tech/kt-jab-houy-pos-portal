import type { LoginResponse, Tenant } from '../../types';

export const mockLoginResponse: LoginResponse = {
  userId: 1,
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30',
  refreshToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV31',
};

export const mockFetchMeResponse: Tenant = {
  id: 2,
  name: 'DoDo',
  slug: 'dodo',
  logo: './vite.svg',
  status: 'active',
  plan: 'free',
  features: {
    multiBranch: false,
  },
  currencies: ['usd'],
  defaultCurrency: 'usd',
  tax: {
    mode: 'exclusive',
  },
  createdAt: 1761485249185,
  updatedAt: 1761485249185,
  user: {
    id: 1,
    name: 'DoDo Admin',
    username: 'dodo_admin',
    password: 'hehe',
    tenantId: 2,
    createdAt: 1761485249185,
    updatedAt: 1761485249185,
    roleId: 1,
    isTelegramPhoneVerified: true,
    telegramPhone: '+855 12345678',
    telegramPhoneVerifiedAt: 1761485249186,
  },
  branches: [
    {
      id: 1,
      code: 'dodo_phnompenh',
      name: 'DoDo (Phnom Penh)',
      type: 'store',
      tenantId: 2,
      isActive: true,
      createdAt: 1761485249185,
      updatedAt: 1761485249185,
    },
  ],
};

export interface CommonResponse {
  success: boolean;
  message: string;
}
