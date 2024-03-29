import { useCallback, useState } from "react";
import { User } from "../components/types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

//選択したユーザ情報を特定し、モーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelecedtUser] = useState<User | null>();
  //クリック時にユーザを特定する関数
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id == id);
    setSelecedtUser(targetUser!);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
