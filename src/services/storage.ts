/**
 * Interfaces to Firebase storage services
 */
import firebase from 'firebase/app';
import 'firebase/storage';

export const createUploadImageTask = (image: File, folder: string): firebase.storage.UploadTask => {
  const {
    name, type, lastModified,
  } = image;
  const metadata: firebase.storage.UploadMetadata = {
    contentType: type,
    customMetadata: { lastModified: lastModified.toString() },
  };

  // Create storage ref
  const storage = firebase.storage();
  const imageRef = storage.ref().child(`${folder}/${name}`);

  return imageRef.put(image, metadata);
};
