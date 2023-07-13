export default function handler(req, res) {
    if (req.method === 'GET') {
      if (req.query["params"].length > 1) {
        res.status(400).send("\nWoooahh there buddy! Make sure you're sending to the right route!\n")
      }
      const param = req.query["params"][0]
      if (param.toLowerCase() === process.env.ANSWER_7) {
        res.status(200).send("\nDamn I'm fr running out of compliments over here 😩.\n\nFor the final question, send a POST request to https://acc-api-scavenger-hunt.vercel.app/api/top \nwith the name of the repository on the ACC GitHub with the most stars in the key, value pair of {'proj':your_answer}\n\nHint hint: you can sort repositories by stars in GitHub\n");
      }
      else {
        res.status(400).send("\nWrong answer, try using the internet\n")
      }
    }
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }
} 