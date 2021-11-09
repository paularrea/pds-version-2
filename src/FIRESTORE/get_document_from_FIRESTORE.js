import { db } from "../user_auth_with_FIREBASE/FIREBASE_credentials";

export const get_document_from_FIRESTORE = (setCollectionData, collectionName, docKey) => {
  var docRef = db.collection(collectionName).doc(docKey);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        setCollectionData(doc.data())
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
    return
};
