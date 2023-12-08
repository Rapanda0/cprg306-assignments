import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to get items for a specific user
export const getItems = async (userId) => {
    try {
      const itemsCollectionRef = db.collection(`users/${userId}/items`);
      
      const querySnapshot = await itemsCollectionRef.get();

      const items = [];
  
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      return items;
    } catch (error) {
      console.error('Error getting items:', error);
      throw error;
    }
  };

  export const addItem = async (userId, item) => {
    try {
      const itemsCollectionRef = db.collection(`users/${userId}/items`);
      
      const docRef = await itemsCollectionRef.add(item);

      return docRef.id;
    } catch (error) {
      console.error('Error adding item:', error);
      throw error;
    }
  };