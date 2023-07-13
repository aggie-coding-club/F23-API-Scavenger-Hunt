export default function handler(req, res) {
    if (req.method === 'POST') {
      const data = req.body
      if (data["acc"] === undefined) {
        res.status(400).send("\nOof, make sure that you passed in the correct 'key' and 'value' in your POST method\n")
      }
      else if (data["acc"].toLowerCase() === process.env.ANSWER_BEGIN) {
        res.status(200).send("\nThat's Correct!\n\nFor the next question, make a POST request to\n'url' = https://acc-api-scavenger-hunt.vercel.app/api/numofficers \nwith a JSON object of\n{'num_officers': 'number of acc officers not counting OITs 😢'}\n\nGo to https://aggiecodingclub.com to find out!\n")
      }
      else if (data["acc"].toLowerCase() !== process.env.ANSWER_BEGIN) {
        res.status(400).send("\nHmmm that's not the correct 'value'\n\nDouble check that you have the acroynm correct.\n")
      }
    }
    else if (req.method === 'GET') {
      res.status(200).send('\nWelcome to the ACC API Scavenger Hunt!!!\n\nStart by creating a POST request on the same URL.\n\nInclude a JSON object with ACC\'s full name. Ex: {"acc", "your_answer_here"}\n');
    }
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }
}