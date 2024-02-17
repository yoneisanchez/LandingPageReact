import React from 'react'
import { Box, Button, Grid, Typography } from "@mui/material";

const SectionTwo = () => {
  return (
    <Grid
      container>
      <Grid
        item
        xs={12}>
        <Box
          py={10}
          px={12}
          sx={{ background: '#f5f6fa' }}>
          <Grid
            container>
            <Grid
              item
              xs={12}>
              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}>
                <Typography
                  fontWeight={900}
                  fontSize={80}
                  lineHeight={1.1}
                  paddingBottom={4}>
                  Lorem ipsum
                </Typography>
                <Typography
                  fontSize={18}
                  paddingBottom={6}
                  maxWidth={700}
                  textAlign={'center'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore porro, repellat vero blanditiis, quas amet iure velit voluptates sapiente obcaecati eius in laborum animi quibusdam optio a dolorem culpa recusandae!
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12} >
              <Grid
                container
                spacing={2}>
                <Grid
                  item
                  xs={4}>
                  <Box>
                    <Box
                      width={'100%'}
                      height={400}
                      sx={{
                        backgroundSize: 'cover',
                        backgroundImage: 'url(/images/Pic2.png)'
                      }} />
                    <Box sx={{
                      background: '#03b044'
                    }}
                      width={'100%'}
                      height={60}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}>
                      <Typography
                        color={'white'}
                        fontSize={24}
                        fontWeight={600}>
                        LOREM IPSUM
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={4}>
                  <Box>
                    <Box
                      width={'100%'}
                      height={400}
                      sx={{
                        backgroundSize: 'cover',
                        backgroundImage: 'url(/images/Pic3.png)'
                      }} />
                    <Box
                      sx={{
                        background: '#03b044'
                      }} 
                      width={'100%'}
                      height={60}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}>
                      <Typography
                        color={'white'}
                        fontSize={24}
                        fontWeight={600}>
                        LOREM IPSUM
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <Box
                      width={'100%'}
                      height={400}
                      sx={{
                        backgroundSize: 'cover',
                        backgroundImage: 'url(/images/Pic4.png)'
                      }} />
                    <Box
                      sx={{
                        background: '#03b044'
                      }}
                      width={'100%'}
                      height={60}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}>
                      <Typography
                        color={'white'}
                        fontSize={24}
                        fontWeight={600}>
                        LOREM IPSUM
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}>
                  <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignContent={"center"}
                    p={4}>
                    <Button
                      variant="outlined"
                      color="inherit"
                      size="large"
                      sx={{
                        fontSize: 22,
                        px: 6
                      }}>
                      LEARN MORE
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SectionTwo;

