import "./App.css";
import { ThemeProvider } from "./providers/Theme.jsx";
import { CssBaseline } from "@mui/material";
import {Index} from "./pages/Index.jsx";
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import {useMemo} from "react";
import {clusterApiUrl} from "@solana/web3.js";
import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import '@solana/wallet-adapter-react-ui/styles.css';

export const App = () => {
  const endpoint = useMemo(
    () => clusterApiUrl(WalletAdapterNetwork.Devnet),
    []
  );

  return (
    <ThemeProvider>
      <CssBaseline />
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <Index />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
}
