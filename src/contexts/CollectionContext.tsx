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

const CollectionContext = createContext<ICollectionContext>({
  collectionIsLoading: false,
  collection: null,
  loadCollection: () => undefined,
  getCollectionRecord: () => undefined,
});

export const CollectionProvider: React.FC = ({ children }) => {
  const [collectionIsLoading, setCollectionIsLoading] = useState<boolean>(
    false
  );
  const [collection, setCollection] = useState<Collection>(null);
  const { addErrorNotification } = useNotificationsContext();

  const loadCollection = async () => {
    try {
      setCollectionIsLoading(true);
      const loadedCollection = await getCollection();
      setCollection(loadedCollection);
      setCollectionIsLoading(false);
    } catch (error) {
      addErrorNotification('Error loading the collection.');
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

export const useCollectionContext = (): ICollectionContext =>
  useContext(CollectionContext);
