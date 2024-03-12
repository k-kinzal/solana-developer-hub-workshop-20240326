import "./App.css";
import { ThemeProvider } from "./providers/Theme.jsx";
import { CssBaseline } from "@mui/material";
import {Index} from "./pages/Index.jsx";
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import '@solana/wallet-adapter-react-ui/styles.css';

export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT;

export const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <ConnectionProvider endpoint={RPC_ENDPOINT}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <Index />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
}
