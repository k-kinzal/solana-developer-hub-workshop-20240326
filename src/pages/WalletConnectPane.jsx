import { Box, Button } from "@mui/material";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

/**
 * WalletConnectPane コンポーネント
 * ウォレット接続のためのUIを提供する
 */
export const WalletConnectPane = () => {
  // useWallet フックを使用してウォレットオブジェクトを取得
  // このオブジェクトにはウォレットの接続状態やアドレスなどの情報が含まれる
  const { wallet } = useWallet();

  // useWalletModal フックから setVisible 関数を取得
  // この関数はウォレットモーダルの表示・非表示を切り替える
  const { setVisible } = useWalletModal();

  const showWalletModal = () => {
    setVisible(true);
  };

  return (
    // コンポーネントのレンダリング
    // Box コンポーネントを使用してレイアウトを調整
    // 中央に "Connect Wallet" ボタンを配置
    <Box
      height={1}
      width={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/*
        "Connect Wallet" ボタン
        クリック時に ウォレットモーダル を表示する
      */}
      <Button variant="contained" onClick={showWalletModal}>
        {wallet?.connected ? "Connected" : "Connect Wallet"}
      </Button>
    </Box>
  );
};
