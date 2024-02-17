import React, { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// export const Text = (props: Props) => {
export const Text: FC<Props> = (props: Props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>Text</p>;
};
