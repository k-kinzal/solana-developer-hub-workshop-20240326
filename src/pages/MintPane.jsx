import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useUmi } from "../hooks/useUmi.jsx";
import { generateSigner, percentAmount } from "@metaplex-foundation/umi";
import { createNft } from "@metaplex-foundation/mpl-token-metadata";
import { useState } from "react";
import bs58 from "bs58";
import metadata from "../assets/metada.json";
import { NFT_META_URI } from "../App.jsx";

/**
 * MintPane コンポーネント
 * NFTのミント機能を提供するコンポーネント
 */
export const MintPane = () => {
  // ローディング状態を管理するための状態変数
  // ミント処理中は true になり、ボタンが無効化される
  const [loading, setLoading] = useState(false);

  // シグネチャを管理するための状態変数
  // ミント処理が成功した場合に、シグネチャがセットされる
  const [signature, setSignature] = useState(null);

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
      name: metadata.name,
      uri: NFT_META_URI,
      sellerFeeBasisPoints: percentAmount(0),
    });
    const { signature } = await builder.sendAndConfirm(umi);
    setSignature(bs58.encode(signature));

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
      textAlign="center"
    >
      {/* NFTの情報を表示するカードコンポーネント */}
      <Card sx={{ maxWidth: 345 }}>
        {/*
          NFTの画像を表示
          CardMediaのaspectRationは設定した画像のアスペクト比を指定する（e.g. "16 / 9 auto", "1 / 1 auto", "4 / 3 auto"）
        */}
        <CardMedia
          sx={{ aspectRatio: "1 / 1 auto" }}
          image={metadata.image}
          title={metadata.name}
        />
        {/* NFTの名前と説明を表示 */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {metadata.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {metadata.description}
          </Typography>
        </CardContent>
        {/* Mintボタンと署名結果を表示 */}
        <CardActions sx={{ justifyContent: "center" }}>
          {/* 署名がない場合はMintボタンを表示 */}
          {signature === null && (
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={mintNft}
              disabled={loading}
            >
              Mint
            </Button>
          )}
          {/* 署名がある場合はトランザクションへのリンクを表示 */}
          {signature !== null && (
            <Button
              size="small"
              href={`https://explorer.solana.com/tx/${signature}`}
              target="_blank"
            >
              View Transaction
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};
