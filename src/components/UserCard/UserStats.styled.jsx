import styled from "@emotion/styled";

export const Stats = styled.ul`
height: 90px;

display:flex;
`

export const StatsLabel = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: 100px;

  background-color: ${props => props.theme.colors.bgGrey};
  outline: 1px solid ${props => props.theme.colors.grey};
`
export const StatsDesc = styled.span`
color: ${props => props.theme.colors.grey};
font-weight: 500;
`
export const StatsQuantity = styled.span`
color: ${props => props.theme.colors.black};
font-weight: 700;
`
