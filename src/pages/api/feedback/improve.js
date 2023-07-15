import {doc, setDoc} from "firebase/firestore";
import { db } from "@/firebase";

export default async function handler(req, res) {
    if (req.method === "POST") {
      const data = req.body
      await setDoc(doc(db, "feedback_learn"), data)
      res.status(200).send("\nThanks for the feedback!\n\nThat's all the questions we had for you. Feel free to sign off now!\n")
    }
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }
}