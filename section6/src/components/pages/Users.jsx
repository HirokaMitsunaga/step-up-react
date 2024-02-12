import React, { useContext } from "react";
import styled from "styled-components";
import { SerachInput } from "../molecules/SerachInput.jsx";
import { UserCard } from "../organisms/user/UserCard.jsx";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton.jsx";
import { UserContext } from "../../providers/UserProvider.jsx";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `影山-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "test@test.com",
    phone: "000-9999-2222",
    company: {
      name: "テスト株式会社",
    },
    website: "https://www.google.co.jp/",
  };
});

export const Users = () => {
  const { state } = useLocation();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwich = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  // const onClickSwich = () => setUserInfo(!userInfo.isAdmin);
  return (
    <SConteiner>
      <h2>ユーザ一覧</h2>
      <SerachInput />
      <SecondaryButton onClick={onClickSwich}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SConteiner>
  );
};

const SConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
