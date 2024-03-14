import { Index } from "./Index";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

export default {
  title: "Pages/Index",
  component: Index,
};

export const Default = {
  args: undefined,
  render: () => (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <Index />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  ),
};
