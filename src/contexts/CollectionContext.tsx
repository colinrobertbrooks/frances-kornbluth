import React, { createContext, useContext, useState } from 'react';
import { getCollection } from '../api';
import { CollectionItem } from '../types';
import { useNotificationsContext } from './NotificationsContext';

type Collection = CollectionItem[] | null;

type CollectionContextValue = {
  collectionIsLoading: boolean;
  collection: Collection;
  loadCollection: () => void;
  getCollectionItem: (id: number) => CollectionItem | undefined;
};

const CollectionContext = createContext<CollectionContextValue>(
  {} as CollectionContextValue
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

  const getCollectionItem = (id: number): CollectionItem | undefined =>
    collection?.find((c) => c.id === id);

  return (
    <CollectionContext.Provider
      value={{
        collectionIsLoading,
        collection,
        loadCollection,
        getCollectionItem,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollectionContext = (): CollectionContextValue => {
  const context = useContext(CollectionContext);
  if (!context) {
    throw new Error(
      'useCollectionContext must be used within a <CollectionProvider />'
    );
  }
  return context;
};
