import {
  addDoc,
  getDocs,
  DocumentData,
  query,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore";

import { 
  quotesCollection, 
  isFirebaseConfigured, 
  MOCK_QUOTES,
  db,
} from "./firebase-config";

export const addQuote = async (author: string, text: string) => {
  if (!isFirebaseConfigured || !quotesCollection) {
    console.log("Firebase not configured, skipping quote submission");
    return "mock-id";
  }

  try {
    const docRef = await addDoc(quotesCollection, {
      author,
      text,
      createdAt: Timestamp.now(),
    });
    console.log("Quote added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding quote:", error);
    throw error;
  }
};

export const getQuotes = async (quoteLimit = 10): Promise<DocumentData[]> => {
  if (!isFirebaseConfigured || !quotesCollection) {
    console.log("Firebase not configured, returning mock quotes");
    return MOCK_QUOTES;
  }

  try {
    console.log(`Attempting to fetch ${quoteLimit} quotes from Firestore...`);
    const q = query(
      quotesCollection,
      orderBy("createdAt", "desc"),
      limit(quoteLimit)
    );
    
    console.log("Executing Firestore query...");
    const querySnapshot = await getDocs(q);
    console.log(`Query returned ${querySnapshot.docs.length} documents`);

    if (querySnapshot.empty) {
      console.log("Query returned empty results, using mock quotes as fallback");
      return MOCK_QUOTES;
    }

    const quotes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(`Processed ${quotes.length} quotes from Firestore`);
    
    // If we didn't get any quotes from Firestore, use mock quotes
    return quotes.length > 0 ? quotes : MOCK_QUOTES;
  } catch (error) {
    console.error("Error getting quotes from Firestore:", error);
    console.log("Using mock quotes as fallback due to error");
    return MOCK_QUOTES;
  }
};

// Re-export
export { MOCK_QUOTES, db }; 