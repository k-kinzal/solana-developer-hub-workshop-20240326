import { ThemeProvider } from "./providers/Theme.jsx";
import { CssBaseline } from "@mui/material";
import { Index } from "./pages/Index.jsx";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

/**
 * RPC エンドポイントの URL を環境変数から取得
 * @constant {string} RPC_ENDPOINT - Solana RPC エンドポイントの URL
 */
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT;

/**
 * NFTのメタデータのURL を環境変数から取得
 * @constant {string} NFT_META_URI - MintするNFTのメタデータのURL
 */
export const NFT_META_URI = import.meta.env.VITE_NFT_META_URI;

/**
 * アプリケーションの一番上位の部品（コンポーネント）
 * この部品の中に、アプリケーションを構成する他の部品が入ります
 */
export const App = () => {
  return (
    // アプリケーション全体のテーマを提供
    <ThemeProvider>
      {/* Material-UI の CSS ベーススタイルを適用 */}
      <CssBaseline />
      {/* Solana への接続を管理 */}
      <ConnectionProvider endpoint={RPC_ENDPOINT}>
        {/* ウォレットの接続状態を管理し、ウォレット選択 UI を提供 */}
        <WalletProvider wallets={[]} autoConnect>
          {/* ウォレット接続のモーダルダイアログを管理 */}
          <WalletModalProvider>
            {/* アプリケーションのメインコンテンツ */}
            <Index />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};
