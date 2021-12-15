import { db } from "../user_auth_with_FIREBASE/FIREBASE_credentials";

const push_new_document_into_FIRESTORE = (collection_name, json_doc) => {
  db.collection(collection_name).add(json_doc);
};

export default push_new_document_into_FIRESTORE;
