import React from 'react';
import { Box, Typography, Button, Tabs, Tab, Accordion, AccordionSummary, AccordionDetails, CardMedia, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import somos from '../assets/somos.jpg';
import mision from '../assets/mision.jpg';
import vision from '../assets/vision.png';
// Si NO tienes la imagen paisaje.jpg, comenta la siguiente línea:
// import paisaje from '../assets/paisaje.jpg';
import banner from '../assets/banner.jpg';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Banner = () => {
  const [showGallery, setShowGallery] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleBack = () => {
    setShowGallery(false);
    setValue(0);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        id="banner"
        sx={{
          height: showGallery ? 'auto' : '40vh',
          position: 'relative',
          backgroundImage: typeof banner === 'string' ? `url(${banner})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
          py: 4,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.4) 100%)',
            zIndex: 1,
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              letterSpacing: '.08em',
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Bienvenido a nuestra tienda de antigüedades
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              fontWeight: 400,
              letterSpacing: '.05em',
              textShadow: '1px 1px 6px rgba(0,0,0,0.5)',
              fontSize: { xs: '1.1rem', md: '1.5rem' }
            }}
          >
            Trabajamos para ti y tu comunidad.
          </Typography>
          {!showGallery && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => setShowGallery(true)}
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.2rem' },
                px: 4,
                py: 1.5,
                borderRadius: 3,
                boxShadow: 3
              }}
            >
              Conoce más
            </Button>
          )}
          {showGallery && (
            <>
              <Box sx={{
                borderBottom: 2,
                borderColor: 'divider',
                color: 'primary',
                mb: 1,
                backgroundColor: '#e3f2fd',
                maxWidth: 400,
                mx: 'auto',
                borderRadius: 2,
                boxShadow: 2
              }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  centered
                  textColor="primary"
                  indicatorColor="primary"
                  sx={{
                    '.MuiTab-root': {
                      fontWeight: 700,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      letterSpacing: '.04em'
                    }
                  }}
                >
                  <Tab label="Misión" {...a11yProps(0)} />
                  <Tab label="Visión" {...a11yProps(1)} />
                  <Tab label="Quienes Somos" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        color: theme.palette.primary.main
                      }}
                    >
                      Misión
                    </Typography>
                  </AccordionSummary>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, gap: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <CardMedia
                        component="img"
                        height="220"
                        image={mision}
                        alt="Misión"
                        sx={{ borderRadius: 2, boxShadow: 3, maxWidth: 320, mb: 2 }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#222',
                          textAlign: 'justify',
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          lineHeight: 1.7,
                          background: '#f9f9f9',
                          borderRadius: 2,
                          p: 2,
                          boxShadow: 1
                        }}
                      >
                        En Antigüedades Sthandier, nos dedicamos a la cuidadosa selección y oferta de antigüedades vintage de valor histórico y estético, brindando a nuestros clientes piezas únicas y auténticas. Nos esforzamos por ofrecer una experiencia de compra personalizada, tanto en nuestro espacio físico en Laguna de Zapallar como a través de nuestra creciente presencia digital, facilitando el acceso a nuestros tesoros y garantizando un servicio de reservas y envíos eficiente. Contribuimos a la valorización del patrimonio cultural a través de la conservación y difusión de la historia de cada objeto.
                      </Typography>
                    </Box>
                  </Box>
                </Accordion>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        color: theme.palette.primary.main
                      }}
                    >
                      Visión
                    </Typography>
                  </AccordionSummary>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, gap: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <CardMedia
                        component="img"
                        height="220"
                        image={vision}
                        alt="Visión"
                        sx={{ borderRadius: 2, boxShadow: 3, maxWidth: 320, mb: 2 }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#222',
                          textAlign: 'justify',
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          lineHeight: 1.7,
                          background: '#f9f9f9',
                          borderRadius: 2,
                          p: 2,
                          boxShadow: 1
                        }}
                      >
                        Ser la tienda de antigüedades de referencia en la zona de Zapallar y más allá, reconocida por la calidad excepcional de nuestras piezas vintage, nuestro servicio personalizado y por preservar y compartir la rica historia que cada objeto encierra. Aspiramos a inspirar a nuestros clientes a conectar con el pasado a través de la belleza y singularidad de los objetos antiguos, enriqueciendo sus hogares y sus vidas.
                      </Typography>
                    </Box>
                  </Box>
                </Accordion>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        color: theme.palette.primary.main
                      }}
                    >
                      Quienes Somos!
                    </Typography>
                  </AccordionSummary>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, gap: 2 }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={somos}
                      alt="somos"
                      sx={{ borderRadius: 2, boxShadow: 3, maxWidth: 320, mb: 2 }}
                    />
                  </Box>
                  <AccordionDetails>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#222',
                        textAlign: 'justify',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        lineHeight: 1.7,
                        background: '#f9f9f9',
                        borderRadius: 2,
                        p: 2,
                        boxShadow: 1
                      }}
                    >
                      Antigüedades Sthandier es un emprendimiento apasionado por el encanto y la historia de los objetos antiguos. Ubicados en el corazón de Laguna de Zapallar, nos especializamos en la curación de una selecta variedad de antigüedades vintage, desde elegantes manteles bordados y delicadas vajillas hasta imponentes candelabros, espejos con historia, relojes que marcaron épocas, exquisita cristalería y otros tesoros cuidadosamente elegidos.
                      <br /><br />
                      Creemos en la belleza de lo perdurable y en el valor único que cada pieza antigua aporta a los espacios y a la vida de las personas. Ofrecemos a nuestros clientes no solo la oportunidad de adquirir objetos decorativos y utilitarios de calidad, sino también de conectar con el pasado y de poseer un pedazo de historia.
                      <br /><br />
                      Combinamos la calidez de la atención personalizada en nuestro espacio físico en Avda Eucaliptus #1809 con la comodidad de la venta online a través de nuestro perfil de Instagram @antiguedades.sthandier. Facilitamos la reserva de artículos y realizamos envíos a través de Starken para que nuestros tesoros puedan llegar a cualquier lugar.
                      <br /><br />
                      En Antigüedades Sthandier, cada objeto cuenta una historia, y estamos aquí para ayudarte a encontrar la pieza que resonará con la tuya.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CustomTabPanel>
            </>
          )}
          {showGallery && (
            <Button
              variant="contained"
              onClick={handleBack}
              sx={{
                mt: 2,
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.1rem' },
                px: 4,
                py: 1.2,
                borderRadius: 3,
                boxShadow: 2
              }}
            >
              Volver
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Banner;
