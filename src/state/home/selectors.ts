import { createSelector } from "@ngrx/store";
import { CustomerState } from "./reducer";
import { AppState } from "../app.state";


export  const  selectCustomers = (state: AppState) => state.customers;

export const selectAllCustomers = createSelector(
  selectCustomers,
  (state: CustomerState) => state.customers
)
