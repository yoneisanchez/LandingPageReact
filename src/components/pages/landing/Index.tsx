import { Grid } from '@mui/material';
import React from 'react'
import Banner from './sections/Banner';
import Header from './sections/Header';
import SectionOne from './sections/SectionOne';
import SectionTwo from './sections/SectionTwo';
import SectionThree from './sections/SectionThree';
import SectionFour from './sections/SectionFour';
import JoinUs from './sections/JoinUs';
import SectionFive from './sections/SectionFive';
import SectionSix from './sections/SectionSix';
import Footer from '@/components/pages/landing/sections/footer';

const LandingPage = () => {
    return (
        <Grid container>
            {/* Banner */}
            <Grid item xs={12}>
                <Banner text="Lorem ipsum dolor sit amet" />
            </Grid>
            {/* Header */}
            <Grid item xs={12}>
                <Header />
            </Grid>
            {/* Section One */}
            <Grid item xs={12}>
                <SectionOne />
            </Grid>
            {/* Section Two */}
            <Grid item xs={12}>
                <SectionTwo />
            </Grid>
            {/* Section Three */}
            <Grid item xs={12}>
                <SectionThree />
            </Grid>
            {/* Section Four */}
            <Grid item xs={12}>
                <SectionFour />
            </Grid>
            {/* Section Join Us */}
            <Grid item xs={12}>
                <JoinUs />
            </Grid>
            {/* Section Five */}
            <Grid item xs={12}>
                <SectionFive />
            </Grid>
            {/* Section Six */}
            <Grid item xs={12}>
                <SectionSix />
            </Grid>
            {/* Section Footer */}
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    );
}

export default LandingPage;