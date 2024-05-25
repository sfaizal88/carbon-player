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

// COMPONENTS
import {StackBox} from '../../../atoms';

// UTILS
import {TimerStatusEnum} from '../../../../utils/enum';
import type {StackItemType} from '../../../../utils/types';

// REDUX
import {pauseTime} from '../../../../redux/reducer/timerReducer';

// DATA
import TaskListData from '../data/task-list.json';
import ReportListData from '../data/report-list.json';

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
                <Box className='control-left' pr={7}>
                    <Box className='control-title' mr={7}>Task</Box>
                    <StackBox noBottomBorder data={TaskListData as StackItemType[]}/>
                </Box>
                <Box className='control-btn-container'>
                    {timerStatus === TimerStatusEnum.STARTED && <Box className='control-btn' onClick={() => {dispatch(pauseTime())}}>Pause</Box>}
                    {timerStatus !== TimerStatusEnum.STARTED && <Box className='control-btn' onClick={onStartTime}>Start</Box>}
                </Box>
                <Box className='control-right' pl={7}>
                    <Box className='control-title control-title-right' mr={7}>Report</Box>
                    <StackBox data={ReportListData as StackItemType[]}/>
                </Box>
            </Flex>
        </Box>
    )
}

export default Controls;

/**
 * <Box className='control-stack-right' >
                        <Box className='control-stack-item'>Yuct</Box>
                        <Box className='control-stack-item info'>We need to upload some information</Box>
                        <Box className='control-stack-item' overflow='hidden' whiteSpace='nowrap' px={0} py={1} justifyContent='center'>----------------</Box>
                    </Box>
 */