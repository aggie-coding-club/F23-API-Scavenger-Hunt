import {serverTimestamp, doc, setDoc} from "firebase/firestore";
import { db } from "@/firebase";

export default async function handler(req, res) {

    // *POST request logic
    if (req.method === "POST") {

      const data = req.body // *get json request data

      // * if key or name doesn't exist
      if (data["key"] === undefined || data["name"] === undefined) {
        res.status(400).send("\nIncorrect 'key(s)' in JSON object. Make sure to follow the Format: {'name':'your_name', 'key':'access key'}\n")
      }

      // * if key value is wrong
      else if (Number(data["key"]) !== Number(process.env.COMPLETION_KEY)) {
        res.status(400).send("\nIncorrect access code value. Make sure you entered the correct value for your 'key' index.\n")
      }

      // * if key value is correct
      else if (Number(data["key"]) === Number(process.env.COMPLETION_KEY)) {
        await setDoc(doc(db, "halloffame", data["name"]), {
            timestamp: serverTimestamp()
        })
        res.status(200).send("\nYou've officially completed the ACC API Scavenger Hunt! Hit up one of the Workshop Officers to notify them of your greatness!\n\nIf you have time, please answer some feedback questions!\n\nSend a POST request to the 'api/feedback' route.\n\nInclude a JSON object with any feedback or comments you have on this workshop!\nFormat: {'feedback':'your_feedback'}\n")
      }

    }

    // !only GET & POST request allowed --> error otherwise
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }

}