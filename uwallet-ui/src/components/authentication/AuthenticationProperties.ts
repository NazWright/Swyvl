interface SharedAuthenticationProperties {
  setLoading: (isLoading: boolean) => void;
}

export interface SignInProperties extends SharedAuthenticationProperties {}

export interface SignUpProperties extends SharedAuthenticationProperties {
  verificationHandler: () => void;
}
