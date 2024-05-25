/**
 * 
 * Today Time component
 * @author - NA 
 * @date - 24th May, 2024
 * 
 */
// GENERIC IMPORT
import {useState, useEffect} from 'react';
import { Text } from '@chakra-ui/react';

const TodayTime = () => {
  const [time, setTime] = useState('');

  const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    setTime(`${hours.toString()}:${minutes} ${ampm}`);
  }

  useEffect(() => {
    updateTime();
    const timerId = setInterval(updateTime, 60000);
    return () => clearInterval(timerId);
  }, [])

  return (
    <Text>{time}</Text>
  )
}

export default TodayTime;