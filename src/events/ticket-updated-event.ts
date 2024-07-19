import { TicketEventData } from './base-ticket-event';
import { Subjects } from './subjects';

export interface TicketUpdatedEventData extends TicketEventData {}

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: TicketUpdatedEventData;
}
