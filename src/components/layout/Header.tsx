import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { lighten, rgba } from 'polished';
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
import { usePrevious } from '../../hooks';
import {
  Link,
  NavLink,
  useLocation,
  Url,
  artistUrls,
  artworkUrls,
} from '../../router';
import { colors, focusOutlineCSS, getRems, typography } from '../../styles';
import { FrancesKornbluthSvg } from '../svg';
import { SkipToMain } from './skip-to-main';

export const Header = () => {
  // navbar toggler
  const [collapseIsOpen, setCollapseIsOpen] = useState<boolean>(false);
  const toggleCollapse = (): void => setCollapseIsOpen(!collapseIsOpen);

  // dropdown toggles
  const location = useLocation();
  const isArtistUrl = artistUrls.includes(location.pathname as Url);
  const isArtworkUrl = artworkUrls.includes(location.pathname as Url);

  // close collapse on route change
  const previousLocation = usePrevious(location);
  useEffect(() => {
    if (collapseIsOpen && location.pathname !== previousLocation?.pathname) {
      setCollapseIsOpen(false);
    }
  }, [collapseIsOpen, location, previousLocation]);

  return (
    <Element>
      <Navbar expand="md">
        <div className="d-flex justify-content-between w-100">
          <SkipToMain />
          <NavbarBrand
            tag={Link}
            to={Url.HomePage}
            aria-label="Frances Kornbluth"
            className="my-auto p-0"
          >
            <BrandSvgWrapper>
              <FrancesKornbluthSvg fill={colors.darkGray} maxWidth={286} />
            </BrandSvgWrapper>
          </NavbarBrand>
          <NavbarToggler onClick={toggleCollapse} />
        </div>
        <Collapse isOpen={collapseIsOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                nav
                caret
                className={isArtistUrl ? 'active' : undefined}
                style={{ minWidth: '84px' }}
              >
                Artist
              </DropdownToggle>
              <DropdownMenu end>
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
                <DropdownItemNavLink to={Url.VideosPage}>
                  Videos
                </DropdownItemNavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                nav
                caret
                className={isArtworkUrl ? 'active' : undefined}
                style={{ minWidth: '107px' }}
              >
                Artwork
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem tag={Link} to={Url.AvailableArtworkPage}>
                  Available Artwork
                </DropdownItem>
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
  background-color: ${colors.trueWhite};
  border-bottom: 1px solid ${colors.border};
  font-family: ${typography.default};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  * {
    transition: 0.2s;
  }

  .navbar-brand:focus,
  .dropdown-toggle:focus,
  .dropdown-item:focus,
  .navbar-toggler:focus {
    ${focusOutlineCSS}
  }

  .dropdown-toggle {
    color: ${colors.gray};
    letter-spacing: ${getRems(2)};

    &:after {
      color: ${colors.lightGray};
    }

    &:hover,
    &:focus {
      color: ${colors.darkGray};

      &:after {
        color: ${colors.gray};
      }
    }

    &.active {
      color: ${colors.darkGray};
      font-weight: 600;
      text-shadow: 1px 1px ${lighten(0.12, colors.lightRed)};

      &:after {
        color: ${colors.lightRed};
      }

      &:hover,
      &:focus {
        color: ${colors.darkGray};

        &:after {
          color: ${colors.red};
        }
      }
    }
  }

  .dropdown-item {
    color: ${colors.darkGray};
    letter-spacing: ${getRems(1)};

    &:hover,
    &:focus {
      background-color: ${lighten(0.12, colors.lightRed)};
    }

    &.active {
      background-color: ${colors.lightRed};
      font-weight: 600;

      &:hover,
      &:focus {
        background-color: ${lighten(0.03, colors.lightRed)};
      }
    }
  }

  .dropdown-menu {
    border-color: ${colors.border};
  }

  // https://github.com/twbs/bootstrap/issues/33957
  .dropdown-menu-end {
    right: 0;
    left: auto;
  }

  .dropdown-divider {
    border-top-color: ${lighten(0.06, colors.border)};
  }

  .navbar-toggler {
    border-color: ${colors.border};
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='${rgba(
      colors.gray,
      1
    )}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }
`;

const BrandSvgWrapper = styled.div`
  svg {
    filter: drop-shadow(2px 2px 1px ${rgba(colors.lightGray, 0.12)});
  }
`;

const DropdownItemNavLink = styled(DropdownItem).attrs({ tag: NavLink })``;
