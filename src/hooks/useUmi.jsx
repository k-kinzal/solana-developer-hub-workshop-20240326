import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters'
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata'
import {useWallet} from '@solana/wallet-adapter-react'
import {RPC_ENDPOINT} from "../App.jsx";

export const useUmi = () => {
  const wallet = useWallet();

  return createUmi(RPC_ENDPOINT)
    .use(mplTokenMetadata())
    .use(walletAdapterIdentity(wallet))
}