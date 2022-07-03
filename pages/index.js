import { Header, Hero, Slider } from "../components";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useState } from "react";
import { firebaseApp } from "../firebase";
export default function Home() {
  const auth = getAuth(firebaseApp);
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <div>
      <Header loggedInUser={user} />
      {!user ? (
        <Hero />
      ) : (
        <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Slider />
        </main>
      )}
    </div>
  );
}
