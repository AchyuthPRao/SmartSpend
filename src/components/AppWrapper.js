import { auth } from "../config/firebase-config";
import { signOut } from "firebase/auth";

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const AppWrapper = ({ children, isAuth, setIsAuth, setIsInChat }) => {
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  };

  return (
    <div className="center">
      <div className="app-header">
        <h1> P2P Discussion Room</h1>
      </div>

      <div className="app-container">{children}</div>
      {isAuth && (
        <div className="sign-out d-grid mx-auto">
          <button className="butin" onClick={signUserOut}> Sign Out</button>
        </div>
      )}
    </div>
  );
};