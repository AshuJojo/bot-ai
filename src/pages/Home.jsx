import { Avatar, Box, Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import Logo from '../assets/images/soul-avatar.png'
import SuggestionCard from "../components/SuggestionCard/SuggestionCard"

const Home = () => {
  return (
    <Stack spacing={2} sx={{ mx: 2, my: 10, flexGrow: 1 }}>
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Typography
          variant="h2"
          fontWeight={500}
          textAlign='center'
        >
          How Can I Help You Today?
        </Typography>
        <Avatar alt="Soul AI Logo" src={Logo}
          sx={{
            width: 60,
            height: 60,
            boxShadow: '-4px 4px 10px 0px #00000026',
          }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid size={{xs: 12, md: 6}}>
          <SuggestionCard />
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <SuggestionCard />
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <SuggestionCard />
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <SuggestionCard />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Home