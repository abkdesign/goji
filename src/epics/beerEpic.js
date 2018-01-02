import { Observable, takeUntil } from 'rxjs';
import { receiveBeers, searchBeersError, searchBeersLoading, SEARCHED_BEERS,CANCEL_SEARCH} from "../actions/index";

const beers = `https://swapi.co/api/planets/`;
const search = (term) => `${beers}?search=${encodeURIComponent(term)}`;
function searchBeersEpic(action$,deps) {
  const ajax = (term) =>
    process.env.NODE_ENV === 'test'
      ? deps.ajax.getJSON(search(term))
      : Observable.ajax.getJSON(search(term));
  return action$.ofType(SEARCHED_BEERS)
    .debounceTime(500, deps.scheduler)
    .filter(action => action.payload !=='')
    .switchMap(({ payload }) => {
      // loading state in UI
      const loading = Observable.of(searchBeersLoading(true))
      // BLOCKERS - observable streams
      const blockers = Observable.merge(
        action$.ofType(CANCEL_SEARCH)
      )
      // external API call
      const request = ajax(payload)
        .takeUntil(blockers)
        .map(receiveBeers)
        .catch(err => {
          return Observable.of(searchBeersError(err));
        })
      return  Observable.concat(
        loading, request
      )
    })
}

export default searchBeersEpic;