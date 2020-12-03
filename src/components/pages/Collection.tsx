import React, { useEffect } from 'react';
import { Page } from '../layout';
import { getCollection } from '../../api';

export const Collection: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      const collection = await getCollection();
      console.log(collection); // WIP
    };

    fetchData();
  }, []);

  return (
    <Page title="Collection">
      <p>TODO</p>
    </Page>
  );
};
