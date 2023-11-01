export interface SignInProps {
  email: string;
  password: string;
}

export interface SignUpProps {
  open: boolean
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
}