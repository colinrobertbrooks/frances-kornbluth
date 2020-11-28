import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import styled from 'styled-components';
import { Url } from '../../constants';

// TODO: style
export const Header: React.FC = () => {
  const [collapseIsOpen, setCollapseIsOpen] = useState<boolean>(false);
  const toggleCollapse = (): void => setCollapseIsOpen(!collapseIsOpen);

  return (
    <header>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to={Url.HomePage}>
          Frances Kornbluth
        </NavbarBrand>
        <NavbarToggler onClick={toggleCollapse} />
        <Collapse isOpen={collapseIsOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Artist
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItemNavLink to={Url.BiographyPage}>
                  Biography
                </DropdownItemNavLink>
                <DropdownItemNavLink to={Url.TimelinePage}>
                  Timeline
                </DropdownItemNavLink>
                <DropdownItemNavLink to={Url.StatementsPage}>
                  Statements
                </DropdownItemNavLink>
                <DropdownItemNavLink to={Url.QuotesPage}>
                  Quotes
                </DropdownItemNavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Artwork
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Available Artwork</DropdownItem>
                <DropdownItem divider />
                <DropdownItemNavLink to={Url.CollectionPage}>
                  Collection
                </DropdownItemNavLink>
                <DropdownItemNavLink to={Url.ReviewsPage}>
                  Reviews
                </DropdownItemNavLink>
                <DropdownItemNavLink to={Url.BooksPage}>
                  Books
                </DropdownItemNavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

const DropdownItemNavLink = styled(DropdownItem).attrs({ tag: NavLink })``;
