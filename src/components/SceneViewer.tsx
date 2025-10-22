import React, { useEffect, useRef } from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { SceneView } from "iot-cardboard-js";

interface SceneViewerProps {
  sceneId?: string;
  adtUrl?: string;
  storageUrl?: string;
}

const SceneViewer: React.FC<SceneViewerProps> = ({
  sceneId = "Home1",
  adtUrl = "https://digitwin01.api.uks.digitaltwins.azure.net",
  storageUrl = "https://bim4userver1.blob.core.windows.net/bim4udigitaltwin"
}) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const msalConfig = {
      auth: {
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
        authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_TENANT_ID}`,
        redirectUri: window.location.origin,
      },
    };

    const msalInstance = new PublicClientApplication(msalConfig);

    async function initViewer() {
      const request = {
        scopes: [
          "https://digitaltwins.azure.net/.default",
          "https://storage.azure.com/.default",
        ],
      };

      let account = msalInstance.getAllAccounts()[0];
      if (!account) {
        await msalInstance.loginPopup(request);
        account = msalInstance.getAllAccounts()[0];
      }

      const response = await msalInstance.acquireTokenSilent({
        ...request,
        account,
      });

      const token = response.accessToken;

      if (viewerRef.current) {
        SceneView.initialize({
          container: viewerRef.current,
          sceneId,
          adtUrl,
          storageUrl,
          authToken: token,
        });
      }
    }

    initViewer();
  }, [sceneId, adtUrl, storageUrl]);

  return <div ref={viewerRef} style={{ width: "100%", height: "800px" }} />;
};

export default SceneViewer;