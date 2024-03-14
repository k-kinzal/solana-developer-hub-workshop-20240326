import { WalletConnectPane } from "./WalletConnectPane.jsx";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

export default {
  title: "Panes/WalletConnetPane",
  component: WalletConnectPane,
};

export const Default = {
  args: undefined,
  render: () => (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletConnectPane />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  ),
};
