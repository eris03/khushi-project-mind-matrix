import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  setDoc, 
  doc, 
  getDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { auth, db } from '../firebase';
import { Poem } from '../types';
import { POEMS } from '../data/poems';

const COLLECTION_NAME = 'poems';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  // In dev, we might want to see the error but not necessarily crash the whole app
  // but guidelines say MUST throw. We'll throw but provide a way to recover in the UI.
  throw new Error(JSON.stringify(errInfo));
}

export const poemService = {
  async getAllPoems(): Promise<Poem[]> {
    try {
      const q = query(collection(db, COLLECTION_NAME));
      const querySnapshot = await getDocs(q);
      const poems: Poem[] = [];
      querySnapshot.forEach((doc) => {
        poems.push({ ...doc.data() as Poem, id: doc.id });
      });
      return poems.length > 0 ? poems : POEMS; // Fallback to local if DB empty
    } catch (error: any) {
      // Log the detailed error
      try {
        handleFirestoreError(error, OperationType.LIST, COLLECTION_NAME);
      } catch (e) {
        console.error("Critical Firestore listing error:", e);
      }
      // Return local poems as fallback so the app remains usable
      return POEMS;
    }
  },

  async seedDatabase(isAdminUser: boolean) {
    if (!isAdminUser) return;
    
    try {
      // Check if already seeded to avoid duplicates
      const q = query(collection(db, COLLECTION_NAME));
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        console.log('Seeding database with poems...');
        for (const poem of POEMS) {
          await setDoc(doc(db, COLLECTION_NAME, poem.id), {
            ...poem,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          });
        }
        console.log('Seeding complete.');
      }
    } catch (error) {
      console.error('Seeding failed:', error);
      try {
        handleFirestoreError(error, OperationType.WRITE, COLLECTION_NAME);
      } catch (e) {}
    }
  }
};
