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
  _id?: string;
  role: string;
  company: string;
  startDate: Date;
  description: string | null;
  area: string;
  user?: string;
}

export interface MyProfileChanges {
  name: string;
  surname: string;
  area: string;
  bio: string;
  title: string;
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
  __v: number;
}

export interface MyState {
  profilesFetch: Me[];
  me: Me;
  experiencesFetch: ArrMe[];
}

export interface MyHomeState {
  postsFetch: postFetch[];
}
export interface ModalProfileSectionProps {}

export interface postFetch {
  _id: string;
  text: string;
  username: string;
  user: {
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
    v: number;
  };
  createdAt: Date;
  updatedAt: Date;
  v: number;
}

export interface newPost {
  text: string;
}
