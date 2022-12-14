import { FeedbackInnStyle, FeedbackIconstyle } from "./styles/coinpage.styled";

const FeedbackInnerComp = ({ icon, text }) => {
    return(
        <FeedbackInnStyle>
            <FeedbackIconstyle>{icon}</FeedbackIconstyle>
            <div>{text}</div>
        </FeedbackInnStyle>
    )
}

export default FeedbackInnerComp;