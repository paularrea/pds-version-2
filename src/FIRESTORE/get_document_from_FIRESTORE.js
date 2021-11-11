import { db } from "../user_auth_with_FIREBASE/FIREBASE_credentials";

export const get_document_from_FIRESTORE = (collectionName, docKey) => {
  return db
    .collection(collectionName)
    .doc(docKey)
    .get();
};

// export const get_document_from_FIRESTORE = (collectionName, docKey) => {
//   var docRef = db
//     .collection(collectionName)
//     .doc(docKey)
//     .onSnapshot((doc) => {
//       doc.data();
//     });
//   // docRef
//   //   .get()
//   //   .then((doc) => {
//   //     if (doc.exists) {
//   //       setCollectionData(doc.data())
//   //     } else {
//   //       console.log("No such document!");
//   //     }
//   //   })
//   //   .catch((error) => {
//   //     console.log("Error getting document:", error);
//   //   });
//   return docRef;
// };
