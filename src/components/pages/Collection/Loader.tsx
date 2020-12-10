import { LoaderSvg } from '../../svg';
import { colors } from '../../../styles';
import { styled } from '../shared';

const Loader = styled(LoaderSvg).attrs({
  fill: colors.lightRed,
})`
  margin: 0 auto;
`;

export default Loader;
