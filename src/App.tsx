import { Box, Button, Container, Stack } from '@mui/material'
import './App.css'
import Grid2 from '@mui/material/Unstable_Grid2'

function App() {

  return (
    <>
      <Container maxWidth="xl">
        <Grid2 container spacing={2}>
          <Grid2 md={12}>
            <Stack direction={"row"} spacing={2}>
              <Button variant={"outlined"}>Простий пошук</Button>
              <Button variant={"outlined"}>Крадіжка по айді</Button>
              <Button variant={"outlined"}>Крадіжка у лідерборда</Button>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>

    </>
  )
}

export default App
