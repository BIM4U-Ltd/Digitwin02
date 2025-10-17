import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import SceneViewer from "./src/components/SceneViewer"; // Adjust path if needed

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "uQmBNRjX6qh8mPhDPoUqEr",
      token: "QuSNbC1JX3YSI7JQ9AsbA08VIkpfkblkrfSoKoleC2qkL5g7d16haPTpq6pRLcUb8hMYH6HBK7Eafqi7K7Mg",
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