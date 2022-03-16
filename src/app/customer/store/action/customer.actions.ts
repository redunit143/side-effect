import { createAction, props } from '@ngrx/store';
import {Customer} from '../../../models/customer';

// Creatd by the generator and not used
export const loadCustomers = createAction(
  '[Customer] Load Customers',
  (customer: Customer) => ({customer})
);


export const addCustomer = createAction(
  '[Customer] Add Customer',
  (customer: Customer) => ({customer})
);
