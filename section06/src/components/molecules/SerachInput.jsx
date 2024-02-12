import React, { memo } from "react";
import { Input } from "../atoms/input/Input";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import styled from "styled-components";

export const SerachInput = memo(() => {
  console.log("SerachInput");
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
