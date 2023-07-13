export default function handler(req, res) {
    if (req.method === 'GET') {
      if (req.query["params"].length > 1) {
        res.status(400).send("\nWoooahh there buddy! Make sure you're sending to the right route!\n")
      }
      const param = req.query["params"][0]
      if (param.toLowerCase() === process.env.ANSWER_4) {
        res.status(200).send("\nLET'S GOO! You're officially an ACC fan! \n\nNext send a POST request to https://acc-api-scavenger-hunt.vercel.app/api/tradition \nwith what coin you should put on the foot of the Sul Ross statue for good luck on exams written in the key, value pair of {'cryptocoin':your_answer}\n\nHint hint: maybe a good google search with the keywords 'ross' 'statue' & 'tradition' will help you 🙂\n");
      }
      else {
        res.status(400).send("\nWrong answer, make sure you spelled the name correctly\n")
      }
    }
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }
}