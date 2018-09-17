import React, { PureComponent } from 'react'
import { bool } from 'prop-types'
import styled from 'styled-components'

const StyledSpinnerWrapper = styled.div`
    background: rgba(0, 0, 0, 0.9);
    bottom: 0;
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 50;
    ${props => props.theme.mixins.flexCenterCenter};
`

const StyledSpinner = styled.div`
    margin: 100px auto 0;
    width: 70px;
    text-align: center;
    z-index: 51;
`

const bounceStyles = `
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    background-color: #333;
    border-radius: 100%;
    display: inline-block;
    height: 18px;
    width: 18px;


    @-webkit-keyframes sk-bouncedelay {
        0%,
        80%,
        100% {
            -webkit-transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1);
        }
    }

    @keyframes sk-bouncedelay {
        0%,
        80%,
        100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
`

const StyledBounce = styled.div`
    ${bounceStyles};
`

const StyledBounce1 = styled.div`
    ${bounceStyles};
    animation-delay: -0.32s;
`
const StyledBounce3 = styled.div`
    ${bounceStyles};
    animation-delay: -0.16s;
`

export class Spinner extends PureComponent {
    static propTypes = {
        active: bool,
        expand: bool,
    }
    static defaultProps = {
        active: false,
        expand: true,
    }

    render() {
        const { active } = this.props

        if (!active) return null

        return (
            <StyledSpinnerWrapper>
                <StyledSpinner>
                    <StyledBounce1 />
                    <StyledBounce3 />
                    <StyledBounce />
                </StyledSpinner>
            </StyledSpinnerWrapper>
        )
    }
}
