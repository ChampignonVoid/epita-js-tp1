/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

import { getState, setState } from '../store'

const remove = (url) => {
    const oldList = getState();
    const newList = oldList.filter(value => value !== url);
    setState(newList);
};

export default remove;
