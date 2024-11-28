import { useState } from 'react';
import { TimesSvg } from 'components';
import { ExternalLink, ExternalUrl } from 'router';
import {
  colors,
  focusOutlineCSS,
  getRems,
  media,
  unstyledButtonCSS,
} from 'styles';
import { styled, Paragraph } from '../shared';

const AvailableWorksBanner = () => {
  const [didDismiss, setDidDismiss] = useState<boolean>(false);

  if (didDismiss) return null;

  return (
    <Wrapper>
      <Paragraph className="fs-6 m-0">
        <span>For available works contact:</span>{' '}
        <ExternalLink href={ExternalUrl.JKenneth}>
          J. Kenneth Fine Art
        </ExternalLink>
      </Paragraph>
      <Dismiss onClick={() => setDidDismiss(true)} />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  align-items: center;
  background-color: #faf4f1; // shade of colors.lightRed
  border: 1px solid ${colors.lightRed};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
  padding: 8px;
  position: relative;

  p {
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    text-align: center;

    ${media.md`
      flex-direction: row;
      gap: 6px;
    `}
  }
`;

const DismissIcon = styled(TimesSvg)`
  height: ${getRems(20)};
`;

const Dismiss = styled.button.attrs({
  'aria-label': 'Dismiss banner',
  children: <DismissIcon />,
  title: 'Dismiss banner',
})`
  ${unstyledButtonCSS}
  color: ${colors.lightGray};
  position: absolute;
  right: 16px;

  &:hover,
  &:focus {
    color: ${colors.darkGray};
  }

  &:focus {
    ${focusOutlineCSS}
  }
`;

export default AvailableWorksBanner;
