"use client";

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useLocale } from "next-intl";

function NavListMenu({ menuItem }) {
  const { subItems, columns = 1 } = menuItem;

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = () => {
    if (!Array.isArray(subItems)) {
      return [];
    }

    return subItems.map((subItem) => {
      const { icon, text, description, path = "/", key } = subItem;

      return (
        <Link href={path} key={key}>
          <MenuItem className='flex items-center gap-3 rounded-lg'>
            {icon && (
              <div className='flex items-center justify-center rounded-lg p-2 '>
                {React.createElement(icon, {
                  strokeWidth: 2,
                  className: "h-6 text-gray-900 w-6",
                })}
              </div>
            )}
            <div>
              <Typography
                variant='h6'
                color='blue-gray'
                className='flex items-center text-sm font-bold'
              >
                {text}
              </Typography>
              <Typography
                variant='paragraph'
                className='text-xs !font-medium text-blue-gray-500'
              >
                {description}
              </Typography>
            </div>
          </MenuItem>
        </Link>
      );
    });
  };

  if (
    !(
      menuItem.subItems &&
      Array.isArray(menuItem.subItems) &&
      menuItem.subItems.length > 0
    )
  ) {
    return (
      <Typography
        as='a'
        href='#'
        variant='small'
        color='blue-gray'
        className='font-medium'
      >
        <ListItem className='flex items-center gap-2 py-2 pr-4'>
          {menuItem.text}
        </ListItem>
      </Typography>
    );
  }

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement='bottom'
      >
        <MenuHandler>
          <Typography as='div' variant='small' className='font-medium'>
            <ListItem
              ripple={false}
              className='flex items-center gap-2 py-2 pr-4 font-medium text-gray-900'
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {menuItem.text}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className='hidden max-w-screen-xl rounded-xl lg:block'>
          <ul
            className={`grid grid-cols-${
              columns ? columns : 1
            } gap-y-2 outline-none outline-0`}
          >
            {renderItems(menuItem.subItems)}
          </ul>
        </MenuList>
      </Menu>
      <div className='block lg:hidden'>
        <Collapse open={isMobileMenuOpen}>
          {renderItems(menuItem.subItems)}
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({ menuItems = [] }) {
  const locale = useLocale();

  return (
    <List className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1'>
      <Typography
        as='a'
        href='/'
        variant='small'
        color='blue-gray'
        className='font-medium'
      >
        <ListItem ripple={false} className='flex items-center gap-2 py-2 pr-4'>
          Home ({locale})
        </ListItem>
      </Typography>
      {menuItems.map((menuItem) => {
        return <NavListMenu key={menuItem.key} menuItem={menuItem} />;
      })}
      {/*
     <Typography
        as='a'
        href='#'
        variant='small'
        color='blue-gray'
        className='font-medium'
      >
        <ListItem className='flex items-center gap-2 py-2 pr-4'>
          Contact Us
        </ListItem>
      </Typography>
    
    
    
    */}
    </List>
  );
}

export default function MegaMenuDefault({ menuItems = [] }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className='mx-auto max-w-screen-2xl max-w-sc px-4 py-2 rounded-md'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography
          as='a'
          href='#'
          variant='h6'
          className='mr-4 cursor-pointer py-1.5 lg:ml-2'
        >
          Material Tailwind
        </Typography>
        <div className='hidden lg:block'>
          <NavList menuItems={menuItems} />
        </div>
        <IconButton
          variant='text'
          color='blue-gray'
          className='lg:hidden'
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className='h-6 w-6' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList menuItems={menuItems} />
      </Collapse>
    </Navbar>
  );
}
