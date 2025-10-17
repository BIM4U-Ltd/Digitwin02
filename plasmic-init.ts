import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import SceneViewer from "./src/components/SceneViewer"; // Adjust path if needed

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "4JQ5FC3rCbvG3U59yyjASf",
      token: "TdJ1QaLkUSGx83C2n2zkEOlOollE1hqq7rpduWf1bv3pWF4mvX3gIYOWoPPfIxDK57it9JRHsnogLPawG2uw",
    },
  ],
  preview: false, // ✅ Correct placement inside the config object
});

// ✅ Register your custom component
PLASMIC.registerComponent(SceneViewer, {
  name: "SceneViewer",
  props: {
    sceneId: {
      type: "string",
      defaultValue: "Home",
    },
  },
});