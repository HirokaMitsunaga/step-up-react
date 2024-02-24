import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../components/types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [loding, setLoding] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const { showMessage } = useMessage();
  const getUsers = useCallback(() => {
    setLoding(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users/")
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: "ユーザ取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoding(false);
      });
  }, []);
  return { getUsers, loding, users };
};
