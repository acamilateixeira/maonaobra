import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Sobre } from '../components/pagina/sobre';

export function Home() {
  const css = makeStyles((theme: Theme) =>
    createStyles({
      title: {
        fontSize: '2rem',
        fontWeight: 'bold',
      },
    })
  )();

  return (
    <>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xl={12} lg={12} md={12} xs={12}>
          <Sobre />
        </Grid>

        <Grid item xl={12} lg={12} md={12} xs={12}>
          <Typography className={css.title} align='center'>
            Serviços
          </Typography>
        </Grid>

        <Grid item xl={12} lg={12} md={12} xs={12}>
          <Typography className={css.title} align='center'>
            Contato
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
