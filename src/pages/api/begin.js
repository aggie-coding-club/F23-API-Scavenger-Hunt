export default function handler(req, res) {
    if (req.method === 'POST') {
      res.status(200).json({text: '\nwefwef'})
    }
    else if (req.method === 'GET') {
      res.status(200).json({ text: '\nWelcome to the ACC API Scavenger Hunt!!!\n\nStart by creating a POST request on the same URL.\n\nInclude a JSON object with ACC\'s full name. Ex: {"acc", "your_answer_here"}' });
    }
    else {
      res.status(405).json({text: 'Doesn\'t support the '+req.method+' method'})
    }
}