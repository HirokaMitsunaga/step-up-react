import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  const { getUsers, loding, users } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickUser = useCallback(() => onOpen(), []);

  //getUsersに変更があった時だけレンダリングするようにuseEffectを使う
  useEffect(() => getUsers(), []);
  return (
    <>
      {loding ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              ></UserCard>
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
