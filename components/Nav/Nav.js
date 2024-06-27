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
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { CONTENT_ITEM_TYPE } from "@/lib/constants";
import { SocialIcon } from "react-social-icons";

function NavListMenu({ menuItem, setOpenNav }) {
  const { subItems, columns = 1 } = menuItem;

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [columnCount, setColumnCount] = React.useState(columns);

  const renderItems = () => {
    if (!Array.isArray(subItems)) {
      return [];
    }

    return subItems.map((subItem) => {
      const { icon, text, description, path = "/", key } = subItem;

      return (
        <Link
          href={path}
          key={key}
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <MenuItem className='nav-menu-item'>
            {icon && (
              <div className='flex items-center justify-center rounded-lg p-2 '>
                {React.createElement(icon, {
                  strokeWidth: 2,
                  className: "h-6 text-gray-900 w-6 ",
                })}
              </div>
            )}
            <div>
              <Typography
                variant='h6'
                color='blue-gray'
                className='flex items-center text-sm font-bold '
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
      <Link
        href={menuItem.path || "#"}
        onClick={() => {
          setOpenNav(false);
        }}
      >
        <div>
          <Typography as='div' variant='small' color='blue-gray'>
            <ListItem className='font-medium flex items-center gap-2 py-2 pr-4 nav-main-link'>
              {menuItem.text}
            </ListItem>
          </Typography>
        </div>
      </Link>
    );
  }

  let ulClassName = `grid grid-cols-${
    columnCount > 1 ? columnCount : 1
  } gap-y-2 outline-none outline-0`;

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement='bottom'
      >
        <MenuHandler>
          <Typography as='div' variant='small'>
            <ListItem
              ripple={false}
              className=' nav-main-link'
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

        <MenuList className='hidden max-w-screen-xl lg:block'>
          <ul className={ulClassName}>{renderItems(menuItem.subItems)}</ul>
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

function NavList({ menuItems = [], setOpenNav }) {
  return (
    <List className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1'>
      {menuItems.map((menuItem) => {
        return (
          <NavListMenu
            key={menuItem.key}
            menuItem={menuItem}
            setOpenNav={setOpenNav}
          />
        );
      })}

      <LanguageSwitcher style={`text-sm font-medium`} />
    </List>
  );
}

export default function MegaMenuDefault({ menuItems = [], topInfoBar }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className=' max-w-sc px-4 py-2 rounded-md '>
      {topInfoBar && (
        <div className='hidden flex-row justify-end gap-4 text-sm  md:flex'>
          {topInfoBar.contactInfo && Array.isArray(topInfoBar.contactInfo) && (
            <ul className='flex flex-row gap-4'>
              {topInfoBar.contactInfo.map((item, index) => {
                return (
                  <li key={index} className='text-blue-gray-900 text-sm'>
                    {item.text}
                  </li>
                );
              })}
            </ul>
          )}

          {topInfoBar.socialMedia && Array.isArray(topInfoBar.socialMedia) && (
            <ul className='flex flex-row gap-2 ml-0'>
              {topInfoBar.socialMedia.map((item, index) => {
                return <li key={index}>{item.text}</li>;
              })}
            </ul>
          )}
        </div>
      )}

      <div className='flex items-center justify-between text-blue-gray-900'>
        <Link href='/'>
          <Typography
            as='div'
            variant='h6'
            className='mr-4 cursor-pointer py-1.5 lg:ml-2'
          >
            NEXT YMMM
          </Typography>
        </Link>

        <div className='hidden lg:block'>
          <NavList menuItems={menuItems} setOpenNav={setOpenNav} />
        </div>
        <IconButton
          variant='text'
          color='blue-gray'
          className='lg:hidden nav-mobile-icon'
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className='h-6 w-6 ' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6 ' strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList menuItems={menuItems} setOpenNav={setOpenNav} />
      </Collapse>
    </Navbar>
  );
}
