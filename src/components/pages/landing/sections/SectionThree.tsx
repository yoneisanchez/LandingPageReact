import { Box, Button, Grid, Typography } from "@mui/material";

const SectionThree = () => {
    return (
        <Grid container>
            <Grid
                item
                xs={12}>
                <Box
                    sx={{
                        background: '#03b044'
                    }}>
                    <Grid
                        container>
                        <Grid
                            item
                            xs={12}
                            md={6}>
                            <Box
                                p={10}
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}>
                                <Typography
                                    color={'white'}
                                    fontSize={70}
                                    fontWeight={700}
                                    maxWidth={440}
                                    lineHeight={1.1} >
                                    Lorem ipsum dolor sit amet, consectetur
                                </Typography>
                                <Box
                                    maxWidth={440}
                                    gap={2}
                                    display={'flex'}
                                    flexDirection={'column'}
                                    pt={3}
                                    width={'100%'}>
                                    <Button
                                        variant="contained"
                                        color="inherit"
                                        size="large"
                                        fullWidth 
                                        sx={{
                                            fontSize: 22,
                                            background: 'white',
                                            py:3
                                        }}>
                                        Lorem ipsum dolor sit
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="inherit"
                                        size="large"
                                        fullWidth
                                        sx={{
                                            fontSize: 22,
                                            border: '1px solid white',
                                            color: 'white',
                                            py:3
                                        }}>
                                        Lorem ipsum dolor sit amet
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                backgroundImage: 'url(/images/Pic5.png)',
                                backgroundPositionX: 'center',
                                backgroundPositionY: 'bottom',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '530px'
                            }} >

                        </Grid>
                    </Grid>
                </Box>
            </Grid>

        </Grid>
    );
}

export default SectionThree;

