import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return ( 
        <Box 
        sx={{background: '#f5f6fa'}}
        px={12}
        py={4}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}>
            <Typography 
            fontSize={14}
            fontWeight={600}
            width={330}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae repudiandae, praesentium, nobis accusantium quia hic illo esse atque
            </Typography>
            <img 
            src="/images/icongrab.png" 
            alt="logo"
             height={70} 
             />
            <Typography
            fontWeight={600} 
            width={330}
            textAlign={'right'}>
            All rights reserved to <br/> Lorem Ipsum@ 2022
            </Typography>
        </Box>
        
     );
}
 
export default Footer;
