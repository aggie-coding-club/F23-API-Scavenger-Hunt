export default function handler(req, res) {
    if (req.method === 'POST') {
      data = req.body
      // if (data["acc"] === undefined) {
      //   res.status(400).json({text: "Oof, seems like you didn't include 'acc' as your 'key'"})
      // }
      // else if (data["acc"].toLowerCase() === "aggie coding club") {
      //   res.status(200).json({text:"\nThat's Correct!\n\nFor the next question, make a POST request to https://acc-api-scavenger-hunt.vercel.app/api/numofficers with a JSON object of key “num_officers” and the value as an integer number as your answer to how many officers ACC has. Go to https://aggiecodingclub.com to find out!"})
      // }
      // else if (data["acc"].toLowerCase() !== "aggie coding club") {
      //   res.status(400).json({text:"\nHmmm that's not the correct 'value'\n\nDouble check that you have the acroynm correct."})
      // }
      res.status(400).json({text: data["acc"], msg: data})
    }
    else if (req.method === 'GET') {
      res.status(200).json({ text: '\nWelcome to the ACC API Scavenger Hunt!!!\n\nStart by creating a POST request on the same URL.\n\nInclude a JSON object with ACC\'s full name. Ex: {"acc", "your_answer_here"}' });
    }
    else {
      res.status(405).json({text: 'Doesn\'t support the '+req.method+' method'})
    }
}