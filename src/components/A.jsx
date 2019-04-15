import PropTypes from 'prop-types';
import styled from 'styled-components';

const A = styled.a`
  text-decoration: ${({ textDecoration }) => textDecoration};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => typeof fontSize === 'string' ? fontSize : `${fontSize}px`};
  font-style: ${({ fontStyle }) => fontStyle};
  color: ${({ Color }) => Color};

  transition: all .25s;
  &:hover {
    opacity: .75;
  }
`;

A.propTypes = {
  children: PropTypes.any,
  textDecoration: PropTypes.string,
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  fontStyle: PropTypes.string,
  Color: PropTypes.string,
};

A.defaultProps = {
  textDecoration: 'none',
  Color: 'inherit',
};

export default A;