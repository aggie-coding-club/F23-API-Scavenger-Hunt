export default function handler(req, res) {

    // *POST request logic
    if (req.method === "POST") {

      const data = req.body // *get json request data

      // *if key is not correct
      if (data["answer"] === undefined) {
        res.status(400).send("\nIncorrect 'key' in JSON object. Make sure to follow the Format: {'answer':'your answer'}\n")
      }
      
      // *if value is not correct
      // ? bonus (kinda??)
      else if (Number(data["answer"]) === 21) {
        res.status(400).send("\nIncorrect. Ur a meme lord though and I respect you 😩\n")
      }
      else if (Number(data["answer"]) !== Number(process.env.ANSWER_3)) {
        res.status(400).send("\nIncorrect. C'mon bro 😭😭 Did you mistype? It's not that hard 💀\n")
      }

      // *if key & value are both correct
      else if (Number(data["answer"]) === Number(process.env.ANSWER_3)) {
        res.status(200).send("\nAYOOOO YOU PASSED 1ST GRADE MATH! I'm proud to call you a fellow Aggie 🙂.\n\nNext, make a GET request to the 'api/acc_mascot/your_answer' route.\nReplace 'your_answer' part of the url with the name of ACC's mascot.\n\nHint hint: main character of minecraft\n")
      }
      
    }

    // !only GET & POST request allowed --> error otherwise
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }

}