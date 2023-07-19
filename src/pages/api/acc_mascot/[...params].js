export default function handler(req, res) {

    // *GET request logic
    if (req.method === 'GET') {

      const param = req.query["params"][0] // * get user answer

      // * if correct answer
      if (param.toLowerCase() === process.env.ANSWER_4) {
        res.status(200).send("\nLET'S GOO! You're a real ACC fan!\n\nNext, send a POST request to 'api/tradition' route.\n\nInclude a JSON object with the coin you should put on the foot of the Sul Ross statue for good luck on exams\nFormat: {'cryptocoin':'your_answer'}\n\nHint hint: maybe a good ol' Google search with the keywords 'ross' 'statue' & 'tradition' will help you 🙂\n");
      }

      // * if not correct answer
      else {
        res.status(400).send("\nIncorrect. Not ACC's mascot. Hint: Google Minecraft's main character\n")
      }
    }

    // !only GET & POST request allowed --> error otherwise
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }

}