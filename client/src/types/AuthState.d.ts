interface AuthState {
  loading: boolean;
  token: string | null;
  success: boolean;
  error: string | null;
}

export default AuthState;
