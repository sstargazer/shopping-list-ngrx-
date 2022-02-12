import {
  ShoppingAction,
  ShoppingActionTypes,
} from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';

const initialState: Array<ShoppingItem> = [
  {
    id: '1775935f-36fd-467e-09f95b917f6d',
    name: 'Diet Coke',
  },
];

export function ShoppingReducer(
  state: Array<ShoppingItem> = initialState,
  action: ShoppingAction | any
) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ShoppingActionTypes.REMOVE_ITEM:
      let newList = state.filter((it) => it.id !== action.payload);
      return newList;
    default:
      return state;
  }
}
