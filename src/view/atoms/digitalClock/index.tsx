/**
 * 
 * Digital Clock component
 * @author - NA 
 * @date - 25th May, 2024
 * 
 */
// GENERIC IMPORT
import { Box } from '@chakra-ui/react';

// UTILS
import {convertSecIntoMinSec} from '../../../utils';

// STYLE IMPORT
import './styles.css';

// COMPONENT PROPS TYPE
type DigitalClockProps = {
  timeInSecond: number;
}

const DigitalClock = ({
  timeInSecond,
}: DigitalClockProps) => (
  <Box className='display'>{convertSecIntoMinSec(timeInSecond)}</Box>
)

export default DigitalClock;