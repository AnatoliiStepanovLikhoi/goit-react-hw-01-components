import styled from "@emotion/styled";

export const Profile = styled.div`
  width: 300px;
  height: 420px;
  overflow: hidden;
  border: 1px solid grey;
  border-radius: 5px;

  font-size: ${props => props.theme.fontsSizes.s}px;

  overflow: hidden;
`;

export const Description = styled.div`
height: 300px;
padding-top: 50px;
margin-bottom: 30px;

display: flex;
align-items: center;
flex-direction: column;
gap: 5px;

background-color: ${props => props.theme.colors.white}
`;

export const Avatar = styled.img`
height: 140px;
width: 140px;

margin-bottom: 30px;

border-radius: 50%;
border: 1px solid ${props => props.theme.colors.grey}
`

export const UserName = styled.p`
font-size:  ${props => props.theme.fontsSizes.l}px;
font-weight: 700;
`

export const UserTag = styled.p`
color: ${props => props.theme.colors.grey};
font-weight: 500;
`

export const UserLocation = styled.p`
color: ${props => props.theme.colors.grey};
font-weight: 500;
`