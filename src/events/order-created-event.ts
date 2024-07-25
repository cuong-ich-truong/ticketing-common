import { OrderEventData } from './base-order-event';
import { Subjects } from './subjects';
import { OrderStatus } from './types/order-status';

export interface OrderCreatedEventData extends OrderEventData {
  status: OrderStatus;
  userId: string;
  expiresAt: string;
  ticket: {
    id: string;
    price: number;
  };
}

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: OrderCreatedEventData;
}
