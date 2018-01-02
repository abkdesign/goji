import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/beerReducer';
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { rootEpic } from "./epics/";
export function configureStore(deps={}){
  
  const epicMiddleware = createEpicMiddleware(
    rootEpic,
    {
      dependencies:{
        ajax,
        ...deps
      }
    }
  );
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  );
}