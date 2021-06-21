import firebaseApp from "./config";
import { addDoc, getFirestore, collection } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export async function set(details) {
  try {
    const res = await addDoc(collection(db, "Contact Me"), details);
    return true;
  } catch (e) {
    return false;
  }
}
