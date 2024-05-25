/**
 * 
 * Counter component
 * @author - NA 
 * @date - 25th May, 2024
 * 
 */
// GENERIC IMPORT
import { Box } from '@chakra-ui/react';

// STYLE IMPORT
import './styles.css';

type CounterProps = {
  label: string;
  count: number;
}

const Counter = ({
  label,
  count
}: CounterProps) => (
  <Box className='counter-container'>
      <Box className='count'>{count}</Box>
      <Box whiteSpace='nowrap'>{label}</Box>
  </Box>
)

export default Counter;