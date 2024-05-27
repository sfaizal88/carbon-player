/**
 * 
 * Generic utils function
 * @author - NA 
 * @date - 25th May, 2024
 * 
 */

// FUNCTION USED TO CONVERT SECONDS TO MINUTE AND SECOND
export const convertSecIntoMinSec = (seconds: number) => {
    // FINDING REMINDER SECOND AFTER TAKING OUT MINUTES
    const reminder = seconds % 60;
    // FINDING TOTAL MINUTES
    const min = reminder <  60 ? 0 : (seconds - reminder) / 60;
    // FINDING REMAINING SEC AFTER MIN TAKEN
    const sec  = reminder < 10 ? `0${reminder}` : reminder;
    return `${min < 10 ? '0'+min : min}:${sec}`;
}