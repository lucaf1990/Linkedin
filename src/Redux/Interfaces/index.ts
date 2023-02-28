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
export interface ArrayMe {
  _id:       string;
  name:      string;
  surname:   string;
  email:     string;
  username:  string;
  title:     string;
  bio:       string;
  area:      string;
  image:     string;
  createdAt: Date;
  updatedAt: Date;
  __v:       number;
}

export interface MyState {
  profilesFetch: ArrayMe[];
  me: Me;
}
