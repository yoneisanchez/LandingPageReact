import React, { Fragment, useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

type Props = {
    itemsByPage: number
    items: string[]
};

const Swipeable = ({ itemsByPage, items }: Props) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(1);
    const [maxSteps, setMaxSteps] = useState(0)

    useEffect(() => {
        setMaxSteps(Math.ceil(items?.length / itemsByPage))
    }, [])

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    const nextPage = () =>
        (activeStep + 1) * itemsByPage > items.length
            ? items.length - 1
            : (activeStep + 1) * itemsByPage

    if (maxSteps === 0) return (<Fragment />)

    return (
        <Box >
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
            >
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    gap={4}>
                    {items.slice((activeStep * itemsByPage), nextPage()).map((step, index) => (
                        <div key={`step-${index}`}>
                            <Box
                                component="img"
                                sx={{
                                    height: 490,
                                    display: 'block',
                                    maxWidth: 400,
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step}
                                alt={step}
                            />
                        </div>
                    ))}
                </Box>

            </AutoPlaySwipeableViews>
            <Box
                display={'flex'}
                justifyContent={'center'}
                pt={4}>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                        background: 'transparent',
                        '& .MuiMobileStepper-dot': {
                            width: 20,
                            height: 20,
                        },
                        '& .MuiMobileStepper-dot:not(.MuiMobileStepper-dotActive)': {
                            background: 'transparent',
                            border: '3px solid #ffffff'
                        },
                        '& .MuiMobileStepper-dot.MuiMobileStepper-dotActive': {
                            background: '#ffffff',
                        }
                    }}
                    nextButton={
                        <Button
                            size="small"
                            sx={{ display: 'none' }}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" sx={{ display: 'none' }}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Box>

        </Box>
    );
};

export default Swipeable;

