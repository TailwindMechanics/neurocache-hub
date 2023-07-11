import { Navbar, Button, Dropdown } from "flowbite-react";
import type { FC } from "react";

const HeaderWithDropdownMenu: FC = function () {
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
        <div className="flex items-center gap-1 md:order-2">
          <Button color="none" href="#">
            Log in
          </Button>
          <Button color="info" href="#">
            Sign up
          </Button>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="md:order-1">
          <Navbar.Link href="#" active className="flex h-full items-center">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="flex h-full items-center">
            Company
          </Navbar.Link>
          <Navbar.Link href="#" className="flex h-full items-center">
            Features
          </Navbar.Link>
          <Navbar.Link href="#" className="flex h-full items-center">
            Marketplace
          </Navbar.Link>
          <Navbar.Link href="#">
            <Dropdown color="none" label="Company">
              <Dropdown.Item theme={{ base: "" }}>
                <a
                  href="#"
                  className="flex w-full items-center py-2 px-4 text-gray-500 hover:text-primary-600 dark:hover:text-primary-500"
                >
                  <svg
                    aria-hidden
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Audience
                </a>
              </Dropdown.Item>
              <Dropdown.Item theme={{ base: "" }}>
                <a
                  href="#"
                  className="flex w-full items-center py-2 px-4 text-gray-500 hover:text-primary-600 dark:hover:text-primary-500"
                >
                  <svg
                    aria-hidden
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  Marketing Automation
                </a>
              </Dropdown.Item>
              <Dropdown.Item theme={{ base: "" }}>
                <Dropdown
                  color="none"
                  label={
                    <span className="flex items-center text-gray-500">
                      <svg
                        aria-hidden
                        className="mr-2 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Creative Tools
                    </span>
                  }
                >
                  <Dropdown.Item theme={{ base: "" }}>
                    <a
                      href="#"
                      className="flex w-full items-center py-2 px-4 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Marketing CRM
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item theme={{ base: "" }}>
                    <a
                      href="#"
                      className="flex w-full items-center py-2 px-4 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Sign up forms
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item theme={{ base: "" }}>
                    <a
                      href="#"
                      className="flex w-full items-center py-2 px-4 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Segmentation
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item theme={{ base: "" }}>
                    <a
                      href="#"
                      className="flex w-full items-center py-2 px-4 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Dynamic content
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item theme={{ base: "" }}>
                    <a
                      href="#"
                      className="flex w-full items-center py-2 px-4 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      A/B Testing
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item theme={{ base: "" }}>
                    <a
                      href="#"
                      className="flex w-full items-center py-2 px-4 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Behavioural testing
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item theme={{ base: "" }}>
                    <a
                      href="#"
                      className="flex w-full items-center py-2 px-4 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Integrations
                    </a>
                  </Dropdown.Item>
                </Dropdown>
              </Dropdown.Item>
              <Dropdown.Item theme={{ base: "" }}>
                <a
                  href="#"
                  className="flex w-full items-center py-2 px-4 text-gray-500 hover:text-primary-600 dark:hover:text-primary-500"
                >
                  <svg
                    aria-hidden
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Insights & Analytics
                </a>
              </Dropdown.Item>
              <Dropdown.Item theme={{ base: "" }}>
                <a
                  href="#"
                  className="flex w-full items-center py-2 px-4 text-gray-500 hover:text-primary-600 dark:hover:text-primary-500"
                >
                  <svg
                    aria-hidden
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  Demographics
                </a>
              </Dropdown.Item>
              <Dropdown.Item theme={{ base: "" }}>
                <a
                  href="#"
                  className="flex w-full items-center py-2 px-4 text-gray-500 hover:text-primary-600 dark:hover:text-primary-500"
                >
                  <svg
                    aria-hidden
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Contact Profiles
                </a>
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link href="#" className="flex h-full items-center">
            Team
          </Navbar.Link>
          <Navbar.Link href="#" className="flex h-full items-center">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default HeaderWithDropdownMenu;
