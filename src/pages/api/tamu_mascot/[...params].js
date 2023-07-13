export default function handler(req, res) {
    if (req.method === 'GET') {
      if (req.query["params"].length > 1) {
        res.status(400).send("\nWoooahh there buddy! Make sure you're sending to the right route!\n")
      }
      const param = req.query["params"][0]
      if (param.toLowerCase() === process.env.ANSWER_2) {
        res.status(200).send("\nCorrect! Now let's switch things up a bit...\n\nSend a POST request to https://acc-api-scavenger-hunt.vercel.app/api/math \nwith the answer to 9 + 10 written in the key, value pair of {'answer':your_answer}\n");
      }
      else {
        res.status(400).send("\nWrong answer, make sure you spelled the name correctly\n")
      }
    }
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }
}