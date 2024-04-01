export enum NotificationType {
  Success,
  Error,
}

export type Notification = {
  type: NotificationType;
  shouldAutoDismiss?: boolean;
  heading?: string;
  text: string;
  timestamp: number;
};
