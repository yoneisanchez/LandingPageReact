
import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import Swipeable from '@/components/shared/carousel/carousel';

const CarouselSection = () => {

    const images = [
        '/images/Pic7.png',
        '/images/Pic8.png',
        '/images/Pic9.png',
        '/images/Pic10.png',
    ];

    return (
        <Grid
            container>
            <Grid
                item
                xs={12}>
                <Typography
                    color={'white'}
                    fontSize={70}
                    fontWeight={700}
                    paddingBottom={10}
                    lineHeight={1.1}
                    textAlign={'center'}>
                    Lorem ipsum dolor sit
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}>
                <Swipeable
                    items={images}
                    itemsByPage={3} />
            </Grid>
            <Grid
                item
                xs={12}>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    pt={4}>
                    <Button
                        variant="contained"
                        color='inherit'
                        size='large'
                        sx={{
                            background: '#ffffff',
                            fontSize: 22,
                            px: 8
                        }}>
                        VIEW ALL
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CarouselSection;