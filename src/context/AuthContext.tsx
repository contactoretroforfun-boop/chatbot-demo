"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  onAuthStateChanged, 
  User,
  signOut as firebaseSignOut
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter, usePathname } from "next/navigation";

interface AuthContextType {
  user: any | null;
  userData: any | null;
  loading: boolean;
  logout: () => Promise<void>;
  isDemoMode: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userData: null,
  loading: true,
  logout: async () => {},
  isDemoMode: false,
});

// Mock user for Demo Mode
const MOCK_USER = {
  uid: "demo-user-123",
  email: "demo@nuvora.ai",
  displayName: "Nuvora Admin",
};

const MOCK_DATA = {
  name: "Nuvora Admin",
  businessName: "Nuvora AI Demo Business",
  role: "admin",
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any | null>(MOCK_USER); // Default to mock user
  const [userData, setUserData] = useState<any | null>(MOCK_DATA);
  const [loading, setLoading] = useState(false); // No loading state for demo
  const router = useRouter();
  const pathname = usePathname();

  const isFirebaseActive = !!auth;

  useEffect(() => {
    if (!isFirebaseActive) {
      // Demo Mode: We stay as mock user
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        } catch (err) {
          console.error("Firestore Error:", err);
          setUserData(MOCK_DATA);
        }
      } else {
        // In demo mode, we don't force logout or redirect
        setUser(MOCK_USER);
        setUserData(MOCK_DATA);
      }
    });

    return () => unsubscribe();
  }, [isFirebaseActive]);

  const logout = async () => {
    if (isFirebaseActive) {
      try {
        await firebaseSignOut(auth);
      } catch (error) {
        console.error("Error signing out:", error);
      }
    }
    // For demo, logout just refreshes the state but doesn't block
    setUser(MOCK_USER);
    setUserData(MOCK_DATA);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, userData, loading: false, logout, isDemoMode: !isFirebaseActive }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
