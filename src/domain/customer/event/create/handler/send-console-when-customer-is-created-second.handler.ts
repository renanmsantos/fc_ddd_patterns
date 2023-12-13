import EventHandlerInterface from "../../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SendConsoleWhenCustomerIsCreatedHandlerSecond implements 
EventHandlerInterface<CustomerCreatedEvent> {
  handle(event: CustomerCreatedEvent): void {
    console.log("This is the second handler for CustomerCreatedEvent");
  }
}