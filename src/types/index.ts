type TenantStatusEnum = 'active' | 'inactive' | 'suspended' | 'archived';
type TenantPlanEnum = 'free' | 'pro' | 'enterprise';
type CurrencyEnum = 'usd' | 'khr';
type TaxModeEnum =
  | 'exclusive' // Tax is added on top of the listed price (e.g., $100 + 10% = $110).
  | 'inclusive'; // Tax is already included in the listed price (e.g., $100 total, with tax portion inside).
type BranchTypeEnum = 'store' | 'warehouse' | 'online';

interface TenantFeature {
  multiBranch: boolean;
}
interface TenantTax {
  mode: TaxModeEnum;
}

export interface Tenant {
  id: number;
  name: string;
  slug: string;
  logo: string;
  status: TenantStatusEnum;
  plan: TenantPlanEnum;
  features: TenantFeature;
  currencies: CurrencyEnum[];
  defaultCurrency: CurrencyEnum;
  tax: TenantTax;
  createdAt: number;
  updatedAt: number;
  user: User;
  branches: Branch[];
}

export interface User {
  id: number;
  tenantId: number;
  username: string;
  name: string;
  password: string;
  telegramPhone?: string;
  isTelegramPhoneVerified?: boolean;
  telegramPhoneVerifiedAt?: number;
  roleId: number;
  createdAt: number;
  updatedAt: number;
}

export interface Branch {
  id: number;
  tenantId: number;
  code: string;
  name: string;
  type: BranchTypeEnum;
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface CartItem {
  id: string;
  name: string;
}

export interface AppState {
  currentTenant: Tenant;
  currentBranch: Branch | null;
  cart: CartItem[];
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  userId: number;
  accessToken: string;
  refreshToken: string;
}
