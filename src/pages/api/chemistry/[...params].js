export default function handler(req, res) {

    // *GET request logic
    if (req.method === 'GET') {

      const param = req.query["params"][0] // * get user answer

      // * if correct answer
      if (param.toLowerCase() === process.env.ANSWER_7) {
        res.status(200).send("\nHello to you too 😊.\n\nFor the final question, send a POST request to the 'api/top' route.\n\nInclude a JSON object with the name of the most starred repository on the ACC GitHub\nFormat: {'proj':your_answer}\n\nHint hint: include the dash in your answer\n");
      }

      // * if not correct answer
      else {
        res.status(400).send("\nIncorrect. How about using the internet?\n")
      }

    }

    // !only GET & POST request allowed --> error otherwise
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }

} 