import { db } from "@/firebase"
import { getDoc, doc } from "firebase/firestore";

export default async function handler (req, res) {

    if (req.method === "GET") {
      try {
        const querySnapshot = await getDoc(doc(db, "test", "person"))
        res.status(200).send(querySnapshot.data())
      } catch(e) {
        res.status(400).send(e)
      }
    }

    else if (req.method === "POST") {
      try {
        const data = req.body;
        if (data["human"].toLowerCase() === "true") {
          await updateDoc(doc(db, "test", "person"), data)
          res.status(200).send("yaya ur human!")
        }
        else {
          res.status(400).send("eww ur not human~~")
        }
      } catch(e) {
        res.status(400).send("error occurred")
      }
    }

    else if (req.method === "PUT") {
      try {
        const data = req.body
      } catch(e) {
        res.status(400).send(e)
      }
    }

    else if (req.method === "PATCH") {

    }

    else if (req.method === "DELETE") {

    }

    else {
      res.status(405).send("\n\
      Doesn't support the "+req.method+" method\
      \n")
    }
}