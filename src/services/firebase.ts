import { 
  collection, 
  addDoc, 
  updateDoc, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp,
  onSnapshot
} from "firebase/firestore";
import { db } from "@/lib/firebase";

// Collection names
export const COLLECTIONS = {
  USERS: "users",
  BUSINESSES: "businesses",
  CONVERSATIONS: "conversations",
  LEADS: "leads",
  APPOINTMENTS: "appointments",
  KNOWLEDGE_BASE: "knowledge_base",
  SETTINGS: "settings",
};

/**
 * Safe Firebase Service for Demo/Portfolio mode
 * Automatically falls back to mock data if Firestore is not available.
 */
export const firebaseService = {
  async getById(collectionName: string, id: string) {
    if (!db) return this.getMockData(collectionName, id);
    
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : this.getMockData(collectionName, id);
    } catch (err) {
      return this.getMockData(collectionName, id);
    }
  },

  async update(collectionName: string, id: string, data: any) {
    if (!db) {
      console.log(`[MOCK DB] Updating ${collectionName}/${id}`, data);
      return;
    }
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
  },

  async add(collectionName: string, data: any) {
    if (!db) {
      console.log(`[MOCK DB] Adding to ${collectionName}`, data);
      return `mock_${Date.now()}`;
    }
    const colRef = collection(db, collectionName);
    const docRef = await addDoc(colRef, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  },

  getMockData(collectionName: string, id: string) {
    // Return sensible defaults for demo purposes
    if (collectionName === COLLECTIONS.SETTINGS) {
      return {
        businessName: "Nuvora AI Demo",
        aiPersonality: "Asistente inteligente de élite, profesional y sofisticado",
        tone: "professional",
        faqs: [
          { question: "¿Cuáles son sus horarios?", answer: "Atendemos de 9am a 6pm, de Lunes a Viernes." },
          { question: "¿Dónde están ubicados?", answer: "Nuestras oficinas centrales están en el Distrito Tecnológico." }
        ]
      };
    }
    return null;
  }
};
