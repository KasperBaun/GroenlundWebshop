import { Customer } from "./Customer";
import { Order } from "./Order";
import { Payment } from "./Payment";
import { ProductItem } from "./ProductItem";

export class ConfirmationModel {
    id?: number;
    order: Order;
    customer: Customer;
    productItems: ProductItem[];
    payment: Payment;
}