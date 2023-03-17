export type AuthContextType = {
  isLoggedIn: boolean;
  username?: string;
  email?: string;
  token?: string;
  login: (username: string, email: string, token: string) => void;
  logout: () => void;
};
export type ChildProps = {
  children?: React.ReactNode;
};
export type RegisterFormType = {
  username: string;
  email: string;
  password: string;
  confirm: string;
};
export type LoginFormType = {
  email: string;
  password: string;
};
export type Hotel = {
  _id: string;
  name: string;
  rooms: number;
  location: string;
  toilets: number;
  showers: number;
  img: string;
  price:number;
  priceweekend:number;
};
export type showhotels = {
  card: Hotel[];
};
export type Flight={
  _id:string;
  from:string;
  dst:string;
  price:number;
}