/**
 * 
 * Types
 * @author - NA 
 * @date - 25th May, 2024
 * 
 */
// UTILS IMPORT
import {TimerStatusEnum, TimerTypeEnum, StackTypeEnum} from './enum';

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

export type StackItemType = {
    id: number,
    name: string,
    type: StackTypeEnum
}