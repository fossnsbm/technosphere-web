export interface IWebinar {
  _id: string;
  name: string;
  description: string;
  speacker: string;
  speackerImgUrl: string;
  date: string;
  speackerDescription: string;
  createdAt: Date;
  updatedAt: Date;
  s3Url: string;
  __v: number;
  isLive?: boolean;
  liveStream: string;
  isStreamOnYoutube: boolean;
}
