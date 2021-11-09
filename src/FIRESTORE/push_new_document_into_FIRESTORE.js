import FIREBASE_credentials from "../confidentialy/FIREBASE_credentials";

const push_new_document_into_FIRESTORE = (
  collection_name,
  json_doc
) => {
  FIREBASE_credentials.firestore().collection(collection_name).add(json_doc);
};

export default push_new_document_into_FIRESTORE;
