// main.tsx or index.tsx

import { RouterProvider } from "react-router-dom";
import router from "./router/router";
// import { AuthProvider } from "./componenets/AuthContext";

  
     
     const App = () => {
       return (
     <RouterProvider router={router} />
       )
     }
     
     export default App
     
    

