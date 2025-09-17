import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticlesBG() {
  const init = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "transparent" },
        particles: {
          number: { value: 40 },
          move: { enable: true, speed: 1.2 },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 3 } },
          links: { enable: true, opacity: 0.2 },
        },
      }}
    />
  );
}
