import { PaymentForm } from "@models/Checkout";
import Customer from "@models/Customer";
import { ProductItemWeb } from "@models/ProductItemWeb";

export default class CreateOrderDTO {
    id ?: number;
    paymentForm : PaymentForm;
    customer : Customer;
    productItemsId : number[];
    totalPrice : number;
  }