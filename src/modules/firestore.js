import firebase from './firebase.js';

const db = firebase.firestore();

async function read(collection) {
  const querySnapshot = await db.collection(collection).get();
  return querySnapshot.docs.map((doc) => doc.data());
}

async function update(collection, id, object) {
  await db.collection(collection).doc(id).set(object);
  return read(collection);
}

async function remove(collection, id) {
  await db.collection(collection).doc(id).delete();
  return read(collection);
}

export {read, update, remove};