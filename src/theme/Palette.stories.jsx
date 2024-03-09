import { Box, Stack, Paper, Typography, useTheme, Grid } from "@mui/material";

export default {
  title: "Theme/Palette",
};

const ColorBox = ({ color }) => {
  const { palette, spacing } = useTheme();
  return (
    <Stack direction={"column"}>
      <Box
        sx={{
          width: 1,
          aspectRatio: "1 / 1",
          padding: spacing(1),
          bgcolor: color.main,
          color: color.contrastText,
        }}
      >
        main
      </Box>
      <Stack sx={{ width: 1, aspectRatio: "1 / 0.5" }} direction={"row"}>
        <Box
          sx={{
            height: 1,
            aspectRatio: "1 / 1",
            padding: spacing(1),
            bgcolor: color.light,
            color: palette.getContrastText(color.light),
          }}
        >
          light
        </Box>
        <Box
          sx={{
            height: 1,
            aspectRatio: "1 / 1",
            padding: spacing(1),
            bgcolor: color.dark,
            color: palette.getContrastText(color.dark),
          }}
        >
          dark
        </Box>
      </Stack>
    </Stack>
  );
};

const Variation = ({ color }) => {
  const { palette, spacing } = useTheme();
  const variations = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  return (
    <Grid container sx={{ width: 1 }}>
      {variations.map((variation) => (
        <Grid
          item
          xs={1}
          sx={{
            aspectRatio: "1 / 1",
            padding: spacing(1),
            bgcolor: color[variation],
            color: palette.getContrastText(color[variation]),
          }}
        >
          {variation}
        </Grid>
      ))}
    </Grid>
  );
};

const Template = () => {
  const { palette, spacing } = useTheme();

  return (
    <Paper sx={{ padding: spacing(2), backgroundColor: "background.default" }}>
      <Grid container xs={12} mb={spacing(2)} sx={{ width: 1 }}>
        <Grid item xs={2}>
          <Typography variant={"overline"}>PRIMARY</Typography>
          <ColorBox color={palette.primary} />
        </Grid>
        <Grid item xs={2} ml={spacing(2)}>
          <Typography variant={"overline"}>SECONDARY</Typography>
          <ColorBox color={palette.secondary} />
        </Grid>
      </Grid>
      <Box mb={spacing(2)}>
        <Typography variant={"overline"}>GREY</Typography>
        <Variation color={palette.grey} />
      </Box>
      <Grid container mb={spacing(2)} sx={{ width: 1 }}>
        <Grid item xs={2}>
          <Typography variant={"overline"}>INFO</Typography>
          <ColorBox color={palette.info} />
        </Grid>
        <Grid item xs={2} ml={spacing(2)}>
          <Typography variant={"overline"}>SUCCESS</Typography>
          <ColorBox color={palette.success} />
        </Grid>
        <Grid item xs={2} ml={spacing(2)}>
          <Typography variant={"overline"}>WARNING</Typography>
          <ColorBox color={palette.warning} />
        </Grid>
        <Grid item xs={2} ml={spacing(2)}>
          <Typography variant={"overline"}>ERROR</Typography>
          <ColorBox color={palette.error} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export const Default = Template.bind({});
