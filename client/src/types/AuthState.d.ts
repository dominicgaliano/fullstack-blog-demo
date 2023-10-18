interface AuthState {
  loading: boolean;
  token: string | null;
  isAuthenticated: boolean;
  error: string | null;
}

export default AuthState;
