import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import HeaderAuth from "./header-auth";
import Link from "next/link";

export default async function Header() {
  return (
    <Navbar className="shadow mb-6">
        <NavbarBrand className="font-bold text-xl">
          <Link href={"/"}>Discuss</Link>
        </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
