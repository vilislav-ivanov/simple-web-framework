import { Events, EventCallback } from './Interface';

export class Eventing implements Events {
  private events: { [key: string]: EventCallback[] } = {};

  listen = (eventName: string, callback: EventCallback): number => {
    const events = this.events[eventName] || [];
    const index = events.length;
    events.push(callback);
    this.events[eventName] = events;
    return index;
  };

  clearEvent = (eventName: string, index: number) => {
    this.events[eventName].splice(index, 1);
  };

  trigger = (eventName: string): void => {
    const events = this.events[eventName];
    if (!events || events.length === 0) {
      return;
    }
    events.forEach((event: EventCallback) => {
      event();
    });
  };
}
