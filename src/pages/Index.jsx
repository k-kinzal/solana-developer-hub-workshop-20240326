import { Box, Container } from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletConnectPane } from "./WalletConnectPane.jsx";
import { MintPane } from "./MintPane.jsx";

/**
 * ページインデックスの部品（コンポーネント）
 */
export const Index = () => {
  // ウォレットの接続状態を取得
  const { connected } = useWallet();

  return (
    // コンポーネントのレンダリング
    // Box コンポーネントを使用してレイアウトを調整
    // Container コンポーネントを使用してページの幅を調整
    <Box width={1} height={1}>
      <Container
        maxWidth={"sm"}
        sx={{ height: 1, backgroundColor: "background.default" }}
      >
        {/**
         * ウォレットの接続状態に応じたペインを表示
         */}
        <Pane connected={connected} />
      </Container>
    </Box>
  );
};

/**
 * ウォレットの接続状態に応じて適切なペインを表示するコンポーネント
 * @param {Object} props コンポーネントのプロパティ
 * @param {boolean} props.connected ウォレットの接続状態
 */
const Pane = ({ connected }) => {
  if (connected) {
    return <MintPane />;
  }
  return <WalletConnectPane />;
};
