/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/
import { getState, setState } from '../store'

const add = (elt) => {
    const oldList = getState();
    const newList = oldList.slice(0).concat(elt);
    setState(newList);
};

export default add;
