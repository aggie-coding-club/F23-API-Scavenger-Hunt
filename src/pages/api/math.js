export default function handler(req, res) {
    if (req.method === "POST") {
      const data = req.body
      if (Number(data["answer"]) === 21) {
        res.status(400).send("\n😩 ur a meme lord but you can't add\n")
      }
      else if (Number(data["answer"]) === Number(process.env.ANSWER_3)) {
        res.status(200).send("\nAYOOOO YOU PASSED 1ST GRADE MATH! I'm proud to call you a fellow Aggie 🙂.\n\nFor the next question, make a GET request to\nhttps://acc-api-scavenger-hunt.vercel.app/api/acc_mascot/your_answer \nReplace 'your_answer' part with the name of our mascot.\n\nHint hint: main character of minecraft\n")
      }
      else if (Number(data["answer"]) !== Number(process.env.ANSWER_3)) {
        res.status(400).send("\nC'mon bro 😭😭 Did you mistype? Try again 💀\n")
      }
      else {
        res.status(400).send("\nMake sure you have the right key!\n")
      }
    }
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }
}