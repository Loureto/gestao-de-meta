import Cookies from 'js-cookie'
import { create } from 'zustand'

import { SignInProps } from '../models/AuthModel'
import { api } from '../services/api'

interface State {
  loading: boolean
  error: boolean
}

interface Actions {
  logout: () => void
  fetchLogin: (data: SignInProps) => Promise<void>
}

const initialState: State = {
  loading: false,
  error: false
}

export const useAuthStore = create<State & Actions>((set) => ({
  ...initialState,

  fetchLogin: async (data: SignInProps) => {
    try {
      set({ loading: true })
      const response = await api.post('/token/', data)
      const { access: token } = response.data
      Cookies.set('RRE', token, { expires: 24 * 60 * 60 })
      console.log(token)
    } catch (error) {
      set({ error: true })
    } finally {
      set({ loading: false })
    }
  },

  logout: () => { Cookies.remove('RRE') }
}))
