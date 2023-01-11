import styled from 'styled-components'

const Text = styled.p`
  color: ${({ color }) => color || '#999'};
  font-size: ${({ fontSize }) => fontSize || 16};
`

export default Text
