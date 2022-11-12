import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia, Grid } from '@mui/material'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import './IntroSection.css';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

export const IntroSection = () => {
    return (

        <>

    
            {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                <Grid item xs={4} sm={4} md={6}>
                    <div style={{
                        height: 50,
                        width: '100%',
                        border: '1px solid white'
                    }}>

                    </div>
                </Grid>

                <Grid item xs={4} sm={4} md={6}>
                    <div style={{
                        height: 50,
                        width: '100%',
                        border: '1px solid red'
                    }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm:4 , md: 6 }}>
                            <Grid item xs={2} sm={2} md={4}>
                                <div style={{
                                    height: 50,
                                    width: '50%',
                                    border: '1px solid white'
                                }}>

                                </div>
                            </Grid>
                            <Grid item xs={2} sm={2} md={6}>
                                <div style={{
                                    height: 50,
                                    width: '50%',
                                    border: '1px solid white'
                                }}>

                                </div>
                            </Grid>
                        </Grid>

                    </div>

                </Grid>
            </Grid> */}



            <div className="flex-grid">
                    <div>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 1,
                                    width: 600,
                                    height: 446,
                                    // color: '#7451FF',
                                },
                            }}
                        >
                            <Paper elevation={3} className='paper-1 main-card'>
                                <Typography gutterBottom variant='h5' component='div'>
                                    <span className='main-card-heading'> Pioneering the next <br /> generation of technophiles </span>
                                </Typography>
                                <Typography variant='body2' color='#938FBE'>
                                    <span className='main-card-content'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                        <br /> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </span>
                                </Typography>
                                {/* change the url here */}
                                <Button variant="outlined" href="https://www.google.lk" color="inherit"> 
                                    REGISTER NOW <ArrowRightAltRoundedIcon />
                                </Button>
                            </Paper>
                        </Box>
                    </div>

                    <div>

                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 1,
                                    width: 288,
                                    height: 446,
                                },
                            }}
                        >
                            <Paper elevation={3} className='paper-1 left'>
                                <Typography gutterBottom variant='h5' component='div'>
                                    <span className='card-heading'> WEBINAR SESSION</span>
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    <span className='date'>NOV 28 - DEC 1</span> <br />
                                    <span className='card-content'> Lorem ipsum dolor sit amet, consectetur scing elit, sed do eiusmod tempor incidunt ut bore. </span>
                                </Typography>
                            </Paper>
                        </Box>
                    </div>

                    <div>

                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 1,
                                    width: 288,
                                    height: 446,
                                    fontFamily: 'Montserrat',
                                },
                            }}
                        >
                            <Paper elevation={3} className='paper-1 right'>
                                <Typography gutterBottom variant='h5' component='div'>
                                    <span className='card-heading'>IN-PERSON EVENT</span>
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    <span className='date'>DEC 2</span> <br />
                                    <span className='card-content'> Lorem ipsum dolor sit amet, consectetur scing elit, sed do eiusmod tempor incidunt ut bore. </span>
                                </Typography>
                            </Paper>
                        </Box>
                    </div>
            </div>

        </>


    )
};

