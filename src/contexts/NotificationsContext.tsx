import React, { useContext, useEffect, useState } from "react";
import { usePrevious } from "../hooks";
import { useLocation } from "../router";
import { INotification, NotificationType } from "../types";

interface INotificationContent
  extends Pick<INotification, 'shouldAutoDismiss' | 'heading' | 'text'> {}

interface INotificationsContext {
  notifications: INotification[];
  addSuccessNotification: (content: INotificationContent) => void;
  addErrorNotification: (content: INotificationContent) => void;
  dismissNotification: (notification: INotification) => void;
}

const NotificationsContext = React.createContext<INotificationsContext>({
  notifications: [],
  addSuccessNotification: () => undefined,
  addErrorNotification: () => undefined,
  dismissNotification: () => undefined,
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

  const addSuccessNotification = ({
    shouldAutoDismiss = false,
    heading = 'Success',
    text,
  }: INotificationContent) =>
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
  }: INotificationContent) =>
    addNotification({
      type: NotificationType.Error,
      shouldAutoDismiss,
      heading,
      text,
    });

  const dismissNotification = (notification: INotification) =>
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

export const useNotificationsContext = (): INotificationsContext =>
  useContext(NotificationsContext);
