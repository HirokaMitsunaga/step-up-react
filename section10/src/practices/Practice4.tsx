// import React from "react";
export const Practice4 = () => {
  const onClickTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickParactice = () => {
    return onClickTotalFee(1000);
  };
  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickParactice}>練習問題4を実行</button>
    </div>
  );
};
