import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import SceneViewer from "./src/components/SceneViewer"; // Ensure path is correct

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "4JQ5FC3rCbvG3U59yyjASf",
      token: "TdJ1QaLkUSGx83C2n2zkEOlOollE1hqq7rpduWf1bv3pWF4mvX3gIYOWoPPfIxDK57it9JRHsnogLPawG2uw",
    },
  ],
  preview: false,
});

// ✅ Register your custom component with extra props
PLASMIC.registerComponent(SceneViewer, {
  name: "SceneViewer",
  props: {
    sceneId: {
      type: "string",
      defaultValue: "Home1",
    },
    adtUrl: {
      type: "string",
      defaultValue: process.env.NEXT_PUBLIC_ADT_URL || "",
    },
    storageUrl: {
      type: "string",
      defaultValue: process.env.NEXT_PUBLIC_STORAGE_URL || "",
    },
  },
});