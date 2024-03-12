import {Box, Container} from "@mui/material";
import {useWallet} from "@solana/wallet-adapter-react";
import {WalletConnetPane} from "./WalletConnetPane.jsx";
import {MintPane} from "./MintPane.jsx";

export const Index = () => {
  const { connected } = useWallet();

  return (
    <Box width={1} height={1}>
      <Container maxWidth={"sm"} sx={{height: 1, backgroundColor: "background.default"}}>
        <Pane connected={connected} />
      </Container>
    </Box>
  );
};

const Pane = ({connected}) => {
  if (connected) {
    return <MintPane />;
  }
  return <WalletConnetPane />;
}