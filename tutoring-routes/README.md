# Schritt 1:

- 1.1 => npm create vite@latest [PACKAGE_NAME]
- 1.2 => cd [PACKAGE_NAME]
- 1.3 => npm i
- 1.4 => code .
- 1.5 => (npm run dev)

- 1.6 => (App.jsx/css und index.css reinigen)

# Schritt 2:

- 2.1 => npm i react-router-dom
- 2.2 => in Main.jsx => `<StrictMode></StrictMode>` ändern zu `<BrowserRouter></BrowserRouter>`

# Schritt 3:

- 3.1 => /src/layout Ordner erstellen
    - 3.1.1 => in /layout/ => Header.jsx, Footer.jsx, Layout.jsx
    - 3.1.2 => in Header.jsx & Footer.jsx & Layout.jsx => `rafce`.
    - 3.1.3 Layout.jsx Inhalt => ```

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

```


