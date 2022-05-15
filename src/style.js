import { Global, css } from '@emotion/react'
import styled from '@emotion/styled';


export const GlobalStyle =()=>(
  <Global
    style={css`
    
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Titillium Web', sans-serif;
      }
    `}
    />
)

export const Container = styled('div')`
    margin-left: 68px;
    display:flex;
`
export const Title = styled('p')`
    font-size:20px;
    font-weight: 400;
    width:200px;
    font-family: 'Titillium Web', sans-serif;
    font-weight: bold;
`
export const Loading = styled('p')`
    font-size:25px;
    margin-left: 68px;
    font-family: 'Noto Serif', sans-serif;
`

export const mediaQuery = {
  laptop: 'screen and (max-width: 1354px)',
  tablet: 'screen and (max-width: 826px)',
}