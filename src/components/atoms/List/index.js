import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const List = styled.ul`
  font-family: ${font('primary')};
  margin: 1rem 0;
  padding-left: 1.6rem;
  line-height: 1.7rem;
  color: ${palette({ grayscale: 0 }, 1)};
`

List.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  children: PropTypes.any,
}

List.defaultProps = {
  palette: 'grayscale',
}

export default List
