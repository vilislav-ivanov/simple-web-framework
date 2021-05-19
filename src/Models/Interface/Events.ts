export type EventCallback = () => void;

export interface Events {
  listen(eventName: string, callback: EventCallback): number;
  trigger(eventName: string): void;
  clearEvent(eventName: string, index: number): void;
  // removeEvent(eventName: string): void;
}
