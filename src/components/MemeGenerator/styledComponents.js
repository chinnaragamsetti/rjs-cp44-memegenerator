// Style your components here
import styled from 'styled-components'

export const MainCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100hv;
  border: 1px solid red;
  padding: 30px;
`
export const LeftCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${props => props.imageUrl};);
  height: 100%;
  width: 50%;
`
export const CustomText = styled.h1`
  font-size: ${props => props.fontsize};
  color: #ffffff;
`

export const MainHeading = styled.h1`
  font-size: 30px;
  color: blue;
`
export const Label = styled.label`
  font-size: 10px;
  color: lightgrey;
  margin-bottom: 5px;
`
export const Input = styled.input`
  font-size: 10px;
  color: lightgrey;
  margin-bottom: 5px;
`

export const CustomButton = styled.button`
  font-size: 10px;
  color: #ffffff;
  background-color: blue;
  border-radius: 5px;
  width: 30%;
  align-self: center;
  margin-top: 5px;
  cursor: pointer;
`
