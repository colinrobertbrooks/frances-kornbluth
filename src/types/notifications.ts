export enum NotificationType {
  Success,
  Error,
}

export interface INotification {
  type: NotificationType;
  shouldAutoDismiss?: boolean;
  heading?: string;
  text: string;
  timestamp: number;
}
