const fs = require("fs");
const demofile = require("demofile");

const parseDemo = (filePath) => {
  const buffer = fs.readFileSync(filePath);
  const demoFile = new demofile.DemoFile();

  demoFile.gameEvents.on("player_death", (e) => {
    const victim = demoFile.entities.getByUserId(e.userid);
    const attacker = demoFile.entities.getByUserId(e.attacker);
    
    if (attacker && victim) {
      console.log(`${attacker.name} a tué ${victim.name} avec ${e.weapon}`);
      // Ici, on stocke les coordonnées (x,y,z) pour la Heatmap et la 3D
    }
  });

  demoFile.parse(buffer);
};
