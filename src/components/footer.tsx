import { Box, IconButton, Link, Tooltip, Typography } from '@material-ui/core';
import { FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  function openLink(link: string) {
    window.open(link, '_blank');
  }

  function openWhatsapp() {
    openLink(
      'https://api.whatsapp.com/send?phone=5531989658128&text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20voc%C3%AAs'
    );
  }

  return (
    <>
      <Box pt={4} display='flex' justifyContent='center' alignItems='center'>
        <Typography variant='body2' color='textSecondary' align='center'>
          {'Copyright © '}

          <Link color='inherit' href='https://www.instagram.com/acamilateixeiraa'>
            acamilateixeiraa
          </Link>

          {` ${new Date().getFullYear()}.`}
        </Typography>
      </Box>

      <Box
        pt={4}
        display='flex'
        justifyContent='flex-end'
        alignItems='center'
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <Tooltip title='Entre em contato pelo Whatsapp' placement='top' open={true}>
          <IconButton
            onClick={openWhatsapp}
            style={{
              marginTop: '-100px',
              marginRight: '30px',
              color: '#fff',
              backgroundColor: '#00D9A3',
              borderRadius: '50%',
              padding: '5px',
            }}
          >
            <FaWhatsapp />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
}
