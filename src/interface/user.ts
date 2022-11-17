export interface IUserRegistration {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  batch?: string;
  food?: string;
  isComing?: boolean;
  profileImgUrl?: string;
}

export interface IUser {
  id: string;
  email: string;
  fullName: string;
  batch: string;
  phone: string;
  food: string;
  profileImgUrl: string;
  isComing: boolean;
}
