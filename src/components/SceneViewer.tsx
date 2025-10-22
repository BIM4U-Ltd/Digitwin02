import React from 'react';

interface SceneViewerProps {
  sceneId?: string;
}

const SceneViewer: React.FC<SceneViewerProps> = ({ sceneId = 'Home1' }) => {
  const adtUrl = 'https://digitwin01.api.uks.digitaltwins.azure.net';
  const storageUrl = 'https://bim4userver1.blob.core.windows.net/bim4udigitaltwin';

  const viewerUrl = `https://explorer.digitaltwins.azure.net/3DScenes/demo?sceneId=${sceneId}&adtUrl=${encodeURIComponent(
    adtUrl
  )}&storageUrl=${encodeURIComponent(storageUrl)}`;

  return (
    <iframe
      src={viewerUrl}
      width="100%"
      height="800px"
      frameBorder="0"
      allowFullScreen
      title="Azure 3D Scene"
    />
  );
};

export default SceneViewer;