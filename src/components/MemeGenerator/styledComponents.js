// Style your components here
import styled from 'styled-components'

export const MainCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 30px;
  padding: 50px;
`
export const LeftCont = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${props => props.imageUrl});
  width: 50%;
  height: 40%;
  align-items: center;
  margin-left: 10px;
  background-size: cover;
`
export const CustomText = styled.p`
  font-size: ${props => props.fontSize}px;
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
  color: black;
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
