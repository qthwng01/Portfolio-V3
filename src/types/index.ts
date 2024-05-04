export interface IProject {
  _id: string;
  imageURL: string;
  name: string;
  link: string;
  github: string;
  description: string;
  tech: string[];
}

export interface IResume {
  _id: string;
  file: string;
}

export interface IContact {
  email: string;
  linkedin: string;
  github: string;
  zalo: string;
}
