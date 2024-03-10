import {Box, Button, Container} from "@mui/material";
import {useWallet} from "@solana/wallet-adapter-react";
import {useWalletModal} from "@solana/wallet-adapter-react-ui";

export const Index = () => {
  const { wallet } = useWallet();
  const { setVisible } = useWalletModal();

  const onRequestConnectWallet = () => {
    setVisible(true);
  };

  console.log(wallet)

  return (
    <Box width={1} height={1}>
      <Container maxWidth={"sm"} sx={{height: 1, backgroundColor: "background.default"}}>
        <Box
          height={1}
          width={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button variant="contained" onClick={onRequestConnectWallet}>Connect Wallet</Button>
        </Box>
      </Container>
    </Box>
  );
};