import { Box, Button, Stack } from "@mui/material";
import { useUmi } from "../hooks/useUmi.jsx";
import { generateSigner, percentAmount } from "@metaplex-foundation/umi";
import { createNft } from "@metaplex-foundation/mpl-token-metadata";
import {useState} from "react";

/**
 * NFTの名前 を環境変数から取得
 * @constant {string} NFT_NAME - MintするNFTの名前
 */
const NFT_NAME = import.meta.env.VITE_NFT_NAME;

/**
 * NFTのメタデータのURL を環境変数から取得
 * @constant {string} NFT_META_URI - MintするNFTのメタデータのURL
 */
const NFT_META_URI = import.meta.env.VITE_NFT_META_URI;

/**
 * NFTの画像のURL を環境変数から取得
 * @constant {string} NFT_IMAGE_URI - MintするNFTの画像のURL
 */
const NFT_IMAGE_URI = import.meta.env.VITE_NFT_IMAGE_URI;

/**
 * MintPane コンポーネント
 * NFTのミント機能を提供するコンポーネント
 */
export const MintPane = () => {
  // ローディング状態を管理するための状態変数
  // ミント処理中は true になり、ボタンが無効化される
  const [loading, setLoading] = useState(false);

  // umiオブジェクトを取得
  // umiは、Solanaブロックチェーンとのやりとりに必要な情報を含むオブジェクトです。
  // これには、ウォレットの接続情報、ネットワーク設定、トランザクションの送信に必要な関数などが含まれます。
  const umi = useUmi();

  // NFTをミントするハンドラー関数
  const mintNft = async () => {
    setLoading(true);

    const mint = generateSigner(umi);
    const builder = createNft(umi, {
      mint,
      name: NFT_NAME,
      uri: NFT_META_URI,
      sellerFeeBasisPoints: percentAmount(0),
    });
    await builder.sendAndConfirm(umi);

    setLoading(false);
  };

  return (
    // コンポーネントのレンダリング
    // Box コンポーネントを使用してレイアウトを調整
    // 中央に Mintする画像 と Mintするボタンを配置
    <Box
      height={1}
      width={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack>
        <Box>
          {/* NFTの画像を表示 */}
          <img
            src={NFT_IMAGE_URI}
            alt={NFT_NAME}
          />
        </Box>
        <Box textAlign="center">
          {/* Mintボタンを表示 */}
          <Button variant="contained" color="secondary" onClick={mintNft} disabled={loading}>
            Mint
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
