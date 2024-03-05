import {Component} from 'react'
import {
  MainCont,
  LeftCont,
  RightCont,
  Label,
  Input,
  CustomButton,
  CustomText,
  MainHeading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontsize: fontSizesOptionsList[0].optionId,
    status: false,
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTop = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottom = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeSelect = event => {
    // const {fontsize} = this.state
    // console.log(fontsize)
    this.setState({fontsize: event.target.value})
    //  console.log(event.target.value)
  }

  onClickButton = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {imageUrl, topText, bottomText, fontsize, status} = this.state

    return (
      <MainCont data-testid="meme">
        <LeftCont>
          <MainHeading>Meme Generator</MainHeading>
          <Label htmlFor="url">Image URL</Label>
          <Input
            onChange={this.onChangeImageUrl}
            id="url"
            type="text"
            value={imageUrl}
            placeholder="Enter the Image Url"
          />
          <Label htmlFor="top">Top Text</Label>
          <Input
            id="top"
            onChange={this.onChangeTop}
            type="text"
            value={topText}
            placeholder="Enter the Top Text"
          />
          <Label htmlFor="bottom">Bottom Text</Label>
          <Input
            placeholder="Enter the Bottom Text"
            id="bottom"
            value={bottomText}
            onChange={this.onChangeBottom}
            type="text"
          />
          <Label htmlFor="fontsize">Font Size</Label>
          <select id="fontsize" value={fontsize} onChange={this.onChangeSelect}>
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </select>
          <CustomButton type="button" onClick={this.onClickButton}>
            Generate
          </CustomButton>
        </LeftCont>
        {status && (
          <RightCont imageUrl={imageUrl} data-testid="meme">
            <CustomText fontSize={fontsize}>{topText}</CustomText>
            <CustomText fontSize={fontsize}>{bottomText}</CustomText>
          </RightCont>
        )}
      </MainCont>
    )
  }
}

export default MemeGenerator
