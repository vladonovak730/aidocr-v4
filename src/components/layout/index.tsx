import type { FC, PropsWithChildren } from "react"
import { Footer } from "./footer"
import { Header } from "./header"

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}