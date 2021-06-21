import firebase from "./config";
const contacts = firebase.firestore().collection("Contact Me");

export async function set(details) {
  try {
    const res = await contacts.add(details);
    return true;
  } catch (e) {
    return false;
  }
}
