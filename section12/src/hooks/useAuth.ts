import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../components/types/api/user";
import { useHistory } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const [loding, setLoding] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoding(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "ログインしました", status: "info" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザが見つかりません", status: "error" });
          }
        })
        .catch(() =>
          showMessage({ title: "ログインできません", status: "error" })
        )
        .finally(() => setLoding(false));
    },
    [history, showMessage]
  );
  return { login, loding };
};
