export type EventCallback = () => void;

export interface Events {
  listen(eventName: string, callback: EventCallback): void;
  trigger(eventName: string);
}
