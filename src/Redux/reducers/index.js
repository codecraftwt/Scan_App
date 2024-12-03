import {combineReducers} from 'redux';
import scandata from '../slices/ScanSlice';

export const rootReducer = combineReducers({
  scandata: scandata,
});
