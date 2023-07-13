export default function handler(req, res) {
    if (req.method === "POST") {
      const data = req.body
      if (data["building"] === process.env.ANSWER_6) {
        res.status(200).send("\nNice I can now trust you with a map in your hands.\n\nNext make a GET request to\nhttps://acc-api-scavenger-hunt.vercel.app/api/chemistry/your_answer \nreplace 'your_answer' with the chemical formula for hydrogen iodide\n")
      }
      else if (data["building"] !== process.env.ANSWER_6) {
        res.status(400).send("\nBro how are you able to go to class 😭😭\n")
      }
      else {
        res.status(400).send("\nMake sure you have the right key!\n")
      }
    }
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }
}