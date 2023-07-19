export default function handler(req, res) {

    // *POST request logic
    if (req.method === "POST") {

      const data = req.body // *get json request data

      // *if key is not correct
      if (data["cryptocoin"] === undefined) {
        res.status(400).send("\nIncorrect 'key' in JSON object. Make sure to follow the Format: {'cryptocoin':'your answer'}\n")
      }

      // *if value is not correct
      else if (data["cryptocoin"] !== process.env.ANSWER_5) {
        res.status(400).send("\nIncorrect. Try another coin. There's only so many coins out there after all 💀\n")
      }

      // *if key & value are both correct
      if (data["cryptocoin"] === process.env.ANSWER_5) {
        res.status(200).send("\nNice job!\n\nNext, make a POST request to 'api/buildings' route.\n\nInclude a JSON object with the name of the TAMU engineering building\nFormat: {'building':'your_answer'}\n\nHint hint: it's 1 word\n")
      }

    }

    // !only GET & POST request allowed --> error otherwise
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }

}