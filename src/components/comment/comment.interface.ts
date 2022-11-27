export interface User {
  _id: string;
  email: string;
  fullName: string;
  profileImgUrl: string;
}

export interface User2 {
  _id: string;
  email: string;
  fullName: string;
  profileImgUrl: string;
}

export interface Response {
  eventId: string;
  message: string;
  user: User2;
}

export interface IComment {
  _id: string;
  message: string;
  user: User;
  eventId: string;
  submissions: any[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  responses: Response[];
}
