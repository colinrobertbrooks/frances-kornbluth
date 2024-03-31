import { SpinnerSvg } from '../../svg';
import { colors } from '../../../styles';
import { styled } from '../shared';

const Loader = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
);

const Wrapper = styled.div.attrs({
  'aria-busy': true,
  'aria-valuetext': 'Loading...',
  role: 'progressbar',
})`
  display: flex;
  justify-content: center;
`;

const Spinner = styled(SpinnerSvg).attrs({
  fill: colors.lightRed,
})``;

export default Loader;
