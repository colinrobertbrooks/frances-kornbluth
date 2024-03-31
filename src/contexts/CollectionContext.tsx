import React, { createContext, useContext, useState } from 'react';
import { getCollection } from '../api';
import { ICollectionRecord } from '../types';
import { useNotificationsContext } from './NotificationsContext';

type Collection = ICollectionRecord[] | null;

interface ICollectionContext {
  collectionIsLoading: boolean;
  collection: Collection;
  loadCollection: () => void;
  getCollectionRecord: (id: number) => ICollectionRecord | undefined;
}

const CollectionContext = createContext<ICollectionContext>(
  {} as ICollectionContext
);

export const CollectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [collectionIsLoading, setCollectionIsLoading] =
    useState<boolean>(false);
  const [collection, setCollection] = useState<Collection>(null);
  const { addErrorNotification } = useNotificationsContext();

  const loadCollection = async () => {
    try {
      setCollectionIsLoading(true);
      const loadedCollection = await getCollection();
      setCollection(loadedCollection);
      setCollectionIsLoading(false);
    } catch (error) {
      addErrorNotification({
        text: 'Error loading the collection.',
      });
    }
  };

  const getCollectionRecord = (id: number): ICollectionRecord | undefined =>
    collection?.find((c) => c.id === id);

  return (
    <CollectionContext.Provider
      value={{
        collectionIsLoading,
        collection,
        loadCollection,
        getCollectionRecord,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollectionContext = (): ICollectionContext => {
  const context = useContext(CollectionContext);
  if (!context) {
    throw new Error(
      'useCollectionContext must be used within a <CollectionProvider />'
    );
  }
  return context;
};
