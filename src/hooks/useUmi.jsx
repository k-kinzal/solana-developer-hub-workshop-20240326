import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { useWallet } from "@solana/wallet-adapter-react";
import { RPC_ENDPOINT } from "../App.jsx";

/**
 * useUmi フックを定義する関数
 * @returns {Umi} Umiインスタンス
 * @description
 * このフックは以下の責務を持つ:
 * 1. useWallet フックを使用してウォレットオブジェクトを取得する
 * 2. createUmi 関数を使用して新しい Umi インスタンスを作成する
 *   - RPC_ENDPOINT を引数として渡す
 * 3. mplTokenMetadata ミドルウェアを使用して Umi インスタンスを拡張する
 *   - トークンメタデータの機能を追加する
 * 4. walletAdapterIdentity ミドルウェアを使用して Umi インスタンスを拡張する
 *   - ウォレットアダプターを使用した認証機能を追加する
 *   - 取得したウォレットオブジェクトを引数として渡す
 * 5. 拡張された Umi インスタンスを返す
 */
export const useUmi = () => {
  // ウォレットオブジェクトを取得する
  const wallet = useWallet();

  // 新しい Umi インスタンスを作成し、ミドルウェアで拡張する
  return createUmi(RPC_ENDPOINT)
    .use(mplTokenMetadata()) // トークンメタデータ機能を追加
    .use(walletAdapterIdentity(wallet)); // ウォレットアダプターによる認証機能を追加
};
