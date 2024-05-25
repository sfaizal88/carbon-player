/**
 * 
 * Time reducer
 * @author - NA 
 * @date - 25th May, 2024
 * 
 */
// GENERIC IMPORT
import {createSlice} from '@reduxjs/toolkit';

// UTILS
import type {InitialTimeStateType} from '../../utils/types';
import {DEFAULT_WORK_TIME, DEFAULT_BREAK_TIME} from '../../utils/constants';
import {TimerStatusEnum, TimerTypeEnum} from '../../utils/enum';

const initialState: InitialTimeStateType = {
    time: DEFAULT_WORK_TIME,
    timerCount: {workTime: 0, breakTime: 0},
    timerStatus: TimerStatusEnum.INITIAL,
    timerType: TimerTypeEnum.WORK_TIME,
    intervalId: null
}

const timeReducer = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        startTime(state, action) {
            const {timerId} = action.payload;
            state.timerStatus = TimerStatusEnum.STARTED;
            state.intervalId = timerId;
        },
        updateTime(state) {
            state.time = state.time < 0 ? 0 : state.time - 1;
        },
        pauseTime(state) {
            clearInterval(state.intervalId);
            state.intervalId = null;
            state.timerStatus = TimerStatusEnum.PAUSED;
        },
        stopTime(state) {
            state.time = DEFAULT_WORK_TIME;
            state.timerCount = {workTime: 0, breakTime: 0};
            state.timerStatus = TimerStatusEnum.INITIAL;
            state.timerType = TimerTypeEnum.WORK_TIME;
            clearInterval(state.intervalId);
            state.intervalId = null;
        },
        switchTimerType(state) {
            clearInterval(state.intervalId);
            state.intervalId = null;
            if (state.timerType === TimerTypeEnum.WORK_TIME) {
                state.time = DEFAULT_BREAK_TIME;
                state.timerType = TimerTypeEnum.BREAK_TIME;
                state.timerCount = {...state.timerCount, workTime: state.timerCount.workTime + 1};
            } else {
                state.time = DEFAULT_WORK_TIME;
                state.timerType = TimerTypeEnum.WORK_TIME;
                state.timerCount = {...state.timerCount, breakTime: state.timerCount.breakTime + 1};
            }
            console.log(state)
        }
    }
});

export const {startTime, pauseTime, stopTime, switchTimerType, updateTime} = timeReducer.actions;
export default timeReducer.reducer;