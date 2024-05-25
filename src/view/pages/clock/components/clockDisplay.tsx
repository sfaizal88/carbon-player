/**
 * 
 * Clock Display component
 * @author - NA 
 * @date - 24th May, 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import { Box, Flex } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

// UTILS
import type {InitialTimeStateType} from '../../../../utils/types';
import {TimerStatusEnum, TimerTypeEnum} from '../../../../utils/enum';

// COMPONENTS
import {Counter, DigitalClock} from '../../../atoms';

// REDUX
import {stopTime} from '../../../../redux/reducer/timerReducer';

// STYLE IMPORT
import '../styles.css';

const ClockDisplay = () => {
    // DISPATCH
    const dispatch = useDispatch();
    const timeState: InitialTimeStateType = useSelector((state: any) => state.timer);

    return (
        <Box className='clock-display-container'>
            <Box className='digital-clock-box'>
                <Box className='header'>
                    <Box flex={1} textAlign='right' className={clsx(TimerTypeEnum.WORK_TIME === timeState.timerType && 'selected')}>WORK</Box>
                    <Box className='vline' mx={2}/> 
                    <Box flex={1} textAlign='left'  className={clsx(TimerTypeEnum.BREAK_TIME === timeState.timerType && 'selected')}>BREAK</Box>
                </Box>
                <DigitalClock timeInSecond={timeState.time}/>
                <Box className={clsx(timeState.timerStatus !== TimerStatusEnum.INITIAL && 'danger-btn', 'footer')}>
                    {timeState.timerStatus === TimerStatusEnum.INITIAL ? <TimeIcon/> : <Box onClick={() => dispatch(stopTime())}>Reset</Box>}
                </Box>
            </Box>
            <Flex>
                <Counter label='No. Work' count={timeState.timerCount.workTime}/>
                <Box className='vhcenter-cell' flex={2} pt={2}>
                    <Box  className={clsx(timeState.timerStatus === TimerStatusEnum.STARTED && 'selected')}>Started</Box>
                    <Box className='vline' mx={5}/> 
                    <Box  className={clsx(timeState.timerStatus === TimerStatusEnum.PAUSED && 'selected')}>Paused</Box>
                </Box>
                <Counter label='No. Break' count={timeState.timerCount.breakTime}/>
            </Flex>
        </Box>
    )
}

export default ClockDisplay;