import { Box, Button, Grid, Typography } from "@mui/material";


const SectionFive = () => {
    return (
        <Grid
            container>
            <Grid
                item xs={12}>
                <Box
                    sx={{
                        backgroundImage: 'url(/images/Pic6.png)',
                        backgroundPositionX: '40%',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <Grid
                        container>
                        <Grid
                            item
                            xs={12}
                            md={6}>
                            <Box
                                px={10}
                                py={26}>
                                <Typography
                                    fontSize={70}
                                    fontWeight={700}
                                    maxWidth={440}
                                    lineHeight={1.1} >
                                    Lorem ipsum dolor sit
                                </Typography>
                                <Typography
                                    fontSize={20}
                                    lineHeight={1.1}
                                    paddingBottom={4}
                                    paddingTop={4}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                </Typography>
                                <Box
                                    maxWidth={440}
                                    gap={2}
                                    display={'flex'}
                                    flexDirection={'column'}
                                    alignItems={'flex-start'}
                                    pt={3}>
                                    <Button
                                        variant="contained"
                                        color='primary'
                                        sx={{
                                            background: '#03b044',
                                            color: 'white',
                                            fontSize: 22,
                                            px: 8
                                        }}
                                        size="large">
                                        VIEW ALL
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}>

                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default SectionFive;
