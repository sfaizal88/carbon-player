/**
 * 
 * Clock Controls component
 * @author - NA 
 * @date - 24th May, 2024
 * 
 */
// GENERIC IMPORT
import { Box, Flex } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

// UTILS
import {TimerStatusEnum} from '../../../../utils/enum';

// REDUX
import {pauseTime} from '../../../../redux/reducer/timerReducer';

// STYLE IMPORT
import '../styles.css';

type ControlsProps  = {
    timerStatus: TimerStatusEnum;
    onStartTime: () => void;
}

const Controls = ({
    timerStatus,
    onStartTime,
}: ControlsProps) => {
    // DISPATCH
    const dispatch = useDispatch();

    return (
        <Box className='clock-controls-container'>
            <Flex>
                <Box className='control-left'>
                    <Box className='control-title' mr={7}>Task</Box>
                    <Box className='control-stack-left' mr={7}>
                        <Box className='control-stack-item'>Yuct</Box>
                        <Box className='control-stack-item'>Wehte</Box>
                        <Box className='control-stack-item' overflow='hidden' whiteSpace='nowrap' px={0} py={1} justifyContent='center'>---------------</Box>
                    </Box>
                </Box>
                <Box className='control-btn-container'>
                    {timerStatus === TimerStatusEnum.STARTED && <Box className='control-btn' onClick={() => {dispatch(pauseTime())}}>Pause</Box>}
                    {timerStatus !== TimerStatusEnum.STARTED && <Box className='control-btn' onClick={onStartTime}>Start</Box>}
                </Box>
                <Box className='control-right'>
                    <Box className='control-title control-title-right' ml={7}>Report</Box>
                    <Box className='control-stack-right' ml={7}>
                        <Box className='control-stack-item'>Yuct</Box>
                        <Box className='control-stack-item info'>We need to upload some information</Box>
                        <Box className='control-stack-item' overflow='hidden' whiteSpace='nowrap' px={0} py={1} justifyContent='center'>----------------</Box>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default Controls;