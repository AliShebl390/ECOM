import { createContext, useState } from "react";
export let UserContext = createContext();

export function UserCotextProvider({ children }) {
    let [userToken, setUserToken] = useState(null);
    // console.log(userToken);
    return (
        <UserContext.Provider value={{ userToken, setUserToken }}>
            {children}
        </UserContext.Provider>
    );
}
