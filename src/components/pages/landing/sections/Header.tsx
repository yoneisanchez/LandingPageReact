import React from 'react'
import { Box, Button, Grid, Typography } from "@mui/material";
import useCounterDown from "../../../../hooks/useCounterDown";
import Link from "next/link";

const Header = () => {
  const {
    days,
    hours,
    minutes,
    seconds
  } = useCounterDown()
  return (
    <Grid
      container>
      <Grid
        item
        xs={12}>
        <Box
          py={5}
          px={8}
          sx={{
            backgroundImage: "url('/images/Prb_Header.png')",
            backgroundSize: 'cover',
            backgroundPositionY: 'center',
            boxShadow: 'inset 0px 0px 50px 60px #180e04d1',
            position: 'relative'
          }}>

          <Grid
            container>
            <Grid
              item
              xs={12}
              md={5}>
              <img
                src='/images/icongrab.png'
                alt='logo'
                height={70}
                style={{
                  position: 'relative',
                  top: -20
                }} />
            </Grid>
            <Grid
              item
              xs={12}
              md={7}>
              <Box
                display={'flex'}
                justifyContent="space-between">
                <Link
                  href="#">
                  <Typography
                    color="white"
                    fontSize={18}
                    fontWeight={600}>
                    LOREM IPSUM
                  </Typography>
                </Link>
                <Link
                  href="#">
                  <Typography
                    color="white"
                    fontSize={18}
                    fontWeight={600}>
                    LOREM IPSUM
                  </Typography>
                </Link>
                <Link
                  href="#">
                  <Typography
                    color="white"
                    fontSize={18}
                    fontWeight={600}>
                    LOREM IPSUM
                  </Typography>
                </Link>
                <Link
                  href="#">
                  <Typography
                    color="white"
                    fontSize={18}
                    fontWeight={600}>
                    LOREM IPSUM
                  </Typography>
                </Link>
                <Link
                  href="#">
                  <Typography
                    color="white"
                    fontSize={18}
                    fontWeight={600}>
                    LOREM IPSUM
                  </Typography>
                </Link>
                <Link
                  href="#">
                  <Typography
                    color="white"
                    fontSize={18}
                    fontWeight={600}>
                    LOREM IPSUM
                  </Typography>
                </Link>
              </Box>
              <Box
                pt={12}
                pb={10}>
                <Typography
                  fontSize={70}
                  color="white"
                  margin={0}
                  lineHeight={1.1}>
                  LOREM IPSUM
                </Typography>
                <Box
                  sx={{ background: 'white' }}
                  display={'inline-block'}
                  pr={2}>
                  <Typography
                    fontSize={70}
                    color="black"
                    margin={0}
                    lineHeight={1.1} >
                    LOREM IPSUM DOLOR
                  </Typography>
                </Box>
                <Typography
                  fontSize={70}
                  color="white"
                  margin={0}
                  lineHeight={1.1}>
                  LOREM IPSUM
                </Typography>
              </Box>
              <Box
                pb={8}>
                <Button
                  variant="contained"
                  color='primary'
                  sx={{
                    background: '#03b044',
                    color: 'white',
                    fontSize: 22
                  }}
                  size="large">
                  WHAT IS NEXT
                </Button>
              </Box>

            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            background: '#025923'
          }}
          py={5}
          px={6}>
          <Grid
            container>
            <Grid
              item
              xs={12}
              md={5}>
              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                px={4}>
                <Typography
                  fontSize={30}
                  color="white"
                  fontWeight={800}>
                  Lorem ipsum, dolor sit amet consectetur
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}>
              <Box
                display={'flex'}
                justifyContent={'space-between'} >
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  width={'100%'}
                  borderRight={'1px solid #03b044'} >
                  <Typography
                    color="white"
                    fontSize={70}
                    fontWeight={900}
                    margin={0}
                    lineHeight={1.1}>
                    {days}
                  </Typography>
                  <Typography
                    color="#03b044"
                    fontSize={20}>
                    Days
                  </Typography>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  width={'100%'}
                  borderRight={'1px solid #03b044'}>
                  <Typography
                    color="white"
                    fontSize={70}
                    fontWeight={900}
                    margin={0}
                    lineHeight={1.1}>
                    {hours}
                  </Typography>
                  <Typography
                    color="#03b044"
                    fontSize={20}>
                    Hours
                  </Typography>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  width={'100%'}
                  borderRight={'1px solid #03b044'}>
                  <Typography
                    color="white"
                    fontSize={70}
                    fontWeight={900}
                    margin={0}
                    lineHeight={1.1}>
                    {minutes}
                  </Typography>
                  <Typography
                    color="#03b044"
                    fontSize={20}>
                    Minutes
                  </Typography>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  width={'100%'}>
                  <Typography
                    color="white"
                    fontSize={70}
                    fontWeight={900}
                    margin={0}
                    lineHeight={1.1}>
                    {seconds}
                  </Typography>
                  <Typography
                    color="#03b044"
                    fontSize={20}>
                    Seconds
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>

    </Grid>
  );
}

export default Header;

