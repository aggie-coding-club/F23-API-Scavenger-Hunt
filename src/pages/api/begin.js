export default function handler(req, res) {
    if (req.method === 'POST') {
      const data = req.body
      if (data["acc"] === undefined) {
        res.status(400).json({text: "\nOof, make sure that you passed in the correct 'key' and 'value' in your POST method\n"})
      }
      else if (data["acc"].toLowerCase() === "aggie coding club") {
        res.status(200).json({text:"\nThat's Correct!\n\nFor the next question, make a POST request to\n'url' = https://acc-api-scavenger-hunt.vercel.app/api/numofficers \nwith a JSON object of {'num_officers': 'number of acc officers not counting OITs 😢'}\n\n. Go to https://aggiecodingclub.com to find out!\n"})
      }
      else if (data["acc"].toLowerCase() !== "aggie coding club") {
        res.status(400).json({text:"\nHmmm that's not the correct 'value'\n\nDouble check that you have the acroynm correct.\n"})
      }
    }
    else if (req.method === 'GET') {
      res.status(200).json({ text: '\nWelcome to the ACC API Scavenger Hunt!!!\n\nStart by creating a POST request on the same URL.\n\nInclude a JSON object with ACC\'s full name. Ex: {"acc", "your_answer_here"}\n' });
    }
    else {
      res.status(405).json({text: '\nDoesn\'t support the '+req.method+' method\n'})
    }
}