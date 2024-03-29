import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  //statusは以下のいずれかを意受け取る
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        title,
        status,
        position: "top",
        //20秒で閉じる
        duration: 2000,
        //閉じることができるかどうか
        isClosable: true,
      });
    },
    [toast]
  );
  return { showMessage };
};
