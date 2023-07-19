export default function handler(req, res) {

    // *POST request logic
    if (req.method === "POST") {

      const data = req.body // *get json request data
      
      // *if key is not correct
      if (data["proj"] === undefined) {
        res.status(400).send("\nIncorrect 'key' in JSON object. Make sure to follow the Format: {'proj':'your answer'}\n")
      }

      // *if value is not correct
      else if (data["proj"] !== process.env.ANSWER_8) {
        res.status(400).send("\nIncorrect. Visit ACC's GitHub page to find the answer!\n")
      }

      // *if key & value are both correct
      else if (data["proj"] === process.env.ANSWER_8) {
        res.status(200).send("\nCongratulations on completing the ACC API Scavenger Hunt!\n\nSend a POST request to the 'api/hof' route.\n\nInclude the following JSON object:\n{'name':'your_name', 'key':" + process.env.COMPLETION_KEY + "} to officially register yourself into the hall of fame\n\nRemember to replace 'your_name' part with your actual name (or else we won't know who tf you are 💀)\n")
      }

    }

    // !only GET & POST request allowed --> error otherwise
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }

}