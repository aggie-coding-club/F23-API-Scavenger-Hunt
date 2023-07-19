export default function handler(req, res) {

    // *POST request logic
    if (req.method === 'POST') {

      const data = req.body // *get json request data

      // *if key is not correct
      if (data["acc"] === undefined) {
        res.status(400).send("\nIncorrect 'key' in JSON object. Make sure to follow the Format: {'acc':'your answer'}\n")
      }

      // *if value is not correct
      else if (data["acc"].toLowerCase() !== process.env.ANSWER_BEGIN) {
        res.status(400).send("\nIncorrect. Double check that you have the ACC acroynm correct. Also include spaces between each word in the acroynm. Capitalization DOES NOT matter.\n")
      }

      // *if key & value are both correct
      else if (data["acc"].toLowerCase() === process.env.ANSWER_BEGIN) {
        res.status(200).send("\nThat's Correct!\n\nNext make a POST request to the 'api/numofficers' route on the same domain.\n\nInclude a JSON object of the number of officers (not including OITs).\nFormat: {'num_officers': 'number of acc officers not counting OITs 😢'}\n\nNot sure how many officers there are? Go to https://aggiecodingclub.com to find out!\n")
      }

    }

    // *GET request logic
    else if (req.method === 'GET') {
      res.status(200).send("\nWelcome to the ACC API Scavenger Hunt!!!\n\nStart by creating a POST request on the same URL ('api/begin' route).\n\nInclude a JSON object with ACC's full name. Format: {'acc', 'your answer'}\n");
    }

    // !only GET & POST request allowed --> error otherwise
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }
}