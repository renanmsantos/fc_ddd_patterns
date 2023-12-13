import EventHandlerInterface from "../../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SendConsoleWhenCustomerIsCreatedHandlerFirst implements 
EventHandlerInterface<CustomerCreatedEvent> {
  handle(event: CustomerCreatedEvent): void {
    console.log("This is the first handler for CustomerCreatedEvent");
  }
}