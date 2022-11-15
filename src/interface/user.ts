export interface IUserRegistration {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  batch?: string;
  food?: string;
  isComing?: boolean;
}
