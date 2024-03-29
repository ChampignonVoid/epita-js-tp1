/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/

import { getState, setState } from '../store'


const update = (old_value, new_value) => {
    const oldList = getState();
    const index = oldList.findIndex(x => x === old_value);
    if (index) {
        const newList = [...oldList];
        newList[index] = new_value;
        setState(newList);
    }
};

export default update;
