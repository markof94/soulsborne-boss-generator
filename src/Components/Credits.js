import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    bottom: 32px;
    left: 32px;
    font-size: 16px;
    color: white;
    font-family: EBGaramond;
    
    text-shadow: 0 0 2px rgba(0, 0, 0, 1);

    transition: all 0.1s ease;

    a{
        &:link{
            color: rgba(255, 255, 255, 0.87);
        }

        &:visited{
            color: rgba(255, 255, 255, 0.87);
        }
    }
`;

const Email = styled.span`
    color: rgba(255, 255, 255, 0.87);
    text-decoration: underline;
`;

class Credits extends React.PureComponent {
    render() {
        return (
            <Container>
                <div>
                    {`Send word suggestions to `}
                    <Email>
                        {`markofajler@gmail.com`}
                    </Email>
                </div>



                <div>
                    <a href="https://github.com/markof94/soulsborne-boss-generator">{`Source code`}</a>
                </div>
            </Container>
        )
    }
}

export default Credits;