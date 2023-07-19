import {serverTimestamp, doc, addDoc, collection} from "firebase/firestore";
import { db } from "@/firebase";

export default async function handler(req, res) {

    // *POST request logic
    if (req.method === "POST") {

        const data = req.body // *get json request data
        
        // *if key is not correct
        if (data["feedback"] === undefined) {
            res.status(400).send("\nIncorrect 'key' in JSON object. Make sure to follow the Format: {'feedback':'your answer'}\n")
        }

        // * if key is correct store value
        else {
            await addDoc(collection(db, "feedback"), {data})
            res.status(200).send("\nThanks for you're feedback 😡. Oops wrong face. Holdup...\n\n😁 There we go!\n")
        }
    }

    // !error if any other HTTP method
    else {
      res.status(405).send('\nDoesn\'t support the '+req.method+' method\n')
    }

}