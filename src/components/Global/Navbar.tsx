"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  RepeatIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
import Cookies from "js-cookie";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "next/navigation";
import { Globe, SunIcon } from "lucide-react";
interface Props {
  children: React.ReactNode;
}

const Links = ["Dashboard", "Projects", "Team"];

export default function MainNavbar() {
  const router = useRouter();
  const locale = useLocale();
  const pathName = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  const getDirection = () => {
    Cookies.set("NEXT_LOCALE", locale == "ar" ? "en" : "ar");
    if (pathName == "/ar" || pathName == "/en") {
      return locale == "en" ? "/ar" : "/en";
    }

    return locale == "en"
      ? `/ar/${pathName}`
      : pathName.replace("/ar/", "/en/");
  };

  const switchLang = () => {
    router.push(getDirection());
  };

  return (
    <div className=" fixed  w-full left-0 top-0 z-50" id="mainNavbar">
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link key={link} href={"#"}>
                  {link}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex gap={2} alignItems={"center"}>
            <Button size="sm" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>{" "}
            <Button size="sm" colorScheme="teal" onClick={switchLang}>
              <Globe size={20} />
              {locale == "en" ? " | En" : " | ع"}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link key={link} onClick={onClose} href={"#"}>
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
