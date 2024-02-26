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
    imageurl: '',
    toptext: '',
    bottomtext: '',
    fontsize: '',
    status: false,
  }

  onChangeImageUrl = event => {
    this.setState({imageurl: event.target.value})
  }

  onChangeTop = event => {
    this.setState({toptext: event.target.value})
  }

  onChangeBottom = event => {
    this.setState({bottomtext: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({fontsize: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {imageurl, toptext, bottomtext, fontsize, status} = this.state

    return (
      <MainCont data-testid="meme">
        <LeftCont onSubmit={this.onClickButton}>
          <MainHeading>Meme Generator</MainHeading>
          <Label htmlFor="url">Image URL</Label>
          <Input
            onChange={this.onChangeImageUrl}
            id="url"
            type="text"
            value={imageurl}
            placeholder="Enter the Image Url"
          />
          <Label htmlFor="top">Top Text</Label>
          <Input
            id="top"
            onChange={this.onChangeTop}
            type="text"
            value={toptext}
            placeholder="Enter the Top Text"
          />
          <Label htmlFor="bottom">Bottom Text</Label>
          <Input
            placeholder="Enter the Bottom Text"
            id="bottom"
            value={bottomtext}
            onChange={this.onChangeBottom}
            type="text"
          />
          <Label htmlFor="fontsize">Font Size</Label>
          <select id="fontsize" value={fontsize} onChange={this.onChangeSelect}>
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId} value={each.displayText}>
                {each.displayText}
              </option>
            ))}
          </select>
          <CustomButton
            type="submit"
            data-testid="meme"
            onClick={this.onClickButton}
          >
            Generate
          </CustomButton>
        </LeftCont>
        {status && (
          <RightCont imageUrl={imageurl}>
            <CustomText fontSize={fontsize}>{toptext}</CustomText>
            <CustomText fontSize={fontsize}>{bottomtext}</CustomText>
          </RightCont>
        )}
      </MainCont>
    )
  }
}

export default MemeGenerator
