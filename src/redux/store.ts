/**
 * 
 * Store
 * @author - NA 
 * @date - 25th May, 2024
 * 
 */
// GENERIC IMPORT
import {configureStore} from '@reduxjs/toolkit';
import TimeReducer from './reducer/timerReducer';

// CONFIGURING THE STORE
export const store = configureStore({
    reducer: {
        timer: TimeReducer
    }
});