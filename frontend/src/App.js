import { Container, Fab, Stack, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';

function App() {
  return (
    <Container maxWidth='sm'>
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Todo List - Desafio CI&T
        </Typography>

        <Stack spacing={2}>
          <TextField label='Título'></TextField>
          <TextField label='Descrição'></TextField>
          <Fab color='primary' aria-label='add' variant='extended'>
            <AddIcon />
            Salvar Tarefa
          </Fab>
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
