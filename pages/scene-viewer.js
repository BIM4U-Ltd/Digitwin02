import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";

export default function SceneViewerPage() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component="SceneViewer" />
    </PlasmicRootProvider>
  );
}