export default function handler(req, res) {
    if (req.method === "POST") {
      const data = req.body
      if (data["proj"] === process.env.ANSWER_8) {
        res.status(200).send("\nCongratulations on completing the ACC API Scavenger Hunt!\n\nSend a POST request to\nhttps://acc-api-scavenger-hunt.vercel.app/api/hof \nwith your name and the completion key: " + process.env.COMPLETION_KEY + " to officially register yourself into the hall of fame\nex: {'name':'your_name', 'key', 'the_key'}\n")
      }
      else if (data["proj"] !== process.env.ANSWER_8) {
        res.status(400).send("\nNope\n")
      }
      else {
        res.status(400).send("\nMake sure you have the right key!\n")
      }
    }
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }
}