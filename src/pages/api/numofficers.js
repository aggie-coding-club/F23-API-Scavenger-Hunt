export default function handler(req, res) {

    // *POST request logic
    if (req.method === "POST") {

      const data = req.body // *get json request data

      // *if key is not correct
      if (data["num_officers"] === undefined) {
        res.status(400).send("\nIncorrect 'key' in JSON object. Make sure to follow the Format: {'num_officers':'your answer'}\n")
      }
      
      // *if value is not correct
      else if (Number(data["num_officers"]) !== 14) {
        res.status(400).send("\nIncorrect. Make sure you have the right number of officers. REMEMBER DON'T INCLUDE OIT(s) (sorry Andrew 2). Can pass in either as string or number.\n")
      }

      // *if key & value are both correct
      else if (Number(data["num_officers"]) === Number(process.env.ANSWER_1)) {
        res.status(200).send("\nYou got the right number! Good to know that you can actually count 😆.\n\nNext make a GET request to the 'api/tamu_mascot/your_answer' route\nReplace 'your_answer' part of the url with the name of Texas A&M's mascot\n")
      }
      

    }

    // !only GET & POST request allowed --> error otherwise
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }
}