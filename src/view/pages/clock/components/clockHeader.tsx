/**
 * 
 * Clock Header component
 * @author - NA 
 * @date - 24th May, 2024
 * 
 */
// GENERIC IMPORT
import { Flex, Box, Tooltip, IconButton } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { MdPowerSettingsNew } from 'react-icons/md';
import { useDispatch } from 'react-redux';

// COMPONENTS
import {TodayTime, Logo} from '../../../atoms';

// REDUX
import {stopTime} from '../../../../redux/reducer/timerReducer';

// STYLE IMPORT
import '../styles.css';

const ClockHeader = () => {
    // DISPATCH
    const dispatch = useDispatch();

    return (
        <Flex className='clock-header'>
            <Box className='clock-header-cell'>
                <Logo/>
            </Box>
            <Box className='clock-header-cell' justifyContent='center'>
                <TodayTime/>
            </Box>
            <Box className='clock-header-cell clock-header-controls'>
                <Tooltip hasArrow label="Reset the time">
                    <IconButton 
                        aria-label='Reset the timer' 
                        isRound={true}
                        size='sm'
                        variant='solid'
                        icon={<Icon cursor='pointer' as={MdPowerSettingsNew} onClick={() => dispatch(stopTime())} />} />
                </Tooltip>
            </Box>
        </Flex>
    )
}

export default ClockHeader;