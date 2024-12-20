'use client';
import { Provider } from 'react-redux';
import { store } from './store';
import TokenRefresh from '@/auth/TokenRefresh';
import UserMode from '@/auth/UserMode';

const ProviderRedux = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
      <TokenRefresh />
      <UserMode />
    </Provider>
  );
};
export default ProviderRedux;
