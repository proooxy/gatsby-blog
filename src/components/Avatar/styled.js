import styled from "styled-components";
import Img from "gatsby-image";
import media from "styled-media-query"

export const AvatarWrapper = styled(Img) `
border-radius: 50%;
height:3.75rem;
margin:auto;
width:3.75rem;

${media.lessThan("large")`
    height: 1.875rem;
    width: 1.875rem;
  `}
`