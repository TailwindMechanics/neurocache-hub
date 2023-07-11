import { Dropdown, Navbar } from "flowbite-react";
import type { FC } from "react";

const HeaderWithSubNavbar: FC = function () {
  return (
    <header>
      <Navbar>
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
        <div className="flex items-center">
          <a
            href="tel:5541251234"
            className="mr-6 hidden text-sm font-medium text-gray-900 hover:underline dark:text-white sm:inline"
          >
            (555) 412-1234
          </a>
          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 sm:mr-6"
          >
            Contact us
          </a>
          <a
            href="#"
            className="hidden text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 sm:inline"
          >
            Login
          </a>
        </div>
      </Navbar>
      <Navbar className="!bg-gray-50">
        <Navbar.Collapse>
          <Navbar.Link active href="#">
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
          <Navbar.Link href="#">Team</Navbar.Link>
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Marketplace</Navbar.Link>
          <Navbar.Link href="#">Resources</Navbar.Link>
          <Navbar.Link href="#">Forum</Navbar.Link>
          <Navbar.Link href="#">Support</Navbar.Link>
        </Navbar.Collapse>
        <div className="flex items-center gap-5 md:hidden">
          <a href="#" className="hover:underline focus:underline">
            Home
          </a>
          <a href="#" className="hover:underline focus:underline">
            Company
          </a>
          <a href="#" className="hover:underline focus:underline">
            Team
          </a>
          <a href="#" className="hover:underline focus:underline">
            Features
          </a>
          <Dropdown arrowIcon={false} color="none" label="...">
            <Dropdown.Item>Marketplace</Dropdown.Item>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Resources</Dropdown.Item>
            <Dropdown.Item>Forum</Dropdown.Item>
            <Dropdown.Item>Support</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
    </header>
  );
};

export default HeaderWithSubNavbar;
