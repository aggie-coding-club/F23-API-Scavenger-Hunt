export default function handler(req, res) {

    // *GET request logic
    if (req.method === 'GET') {

      const param = req.query["params"][0] // * get user answer

      // * if correct answer
      if (param.toLowerCase() === process.env.ANSWER_2) {
        res.status(200).send("\nCorrect! Now let's switch things up a bit...\n\nSend a POST request to the 'api/math' route.\n\nInclude a JSON object with the answer to 9 + 10\nFormat: {'answer':'your_answer'}\n");
      }

      // * if not correct answer
      else {
        res.status(400).send("\nIncorrect. Not TAMU's mascot. Try again\n")
      }
    }

    // !only GET & POST request allowed --> error otherwise
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }

}