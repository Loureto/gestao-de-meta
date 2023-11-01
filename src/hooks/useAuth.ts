import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { SignInProps } from '@/shared/models/AuthModel';
import { useAuthStore } from '@/shared/store/useAuthStore';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const { fetchLogin } = useAuthStore();
  const { replace } = useRouter();
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [openModalSignUp, setOpenModalSignUp] = useState<boolean>(false);

  async function handleClickSignIn(data: SignInProps) {
    await fetchLogin(data);
    replace('/dashboard');
  }

  function handleClickLogout() {
    Cookies.remove('RRE');
    replace('/');
  }

  return {
    viewPassword,
    openModalSignUp,
    setViewPassword,
    setOpenModalSignUp,
    handleClickSignIn,
    handleClickLogout
  };
};
