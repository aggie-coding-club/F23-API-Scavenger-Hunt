export default function handler(req, res) {
    if (req.method === "POST") {
      const data = req.body
      if (data["cryptocoin"] === process.env.ANSWER_5) {
        res.status(200).send("\nNice job!\n\nNext make a POST request to\nhttps://acc-api-scavenger-hunt.vercel.app/api/buildings \nwith the name of the engineering building\nex: {'building':'your_answer'}\n\nHint hint: it's 1 word\n")
      }
      else if (data["cryptocoin"] !== process.env.ANSWER_5) {
        res.status(400).send("\nNah try another coin\n")
      }
      else {
        res.status(400).send("\nMake sure you have the right key!\n")
      }
    }
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }
}