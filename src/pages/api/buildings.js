export default function handler(req, res) {

    // *POST request logic
    if (req.method === "POST") {

      const data = req.body // *get json request data

      // *if key is not correct
      if (data["building"] === undefined) {
        res.status(400).send("\nIncorrect 'key' in JSON object. Make sure to follow the Format: {'building':'your answer'}\n")
      }

      // *if value is not correct
      else if (data["building"] !== process.env.ANSWER_6) {
        res.status(400).send("\nIncorrect. Bro you really need to touch grass more 😭😭\n")
      }
      
      // *if key & value are both correct
      if (data["building"] === process.env.ANSWER_6) {
        res.status(200).send("\nDamn I'm fr running out of compliments over here 😩.\n\nNext, make a GET request to the 'api/chemistry/your_answer' route.\nReplace 'your_answer' with the chemical formula for hydrogen iodide\n\nDon't worry~~ you can use Google.\n")
      }

    }

    // !only GET & POST request allowed --> error otherwise
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }

}