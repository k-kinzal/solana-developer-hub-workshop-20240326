import { MintPane } from "./MintPane";
import { RPC_ENDPOINT } from "../App.jsx";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

export default {
  title: "Panes/MintPane",
  component: MintPane,
};

export const Default = {
  args: undefined,
  render: () => (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <WalletProvider wallets={[]} autoConnect>
        <MintPane />
      </WalletProvider>
    </ConnectionProvider>
  ),
};
