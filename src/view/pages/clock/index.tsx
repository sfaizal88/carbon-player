/**
 * 
 * Clock page component
 * @author - NA 
 * @date - 24th May, 2024
 * 
 */
// GENERIC IMPORT
import {useEffect} from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS
import ClockHeader from './components/clockHeader';
import ClockDisplay from './components/clockDisplay';
import Controls from './components/controls';

// REDUX
import {startTime, switchTimerType, updateTime} from '../../../redux/reducer/timerReducer';

// UTILS
import type {InitialTimeStateType} from '../../../utils/types';

// STYLE IMPORT
import './styles.css';

const ClockPage = () => {
    // LOCAL VARIABLE
    const timeState:InitialTimeStateType = useSelector((state: any) => state.timer);
    const dispatch = useDispatch();

    // ON USE TRIGGER START EVENT
    const onStartTime = () => {
        // TRIGGERING THE SEC INTERVAL TO CHANGE THE TIME
        const timerId = setInterval(() => {
            dispatch(updateTime());
        }, 1000);
        // TRIGGERING TO SAVE THE INTERVIAL ID
        dispatch(startTime({timerId}));
    }

    // FUNCTION CALLED TO SWITCH BETWEEN BREAK AND WORK TIME 
    // ONCE TIME DONE
    const onSwitchTimerType = () => {
        // TRIGGER SWITCH TYPE
        dispatch(switchTimerType());
        // START THE TIME
        onStartTime();
    }

    useEffect(() => {
        if (timeState.time < 0) onSwitchTimerType();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeState.time])
    
    return (
        <Box className='clock-container'>
            <Box className='clock-secure-layer'>
                <Box className='clock-screen-layer'>
                    <ClockHeader/>
                    <ClockDisplay/>
                    <Controls timerStatus={timeState.timerStatus} {...{onStartTime}}/>
                </Box>
            </Box>
        </Box>
    )
}

export default ClockPage;