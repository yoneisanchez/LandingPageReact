import { Box, Button, Grid, Typography } from "@mui/material";

const SectionFour = () => {
    const items = [
        {
            url: "https://img.freepik.com/vector-gratis/diseno-reproductor-medios-video_114579-839.jpg?w=1380&t=st=1708048812~exp=1708049412~hmac=54a2f4109a414161d7b6eaffda42e00cd631e36d84b602feb58e3bf52055e0cf",
            text: "Lorem ipsum dolor sit amet"
        },
        {
            url: "https://img.freepik.com/vector-gratis/diseno-reproductor-medios-video_114579-839.jpg?w=1380&t=st=1708048812~exp=1708049412~hmac=54a2f4109a414161d7b6eaffda42e00cd631e36d84b602feb58e3bf52055e0cf",
            text: "Lorem ipsum dolor sit amet"
        },
        {
            url: "https://img.freepik.com/vector-gratis/diseno-reproductor-medios-video_114579-839.jpg?w=1380&t=st=1708048812~exp=1708049412~hmac=54a2f4109a414161d7b6eaffda42e00cd631e36d84b602feb58e3bf52055e0cf",
            text: "Lorem ipsum dolor sit amet"
        },
        {
            url: "https://img.freepik.com/vector-gratis/diseno-reproductor-medios-video_114579-839.jpg?w=1380&t=st=1708048812~exp=1708049412~hmac=54a2f4109a414161d7b6eaffda42e00cd631e36d84b602feb58e3bf52055e0cf",
            text: "Lorem ipsum dolor sit amet"
        },
        {
            url: "https://img.freepik.com/vector-gratis/diseno-reproductor-medios-video_114579-839.jpg?w=1380&t=st=1708048812~exp=1708049412~hmac=54a2f4109a414161d7b6eaffda42e00cd631e36d84b602feb58e3bf52055e0cf",
            text: "Lorem ipsum dolor sit amet"
        },
        {
            url: "https://img.freepik.com/vector-gratis/diseno-reproductor-medios-video_114579-839.jpg?w=1380&t=st=1708048812~exp=1708049412~hmac=54a2f4109a414161d7b6eaffda42e00cd631e36d84b602feb58e3bf52055e0cf",
            text: "Lorem ipsum dolor sit amet"
        },
    ]
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
                        background: '#f5f6fa'
                    }}>
                    <Typography
                        fontWeight={900}
                        fontSize={80}
                        lineHeight={1.1}
                        paddingBottom={4}
                        textAlign={'center'}>
                        Lates Videos
                    </Typography>
                    <Grid
                        container
                        spacing={6}>
                        {
                            items.map((item, index) => {
                                return (
                                    <Grid
                                        item
                                        xs={4}
                                        key={`item-${index}`}>
                                        <img
                                            width={'100%'}
                                            src={item.url}
                                            alt="image" />
                                        <Typography
                                            paddingTop={2}>
                                            {item.text}
                                        </Typography>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <Box
                        pt={8}
                        display={'flex'}
                        justifyContent={'center'}>
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
        </Grid>
    );
}

export default SectionFour;
