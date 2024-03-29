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
  image: string;
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
  image?: string;
  __v: number;
}

export interface MyState {
  profilesFetch: Me[];
  me: Me;
  experiencesFetch: ArrMe[];
}
export interface MyLikes {
  likes: postFetch[];
}

export interface MyHomeState {
  postsFetch: postFetch[];
  followers: string[];
  likes: postFetch[];
}

export interface ModalProfileSectionProps {}

export interface postFetch {
  _id: string;
  text: string;
  username: string;
  image?: string;
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
  _id?: string;
  image?: string;
}

export interface myComments {
  commentsFetch: comments[];
}

export interface comments {
  _id?: string;
  comment: string;
  rate: string;
  elementId: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface showComments {
  showComments: boolean;
}

export interface NewComments {
  _id?: string;
  comment: string;
  rate: string;
  elementId: string;
  author: string;
}

export interface Jobs {
  _id: string;
  url: string;
  title: string;
  company_name: string;
  category: string;
  job_type: string;
  publication_date: string;
  candidate_required_location: string;
  salary: string;
  description: string;
}

export interface MyJobs {
  Jobs: Jobs[];
}
