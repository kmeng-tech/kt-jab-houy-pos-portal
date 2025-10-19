export interface Branch {
  id: string;
  name: string;
}

export interface CartItem {
  id: string;
  name: string;
}

export interface AppState {
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
