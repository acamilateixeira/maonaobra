import { ReactNode, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { Navbar } from './navbar';
import { Sidebar } from './sidebar';
import { Footer } from './footer';

interface DashboardProps {
  children: ReactNode;
}

export function Dashboard({ children }: DashboardProps) {
  const css = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
      },
      content: {
        flexGrow: 1,
      },

      footer: {
        backgroundColor: theme.palette.background.paper,
        position: 'fixed',
        left: 0,
        bottom: 0,
        right: 0,
      },
    })
  )();

  const [hiddenSidebarIsVisible, setHiddenSidebarIsVisible] = useState(false);

  function toggleHiddenSidebar() {
    setHiddenSidebarIsVisible(!hiddenSidebarIsVisible);
  }
  return (
    <>
      <div className={css.root}>
        <CssBaseline />

        <Navbar toggleHiddenSidebar={toggleHiddenSidebar} />

        <main className={css.content}>
          <Container
            maxWidth='xl'
            style={{
              margin: 0,
              padding: 0,
            }}
          >
            <Grid container>
              <Grid item xl={12} lg={12} md={12} xs={12}>
                {children}
              </Grid>
            </Grid>
          </Container>

          <Footer />
        </main>
      </div>

      <Sidebar
        hiddenSidebarIsVisible={hiddenSidebarIsVisible}
        toggleHiddenSidebar={toggleHiddenSidebar}
      />
    </>
  );
}
