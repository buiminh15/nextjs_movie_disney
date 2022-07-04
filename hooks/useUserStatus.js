import React, { useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { firebaseApp } from "../firebase";
import { useAppContext } from "../context/state";

function useUserStatus() {
  const { setUser } = useAppContext();
  const auth = getAuth(firebaseApp);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
}

export default useUserStatus;
