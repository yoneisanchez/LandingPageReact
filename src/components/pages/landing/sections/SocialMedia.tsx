import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Icon } from '@mui/material';


const SocialMedia = () => {

    const icons = [
        FacebookOutlinedIcon,
        TwitterIcon,
        InstagramIcon,
        YouTubeIcon
    ]

    return (
        <Box
            position={'fixed'}
            sx={{
                zIndex: 10,
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
            }}>
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyItems={'center'}
                alignItems={'center'}>
                {
                    icons.map((Media, index) => {
                        return (
                            <Box
                                key={`media-${index}`}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                width={80}
                                height={80}
                                sx={{
                                    background: '#9a9a9a',
                                    border: '1px solid #888888'
                                }}>
                                <Icon
                                    sx={{
                                        color: 'white',
                                        width: 50,
                                        height: 50
                                    }}>
                                    <Media sx={{
                                        width: 50,
                                        height: 50
                                    }} />
                                </Icon>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>

    );
}

export default SocialMedia;