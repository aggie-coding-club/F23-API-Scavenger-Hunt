export default function handler(req, res) {
    if (req.method === 'POST') {
      console.log(req.body)
      res.status(200).json({text: req.body})
    }
    else if (req.method === 'GET') {
      res.status(200).json({ text: 'Welcome to the ACC API Scavenger Hunt!!! Start by creating a POST request on the same URL. Include a JSON object with ACC\'s full name. Ex: {"acc", "your_answer_here"}' });
    }
    else {
      res.status(404).json({text: 'Doesn\'t support the '+req.method+' method'})
    }
}