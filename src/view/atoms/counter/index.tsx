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

// COMPONENT PROPS TYPE
type CounterProps = {
  label: string;
  count: number;
}

const Counter = ({
  label,
  count
}: CounterProps) => (
  <Box className='counter-container'>
      <Box className='count' data-testid="counter-count-id">{count}</Box>
      <Box whiteSpace='nowrap' data-testid="counter-label-id">{label}</Box>
  </Box>
)

export default Counter;