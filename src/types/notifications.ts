export enum NotificationType {
  Success,
  Error,
}

export interface INotification {
  text: string;
  heading?: string;
  timestamp: number;
  type: NotificationType;
}
