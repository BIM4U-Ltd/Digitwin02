import React from 'react';

interface SceneViewerProps {
  sceneId?: string;
}

const SceneViewer: React.FC<SceneViewerProps> = ({ sceneId = 'Home1' }) => {
  const viewerUrl = `https://digitwin01.api.uks.digitaltwins.azure.net/scenesstudio/viewer?sceneId=${sceneId}`;

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