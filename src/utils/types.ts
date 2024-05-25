/**
 * 
 * Types
 * @author - NA 
 * @date - 25th May, 2024
 * 
 */
import {TimerStatusEnum, TimerTypeEnum} from './enum';

export type TimerCountType = {
    workTime: number;
    breakTime: number;
}

export type InitialTimeStateType = {
    time: number,
    timerCount: TimerCountType,
    timerStatus: TimerStatusEnum,
    timerType: TimerTypeEnum,
    intervalId: any
}