import React, { useContext, useEffect, useState } from 'react';
import { usePrevious } from '../hooks';
import { useLocation } from '../router';
import { Notification, NotificationType } from '../types';

type NotificationContent = Pick<
  Notification,
  'shouldAutoDismiss' | 'heading' | 'text'
> & {};

type NotificationsContextValue = {
  notifications: Notification[];
  addSuccessNotification: (content: NotificationContent) => void;
  addErrorNotification: (content: NotificationContent) => void;
  dismissNotification: (notification: Notification) => void;
};

const NotificationsContext = React.createContext<NotificationsContextValue>(
  {} as NotificationsContextValue
);

export const NotificationsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Omit<Notification, 'timestamp'>) =>
    setNotifications((oldNotifications) => [
      ...oldNotifications,
      {
        ...notification,
        timestamp: new Date().getTime(),
      },
    ]);

  const addSuccessNotification = ({
    shouldAutoDismiss = false,
    heading = 'Success',
    text,
  }: NotificationContent) =>
    addNotification({
      type: NotificationType.Success,
      shouldAutoDismiss,
      heading,
      text,
    });

  const addErrorNotification = ({
    shouldAutoDismiss = false,
    heading = 'Error',
    text,
  }: NotificationContent) =>
    addNotification({
      type: NotificationType.Error,
      shouldAutoDismiss,
      heading,
      text,
    });

  const dismissNotification = (notification: Notification) =>
    setNotifications((oldNotifications) =>
      oldNotifications.filter((n) => n.timestamp !== notification.timestamp)
    );

  const location = useLocation();
  const previousLocation = usePrevious(location);

  useEffect(() => {
    // dismiss notifications on route change
    if (
      notifications.length &&
      previousLocation &&
      location.pathname !== previousLocation?.pathname
    ) {
      setNotifications([]);
    }
  }, [notifications, location, previousLocation]);

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        addSuccessNotification,
        addErrorNotification,
        dismissNotification,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotificationsContext = (): NotificationsContextValue => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error(
      'useNotificationsContext must be used within a <NotificationsProvider />'
    );
  }
  return context;
};
