import { Button, Navbar } from "flowbite-react";
import type { FC } from "react";

const DefaultHeaderNavigation: FC = function () {
  return (
    <header>
      <Navbar fluid>
        <Navbar.Brand href="https://flowbite.com">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-3 md:order-2">
          <Button color="gray" href="#" className="border-0">
            Log in
          </Button>
          <Button color="info" href="#">
            Get started
          </Button>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="md:order-1">
          <Navbar.Link active href="#" className="rounded-lg">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="rounded-lg">
            Company
          </Navbar.Link>
          <Navbar.Link href="#" className="rounded-lg">
            Marketplace
          </Navbar.Link>
          <Navbar.Link href="#" className="rounded-lg">
            Features
          </Navbar.Link>
          <Navbar.Link href="#" className="rounded-lg">
            Team
          </Navbar.Link>
          <Navbar.Link href="#" className="rounded-lg">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default DefaultHeaderNavigation;
