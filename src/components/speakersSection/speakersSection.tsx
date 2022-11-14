import React from 'react';
import { Card, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import arrow from "../../assets/speaker_arrow.svg";
import "./speakersSection.css";

function SpeakersSection() {
    return (
        <div className="speakers_section">
        <Container className="speakers" >
            <Typography variant="h3" className="speakers_heading">Speakers</Typography>
            <Typography className="speakers_tagline">Industrial Leads</Typography>
            <Typography className="webinar_heading">Webinar Speakers</Typography>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} lg={3} justifyContent="center" display="flex">
                    <Box className="speakerCard" sx={{ minHeight: 280, minWidth: 280, borderRadius: 6, display: 'flex', alignItems: 'end' }} >
                        <Grid>
                            <Grid item>
                                <Typography className="speaker_name">
                                    Thaanu Perera
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className="speaker_job">
                                    UI/UX Designer at Surge Global
                                </Typography>
                            </Grid>
                        </Grid> 
                        <Grid xs="auto" >
                            <Grid item>
                                <Box component="img" className="speaker_name" src={arrow} sx={{ width: '24px', marginLeft: '12px'}}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} justifyContent="center" display="flex">
                    <Box className="speakerCard" sx={{ minHeight: 280, minWidth: 280, borderRadius: 6, display: 'flex', alignItems: 'end' }} >
                        <Grid>
                            <Grid item>
                                <Typography className="speaker_name">
                                    Thaanu Perera
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className="speaker_job">
                                    UI/UX Designer at Surge Global
                                </Typography>
                            </Grid>
                        </Grid> 
                        <Grid xs="auto" >
                            <Grid item>
                                <Box component="img" className="speaker_name" src={arrow} sx={{ width: '24px', marginLeft: '12px'}}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} justifyContent="center" display="flex">
                    <Box className="speakerCard" sx={{ minHeight: 280, minWidth: 280, borderRadius: 6, display: 'flex', alignItems: 'end' }} >
                        <Grid>
                            <Grid item>
                                <Typography className="speaker_name">
                                    Thaanu Perera
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className="speaker_job">
                                    UI/UX Designer at Surge Global
                                </Typography>
                            </Grid>
                        </Grid> 
                        <Grid xs="auto" >
                            <Grid item>
                                <Box component="img" className="speaker_name" src={arrow} sx={{ width: '24px', marginLeft: '12px'}}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} justifyContent="center" display="flex">
                    <Box className="speakerCard" sx={{ minHeight: 280, minWidth: 280, borderRadius: 6, display: 'flex', alignItems: 'end' }} >
                        <Grid>
                            <Grid item>
                                <Typography className="speaker_name">
                                    Thaanu Perera
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className="speaker_job">
                                    UI/UX Designer at Surge Global
                                </Typography>
                            </Grid>
                        </Grid> 
                        <Grid xs="auto" >
                            <Grid item>
                                <Box component="img" className="speaker_name" src={arrow} sx={{ width: '24px', marginLeft: '12px'}}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            <Typography className="inperson_heading">In-person Event Speakers</Typography>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} lg={3} justifyContent="center" display="flex">
                    <Box className="speakerCard" sx={{ minHeight: 280, minWidth: 280, borderRadius: 6, display: 'flex', alignItems: 'end' }} >
                        <Grid>
                            <Grid item>
                                <Typography className="speaker_name">
                                    Thaanu Perera
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className="speaker_job">
                                    UI/UX Designer at Surge Global
                                </Typography>
                            </Grid>
                        </Grid> 
                        <Grid xs="auto" >
                            <Grid item>
                                <Box component="img" className="speaker_name" src={arrow} sx={{ width: '24px', marginLeft: '12px'}}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} justifyContent="center" display="flex">
                    <Box className="speakerCard" sx={{ minHeight: 280, minWidth: 280, borderRadius: 6, display: 'flex', alignItems: 'end' }} >
                        <Grid>
                            <Grid item>
                                <Typography className="speaker_name">
                                    Thaanu Perera
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className="speaker_job">
                                    UI/UX Designer at Surge Global
                                </Typography>
                            </Grid>
                        </Grid> 
                        <Grid xs="auto" >
                            <Grid item>
                                <Box component="img" className="speaker_name" src={arrow} sx={{ width: '24px', marginLeft: '12px'}}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} justifyContent="center" display="flex">
                    <Box className="speakerCard" sx={{ minHeight: 280, minWidth: 280, borderRadius: 6, display: 'flex', alignItems: 'end' }} >
                        <Grid>
                            <Grid item>
                                <Typography className="speaker_name">
                                    Thaanu Perera
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className="speaker_job">
                                    UI/UX Designer at Surge Global
                                </Typography>
                            </Grid>
                        </Grid> 
                        <Grid xs="auto" >
                            <Grid item>
                                <Box component="img" className="speaker_name" src={arrow} sx={{ width: '24px', marginLeft: '12px'}}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} justifyContent="center" display="flex">
                    <Box className="speakerCard" sx={{ minHeight: 280, minWidth: 280, borderRadius: 6, display: 'flex', alignItems: 'end' }} >
                        <Grid>
                            <Grid item>
                                <Typography className="speaker_name">
                                    Thaanu Perera
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className="speaker_job">
                                    UI/UX Designer at Surge Global
                                </Typography>
                            </Grid>
                        </Grid> 
                        <Grid xs="auto" >
                            <Grid item>
                                <Box component="img" className="speaker_name" src={arrow} sx={{ width: '24px', marginLeft: '12px'}}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </div>
    );
}
export default SpeakersSection;