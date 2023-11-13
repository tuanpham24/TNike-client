import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {children}
        {/* <Outlet /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
