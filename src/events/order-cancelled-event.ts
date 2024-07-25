import { OrderEventData } from './base-order-event';
import { Subjects } from './subjects';

export interface OrderCancelledEventData extends OrderEventData {}

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: OrderCancelledEventData;
}
