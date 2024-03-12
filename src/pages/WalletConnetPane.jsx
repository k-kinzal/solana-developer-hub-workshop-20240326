import {Box, Button} from "@mui/material";
import {useWalletModal} from "@solana/wallet-adapter-react-ui";

export const WalletConnetPane = () => {
  const { setVisible } = useWalletModal();

  const onRequestConnectWallet = () => {
    setVisible(true);
  };

  return (
      <Box
        height={1}
        width={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Button variant="contained" onClick={onRequestConnectWallet}>Connect Wallet</Button>
      </Box>
  );
};