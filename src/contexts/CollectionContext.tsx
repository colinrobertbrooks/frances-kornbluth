import React, { createContext, useContext, useState } from 'react';
import { getCollection } from '../api';
import { ICollectionRecord } from '../types';

type Collection = ICollectionRecord[] | null;

interface ICollectionContext {
  collectionIsLoading: boolean;
  collection: Collection;
  loadCollection: () => void;
}

const CollectionContext = createContext<ICollectionContext>({
  collectionIsLoading: false,
  collection: null,
  loadCollection: () => undefined,
});

export const CollectionProvider: React.FC = ({ children }) => {
  const [collectionIsLoading, setCollectionIsLoading] = useState<boolean>(
    false
  );
  const [collection, setCollection] = useState<Collection>(null);

  const loadCollection = async () => {
    try {
      setCollectionIsLoading(true);
      const loadedCollection = await getCollection();
      setCollection(loadedCollection);
      setCollectionIsLoading(false);
    } catch (error) {
      // TODO: handle
    }
  };

  return (
    <CollectionContext.Provider
      value={{
        collectionIsLoading,
        collection,
        loadCollection,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollectionContext = (): ICollectionContext =>
  useContext(CollectionContext);
