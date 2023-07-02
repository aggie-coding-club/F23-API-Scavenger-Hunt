export default function handler(req, res) {
    if (req.method === "POST") {
      const data = req.body
      if (Number(data["num_officers"]) === undefined) {
        res.status(400).json({text: "\nOof, make sure that you passed in the correct 'key' in your POST method\n"})
      }
      else if (Number(data["num_officers"]) === 14) {
        res.status(200).json({text: "\nYou got the right number! Good to know that you can actually count 😆\n\nFor the next question, make a GET request to\n'url' = https://acc-api-scavenger-hunt.vercel.app/api/tamu_mascot/your_answer \nReplace 'your_answer' part of the url with the name of Texas A&M's mascot\n"})
      }
      else if (Number(data["num_officers"]) !== 14) {
        res.status(400).json({text:"\nHmmm that's not the correct 'value'\n\nMake sure you didn't accidentally count the OIT(s).\n"})
      }
    }
    else {
      res.status(405).json({text: '\nDoesn\'t support the '+req.method+' method\n'})
    }
}