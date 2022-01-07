// @ts-nocheck

import React from 'react';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import base58 from 'bs58';

export const ARViewer: FC = () => {
  const { url } = useParams<{ url: string }>();
  const decodedURL = base58.decode(url).toString('utf-8');
  return (
    <model-viewer
      style={{
        width: `100%`,
        height: `100%`,
        minHeight: 400,
        minWidth: 400,
        maxHeight: 400,
        maxWidth: '90hw',
      }}
      src={decodedURL}
      ios-src={decodedURL}
      ar
      ar-placement="wall"
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      alt="Wall art"
    >
      <Button type="ghost" slot="ar-button">
        Open AR Viewer
      </Button>
    </model-viewer>
  );
};
