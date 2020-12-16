import React, { useContext, useState } from 'react';
import { NotificationType, INotification } from '../types';

interface INotificationsContext {
  notifications: INotification[];
  addSuccessNotification: (text: string, heading?: string) => void;
  addErrorNotification: (text: string, heading?: string) => void;
  dismissNotification: (notification: INotification) => void;
  dismissNotifications: () => void;
}

const NotificationsContext = React.createContext<INotificationsContext>({
  notifications: [],
  addSuccessNotification: () => undefined,
  addErrorNotification: () => undefined,
  dismissNotification: () => undefined,
  dismissNotifications: () => undefined,
});

export const NotificationsProvider: React.FC = ({ children }) => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  const addNotification = (notification: Omit<INotification, 'timestamp'>) =>
    setNotifications((oldNotifications) => [
      ...oldNotifications,
      {
        ...notification,
        timestamp: new Date().getTime(),
      },
    ]);

  const addSuccessNotification = (text: string, heading?: string) =>
    addNotification({
      text,
      heading,
      type: NotificationType.Success,
    });

  const addErrorNotification = (text: string, heading?: string) =>
    addNotification({
      text,
      heading,
      type: NotificationType.Error,
    });

  const dismissNotification = (notification: INotification) =>
    setNotifications((oldNotifications) =>
      oldNotifications.filter(
        (n) =>
          n.timestamp !== notification.timestamp && n.type !== notification.type
      )
    );

  const dismissNotifications = () => setNotifications([]);

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        addSuccessNotification,
        addErrorNotification,
        dismissNotification,
        dismissNotifications,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotificationsContext = (): INotificationsContext =>
  useContext(NotificationsContext);
