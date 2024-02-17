import { Box, Grid } from "@mui/material";
import CarouselSection from "@/components/pages/landing/components/carousel";

const SectionSix = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box
                    py={10}
                    px={8}
                    sx={{
                        background: '#016648'
                    }}>
                    <CarouselSection />
                </Box>
            </Grid>
        </Grid>
    );
}

export default SectionSix;
