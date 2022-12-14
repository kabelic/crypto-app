import { FeedbackStyle, FeedbackLeft, FeedbackRight } from "./styles/coinpage.styled";
import { TextStyle, Header, SubHeader } from "./styles/Body.styled";
import FeedbackInnerComp from "./FeedbackInnerComp";
import { HiThumbUp, HiThumbDown } from 'react-icons/hi'

const Feedback = () => {
    return(
        <FeedbackStyle>
            <FeedbackLeft>
                <TextStyle margin={0}>
                        <Header weight={400} size={15}>How do you feel about DigitalBits today?</Header>
                        <SubHeader weight={200} size={8}>Vote to see community results</SubHeader>
                </TextStyle>
            </FeedbackLeft>
            <FeedbackRight>
                <FeedbackInnerComp icon={<HiThumbUp/>} text={'Good'}/>
                <FeedbackInnerComp icon={<HiThumbDown/>} text={'Bad'}/>
            </FeedbackRight>
        </FeedbackStyle>
    )
}

export default Feedback;