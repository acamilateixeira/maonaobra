import { Box, Card, CardContent, Grid, Paper, Tabs, Typography } from '@material-ui/core';
import { useState } from 'react';
import { TabOption } from '../TabOption';

export function Sobre() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='40vh'
        width='100%'
        style={{
          backgroundImage: `url(${'static/dark.png'})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          backgroundColor: '#557C55',
        }}
      />

      <Box display='flex' justifyContent='center' alignItems='center'>
        <Paper
          elevation={3}
          style={{
            width: '80%',
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={(event, newValue) => setSelectedTab(newValue)}
            indicatorColor='secondary'
            textColor='secondary'
            centered
          >
            <TabOption
              label='História'
              onClick={() => setSelectedTab(0)}
              selected={selectedTab === 0}
            />

            <TabOption
              label='Serviços'
              onClick={() => setSelectedTab(1)}
              selected={selectedTab === 1}
            />

            <TabOption
              label='Contato'
              onClick={() => setSelectedTab(2)}
              selected={selectedTab === 2}
            />
          </Tabs>

          <Box>
            {selectedTab === 0 && (
              <Card>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xl={12} lg={12} md={12} xs={12}>
                      <Typography
                        variant='h5'
                        style={{
                          fontWeight: 'bold',
                        }}
                      >
                        História
                      </Typography>

                      <Typography variant='body1'>
                        A empresa foi fundada em 2019, com o intuito de atender aos clientes de
                        forma rápida e eficiente.
                      </Typography>
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} xs={12}>
                      <Typography
                        variant='h5'
                        style={{
                          fontWeight: 'bold',
                        }}
                      >
                        Missão
                      </Typography>

                      <Typography variant='body1'>
                        Oferecer serviços de qualidade e com preço justo.
                      </Typography>
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} xs={12}>
                      <Typography
                        variant='h5'
                        style={{
                          fontWeight: 'bold',
                        }}
                      >
                        Visão
                      </Typography>

                      <Typography variant='body1'>Ser referência no mercado.</Typography>
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} xs={12}>
                      <Typography
                        variant='h5'
                        style={{
                          fontWeight: 'bold',
                        }}
                      >
                        Valores
                      </Typography>

                      <Typography variant='body1'>
                        Respeito, ética, transparência e compromisso.
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}
          </Box>

          {selectedTab === 1 && <Box>Serviços</Box>}
          {selectedTab === 2 && <Box>Contato</Box>}
        </Paper>
      </Box>
    </>
  );
}
