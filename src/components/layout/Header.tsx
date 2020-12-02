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
import { lighten, rgba } from 'polished';
import { Url } from '../../constants';
import { colors, typography } from '../../styles';
import { FrancesKornbluthSvg } from '../svg';

// WIP: style
export const Header: React.FC = () => {
  const [collapseIsOpen, setCollapseIsOpen] = useState<boolean>(false);
  const toggleCollapse = (): void => setCollapseIsOpen(!collapseIsOpen);

  return (
    <Element>
      <Navbar expand="md">
        <div className="d-flex justify-content-between w-100">
          <NavbarBrand
            tag={Link}
            to={Url.HomePage}
            aria-label="Frances Kornbluth"
            className="my-auto p-0"
          >
            <BrandSvgWrapper>
              <FrancesKornbluthSvg fill={colors.gray} maxWidth={286} />
            </BrandSvgWrapper>
          </NavbarBrand>
          <NavbarToggler onClick={toggleCollapse} />
        </div>
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
                <DropdownItem>Available Art</DropdownItem>
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
    </Element>
  );
};

const Element = styled.header`
  background: ${colors.white};
  border-bottom: 1px solid ${colors.lightGray};
  font-family: ${typography.default};

  .nav-link {
    color: ${colors.gray};

    &:after {
      color: ${colors.lightGray};
    }

    &:focus,
    &:hover {
      color: ${colors.darkGray};

      &:after {
        color: ${colors.gray};
      }
    }
  }

  .dropdown-item {
    color: ${colors.darkGray};

    &:focus,
    &:hover {
      background-color: ${lighten(0.12, colors.lightRed)};
    }
  }

  .navbar-toggler {
    border-color: ${colors.lightGray};
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='${rgba(
      colors.lightGray,
      1
    )}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }
`;

const BrandSvgWrapper = styled.div`
  svg {
    filter: drop-shadow(2px 2px 1px ${rgba(colors.lightRed, 0.24)});
  }
`;

const DropdownItemNavLink = styled(DropdownItem).attrs({ tag: NavLink })``;
