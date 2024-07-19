import { TicketEventData } from './base-ticket-event';
import { Subjects } from './subjects';

export interface TicketCreatedEventData extends TicketEventData {}

export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: TicketCreatedEventData;
}
