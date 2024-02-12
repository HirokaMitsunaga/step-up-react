// import React from "react";
export const Practice2 = () => {
  const onClickParactice = () => {
    console.log(getTotalFee(1000));
  };

  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  return (
    <div>
      <p>練習問題：戻り値の型指定</p>
      <button onClick={onClickParactice}>練習問題2を実行</button>
    </div>
  );
};
