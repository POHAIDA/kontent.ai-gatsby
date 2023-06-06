import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import {builder, BuilderComponent } from '@builder.io/react';

builder.init('73d4370c7c4f494a9cbafda1555cc961')

function PageTemplate({ data }) {
  const models = data?.allBuilderModels;
  const [page, setPage] = useState(models.onePage?.content);
  
  useEffect(() => {
    setPage(models.onePage?.content);
  }, [models.onePage?.content]);
  
  return <BuilderComponent name="page" content={page} />;
  
}

export default PageTemplate;

export const pageQuery = graphql`
  query ($path: String!) {
    allBuilderModels {
      onePage(target: { urlPath: $path }) {
        content
      }
    }
  }
`;