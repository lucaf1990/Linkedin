export interface Me {
  _id: string;
  name: string;
  surname: string;
  email: string;
  username: string;
  title: string;
  bio: string;
  area: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface MyExperienceChanges {
  _id: string;
  role: string;
  company: string;
  description: string | null;
  area: string;
}

export interface ArrMe {
  _id: string;
  role: string;
  company: string;
  startDate: Date;
  description: string;
  area: string;
  username: string;
  user: string;
  createdAt: Date;
  updatedAt: Date;
  v: number;
}

export interface MyState {
  profilesFetch: Me[];
  me: Me;
  experiencesFetch: ArrMe[];
}

export interface ModalProfileSectionProps {}
