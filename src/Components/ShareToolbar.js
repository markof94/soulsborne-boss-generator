
import React from 'react'
import styled from 'styled-components'
import {
    FacebookShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
} from "react-share";

import {
    FacebookIcon,
    TelegramIcon,
    RedditIcon,
    TwitterIcon
} from "react-share";

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 32px;
`;

const IconWrapper = styled.div`
        margin: 0 6px;
`;

class Checkbox extends React.Component {
    render() {
        const iconSize = 48;

        const generatedName = this.props.generatedName;
        const url = "https://markof94.github.io/soulsborne-boss-generator/";

        return (
            <Container>
                <IconWrapper>
                    <FacebookShareButton
                        url={url}
                        quote={generatedName}
                    >
                        <FacebookIcon
                            size={iconSize}
                            round={true}
                        />
                    </FacebookShareButton>
                </IconWrapper>
                <IconWrapper>
                    <TwitterShareButton
                        url={url}
                        title={generatedName}
                        hashtags={["darksouls", "boss", "soulsborne", "generator"]}
                    >
                        <TwitterIcon
                            size={iconSize}
                            round={true}
                        />
                    </TwitterShareButton>
                </IconWrapper>
                <IconWrapper>
                    <RedditShareButton
                        url={url}
                        title={generatedName}
                    >
                        <RedditIcon
                            size={iconSize}
                            round={true}
                        />
                    </RedditShareButton>
                </IconWrapper>
                <IconWrapper>
                    <TelegramShareButton
                        url={url}
                        title={generatedName}
                    >
                        <TelegramIcon
                            size={iconSize}
                            round={true}
                        />
                    </TelegramShareButton>
                </IconWrapper>

            </Container>
        )
    }
}

export default Checkbox;