import {Box, Button, Stack} from "@mui/material";
import {useUmi} from "../hooks/useUmi.jsx";
import {generateSigner, percentAmount} from "@metaplex-foundation/umi";
import {createNft} from "@metaplex-foundation/mpl-token-metadata";

export const MintPane = () => {
  const umi = useUmi();

  const onMint = async () => {
    const mint = generateSigner(umi)
    const {signature, result} = await createNft(umi, {
      mint,
      name: 'Solana Developer Hub Workshop #4',
      uri: 'https://raw.githubusercontent.com/k-kinzal/solana-developer-hub-workshop-20240326/main/src/assets/metada.json',
      sellerFeeBasisPoints: percentAmount(0),
    }).sendAndConfirm(umi);

    console.log(signature, result);
  };

  return (
    <Box
      height={1}
      width={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack>
        <Box>
          <img src="https://pbs.twimg.com/profile_images/604775377844629504/II85jwYW_400x400.png" alt={""}/>
        </Box>
        <Box textAlign="center">
          <Button variant="contained" color="secondary" onClick={onMint}>Mint</Button>
        </Box>
      </Stack>
    </Box>
  );
}