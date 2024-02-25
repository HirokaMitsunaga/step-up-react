import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { User } from "../types/api/user";

export type LoginUserContextType = {
  loginUser: User;
  //下記、よくわからん
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  //下記、よくわからん
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>();

  //contextの競合避けると際はproviderを2つにわける方法もある
  //loginUserの更新時にsetLoginUserのレンダリングをわける方法があるという意味
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
