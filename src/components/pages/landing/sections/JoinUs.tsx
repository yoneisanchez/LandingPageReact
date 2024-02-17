import useGetFormData from "@/hooks/useGetFormData";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";


const JoinUs = () => {
    const { handleChange, data } = useGetFormData({});

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(data)
    }
    return (
        <Grid
            container>
            <Grid
                item
                xs={12}>
                <Box
                    py={10}
                    px={12}
                    sx={{
                        backgroundImage: 'url(/images/JoinUs.png)',
                        backgroundSize: 'cover'
                    }}>
                    <Grid
                        container
                        justifyContent={'flex-end'}>
                        <Grid
                            item
                            xs={12}
                            sm={6}>
                            <Typography
                                fontWeight={900}
                                fontSize={70}
                                lineHeight={1.1}
                                paddingBottom={4}
                                color={'white'}>
                                JOIN US.
                            </Typography>
                            <Typography
                                fontSize={20}
                                lineHeight={1.1}
                                paddingBottom={4}
                                color={'white'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            </Typography>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root .MuiInputBase-root': {
                                        background: 'white'
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Grid
                                    container
                                    spacing={3}>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            placeholder="Name"
                                            fullWidth
                                            name="name"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            placeholder="Surname"
                                            fullWidth
                                            name="surname"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            placeholder="Phone"
                                            fullWidth
                                            name="phone"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            placeholder="Email"
                                            fullWidth
                                            name="email"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            placeholder="Deparment"
                                            fullWidth
                                            name="deparment"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            multiline
                                            rows={4}
                                            placeholder="Mensaje"
                                            fullWidth
                                            name="message"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Typography
                                fontSize={20}
                                lineHeight={1.1}
                                paddingBottom={4}
                                paddingTop={4}
                                textAlign={'center'}
                                color={'white'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            </Typography>
                            <Button
                                variant="contained"
                                color='primary'
                                sx={{
                                    background: '#03b044',
                                    color: 'white',
                                    fontSize: 22,
                                    px: 8
                                }}
                                size="large"
                                onClick={handleSubmit}>
                                A'M IN
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

            </Grid>

        </Grid>
    );
}

export default JoinUs;

