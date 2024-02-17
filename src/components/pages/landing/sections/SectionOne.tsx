import React from 'react'
import { Box, Grid, Typography } from "@mui/material";

const SectionOne = () => {
  return (
    <Grid
      container>
      <Grid
        item
        xs={12}>
        <Box
          py={18}
          px={12}
          sx={{ background: 'white' }}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={6} >
              <Typography
                fontWeight={900}
                fontSize={80}
                lineHeight={1.1}
                paddingBottom={6} >
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography
                fontSize={20}
                paddingRight={2}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat eligendi adipisci neque inventore quod. Numquam itaque quod modi est molestiae praesentium cumque saepe unde repellat, odit quisquam dolores cum temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vel accusamus minima dolore? Quas optio esse consequatur temporibus doloribus voluptate vitae dolorem voluptas, possimus, est nobis qui ea amet laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt necessitatibus officiis qui ducimus velit, aspernatur temporibus ea explicabo! Cum tenetur ad temporibus accusamus officia ex inventore quidem quae doloremque qui?
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}>
              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}>
                <img
                  alt="image"
                  width={'100%'}
                  src="/images/Pic1.png"
                  style={{ maxWidth: 640 }}
                />
              </Box>

            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SectionOne;

