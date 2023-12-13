import EventHandlerInterface from "../../../../@shared/event/event-handler.interface";
import CustomerUpdatedEvent from "../customer-updated.event";

export default class SendConsoleWhenCustomerAddressIsChanged implements 
EventHandlerInterface<CustomerUpdatedEvent> {
  handle(event: CustomerUpdatedEvent): void {
    console.log(`Address changed to customer: ${event.eventData.customer_id}, ${event.eventData.name}, changed to ${event.eventData.address}`);
  }
}