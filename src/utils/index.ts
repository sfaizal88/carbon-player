/**
 * 
 * Generic utils function
 * @author - NA 
 * @date - 25th May, 2024
 * 
 */
export const convertSecIntoMinSec = (seconds: number) => {
    const reminder = seconds % 60;
    const min = reminder <  60 ? 0 : (seconds - reminder) / 60;
    const sec  = reminder < 10 ? `0${reminder}` : reminder;
    return `${min < 10 ? '0'+min : min}:${sec}`;
}