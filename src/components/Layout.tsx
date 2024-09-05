import { ReactNode } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { NextIntlClientProvider } from "next-intl";
import Footer from "./Global/Footer";
import MainNavbar from "./Global/Navbar";

type Props = {
  children: ReactNode;
  locale: string;
  messages: any;
};
export default function Layout({ children, locale, messages }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ChakraProvider>
        <div className="flex flex-col w-full min-h-screen">
          {/* Navbar at the top */}

          <MainNavbar />

          {/* Main content */}
          <div className="flex-grow  pt-20">{children}</div>

          {/* Footer at the bottom */}
          <Footer />
        </div>
      </ChakraProvider>
    </NextIntlClientProvider>
  );
}
