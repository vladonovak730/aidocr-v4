import { useLayoutEffect, type FC, type PropsWithChildren } from "react"
import { Footer } from "./footer"
import { Header } from "./header"
import { useLocation } from "react-router-dom";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}