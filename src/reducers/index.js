import { combineReducers } from 'redux';
import LibraryListReducer from './LibraryListReducer';
import SelectedLibraryIdReducer from './SelectedLibraryIdReducer';

export default combineReducers({
    AppState_LibraryList: LibraryListReducer,
    AppState_SelectedLibraryId: SelectedLibraryIdReducer
});