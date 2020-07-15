import React, { useEffect } from 'react';
import { PageLayout } from '../layout';
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
    <PageLayout heading="Collection">
      <p>TODO</p>
    </PageLayout>
  );
};
