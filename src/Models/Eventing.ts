import { Events, EventCallback } from './Interface';

export class Eventing implements Events {
  private events: { [key: string]: EventCallback[] } = {};

  listen(eventName: string, callback: EventCallback): void {
    const events = this.events[eventName] || [];
    events.push(callback);
    this.events[eventName] = events;
  }

  trigger(eventName: string): void {
    const events = this.events[eventName];
    if (!events || events.length === 0) {
      return;
    }
    events.forEach((event: EventCallback) => {
      event();
    });
  }
}
