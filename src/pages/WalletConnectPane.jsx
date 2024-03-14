import { Box, Button } from "@mui/material";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

/**
 * WalletConnectPane コンポーネント
 * ウォレット接続のためのUIを提供する
 */
export const WalletConnectPane = () => {
  // useWalletModal フックから setVisible 関数を取得
  // この関数はウォレットモーダルの表示・非表示を切り替える
  const { setVisible } = useWalletModal();

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
        クリック時に onRequestConnectWallet 関数を呼び出す
      */}
      <Button variant="contained" onClick={() => setVisible(true)}>
        Connect Wallet
      </Button>
    </Box>
  );
};
