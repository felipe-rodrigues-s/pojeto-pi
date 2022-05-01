import { createContext } from "react";


const StorageContext = createContext({
  token: null,
  setToken: () => { },
});

export default StorageContext
