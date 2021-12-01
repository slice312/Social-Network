import {combineReducers, createStore} from "redux";
import profileReducer from "./profile.reducer";
import dialogsReducer from "./dialogs.reducer";
import usersReducer from "./users.reducer";



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});


const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



export default store;