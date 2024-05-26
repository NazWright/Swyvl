export interface User {
  sub: string;
  email: string;
  email_verified?: string;
  family_name: string;
  phone_number: string;
  given_name: string;
  points?: number;
  current_level?: number;
}
