import { NextApiRequest, NextApiResponse } from 'next';
import { DemoFile } from 'demofile';

export const config = {
  api: { bodyParser: { sizeLimit: '50mb' } }, // Augmenter pour les fichiers .dem
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  try {
    const buffer = Buffer.from(req.body, 'binary');
    const demoFile = new DemoFile();
    const stats = { kills: 0, deaths: 0, headshots: 0, rounds: [] };

    demoFile.gameEvents.on("player_death", (e) => {
      stats.kills++;
      if (e.headshot) stats.headshots++;
    });

    // On attend la fin du parsing (simplifié pour l'exemple)
    demoFile.parse(buffer);

    res.status(200).json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors du traitement de la démo" });
  }
}
