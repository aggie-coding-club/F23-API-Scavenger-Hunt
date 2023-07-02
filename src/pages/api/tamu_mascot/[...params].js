export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json({ text: "WIP" });
    }
    else {
      res.status(405).json({text: '\nDoesn\'t support the '+req.method+' method\n'})
    }
}