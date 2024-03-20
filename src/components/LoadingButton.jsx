import {Button,} from "@mui/material";
import {useState} from "react";

function isPromise(obj) {
  return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// ローディング状態を管理するボタンコンポーネント
export const LoadingButton = ({children, onClick, ...props}) => {
  // ローディング状態を管理するstate
  const [ loading, setLoading ] = useState(false);

  const click = async () => {
    setLoading(true);
    const result = onClick();
    if (isPromise(result)) {
      await result;
    }
    setLoading(false);

  }

  return (
    <Button
      onClick={click}
      disabled={loading}

      {...props}
    >
      {children}
    </Button>
  );
};