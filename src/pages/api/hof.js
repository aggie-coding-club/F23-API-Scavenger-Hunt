import {Timestamp, doc, setDoc} from "firebase/firestore";
import { db } from "@/firebase";

export default async function handler(req, res) {
    if (req.method === "POST") {
      const data = req.body
      if (Number(data["key"]) === process.env.COMPLETION_KEY) {
        await setDoc(doc(db, "halloffame", data["name"]), {
            "time": Timestamp
        })
        res.status(200).send("\nYour name should now be on the leaderboard! If you have time, please answer some feedback questions!\n\nSend a POST request to\nhttps://acc-api-scavenger-hunt.vercel.app/api/feedback/enjoy \nwith your answer to the question:\n'did you enjoy the workshop?'\nex: {'feedback':'your_feedback'}\n")
      }
      else if (Number(data["key"]) !== process.env.COMPLETION_KEY) {
        res.status(400).send("\nHmmm that's the wrong key...\n")
      }
      else {
        res.status(400).send("\nMake sure you have the right key!\n")
      }
    }
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }
}