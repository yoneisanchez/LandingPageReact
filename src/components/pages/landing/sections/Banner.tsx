import React from 'react'
import { Box, Button, Grid, Icon, Typography } from "@mui/material";
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import SensorsIcon from '@mui/icons-material/Sensors';

type Props = {
    text: string
}

const Banner = ({text}:Props) => {
    return (
        <Grid container>
            <Grid item
                xs={12}>
                <Box
                    style={{ background: '#03b044' }}
                    height={50}
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}>
                    <Button
                        style={{ background: '#e92100', height: '100%', borderRadius: 0 }}>
                        <Typography
                            color="white"
                            pr={1}
                            fontSize={22}
                            fontWeight={600}>
                            LIVE
                        </Typography>
                        <Icon
                            style={{ height: 40, width: 40 }}>
                            <SensorsIcon
                                style={{ color: "white", width: '100%', height: '100%' }} />
                        </Icon>
                    </Button>
                    <Typography
                        color="white"
                        fontSize={22}
                        px={3}
                        fontWeight={300}>
                        {text}
                    </Typography>
                    <Button
                        style={{ background: '#07913b', height: '100%', borderRadius: 0 }} >
                        <Box
                            style={{}}
                            px={2}
                            display={'flex'}
                            alignItems="center">
                            <Typography
                                color="white"
                                pr={2}
                                fontSize={22}
                                fontWeight={600}>
                                JOIN NOW
                            </Typography>
                            <Icon
                                style={{ height: 40, width: 40 }}>
                                <PlayCircleOutlineRoundedIcon
                                    style={{ color: "white", width: '100%', height: '100%' }} />
                            </Icon>
                        </Box>
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Banner;

