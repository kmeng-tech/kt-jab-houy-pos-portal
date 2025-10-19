/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useReducer, useContext } from 'react';
import type { ReactNode } from 'react';
import type { AppState, Branch, Product } from '../types';

// Define the shape of actions that can be taken
type Action =
  | { type: 'SET_BRANCH'; payload: Branch }
  | { type: 'ADD_TO_CART'; payload: Product };

// The context itself
const AppStateContext = createContext<
  | {
      state: AppState;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

// The reducer function handles state changes
const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_BRANCH':
      return { ...state, currentBranch: action.payload };

    case 'ADD_TO_CART': {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        // If item exists, increase quantity
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If item is new, add it to the cart
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }
    default:
      return state;
  }
};

// The provider component that wraps our app
export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const initialState: AppState = {
    currentBranch: null,
    cart: [],
  };
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

// A custom hook to easily access the state and dispatch function
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
