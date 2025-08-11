import { useLayoutEffect } from "react"
import { useLocation, Outlet } from "react-router-dom";
import { Footer } from "./footer"
import { Header } from "./header"

export const Layout = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}