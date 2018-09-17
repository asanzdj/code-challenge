import React, { PureComponent } from 'react'
import { string, func, array } from 'prop-types'
import styled from 'styled-components'

import { Label } from './Label'
import { TextField } from './TextField'
import { Tag, IconButton } from 'components'

const StyledTagsInputWrapper = styled.div`
    ${props => props.theme.mixins.flexCenterStart};
`
const StyledTagsWrapper = styled.div`
    ${props => props.theme.mixins.flexCenterStart};
`

export class TagsField extends PureComponent {
    static propTypes = {
        label: string,
        onAddTag: func.isRequired,
        onRemove: func.isRequired,
        tags: array,
    }

    state = {
        value: '',
    }

    handleInputChange = e => {
        e.preventDefault()
        this.setState({ value: e.target.value })
    }

    handleAdd = e => {
        e.preventDefault()
        this.props.onAddTag(this.state.value)
        this.setState({ value: '' })
    }

    render() {
        const { label, tags, onRemove } = this.props
        const { value } = this.state

        return (
            <div>
                {label && <Label>{label}</Label>}
                <StyledTagsInputWrapper>
                    <TextField value={value} onChange={this.handleInputChange} name="tag" id="tag" />
                    <IconButton height="3rem" width="2rem" marginLeft="1rem" onClick={this.handleAdd}>
                        add
                    </IconButton>
                </StyledTagsInputWrapper>

                <StyledTagsWrapper>{tags && tags.map((tag, index) => <Tag key={index} removable text={tag} onRemove={onRemove} />)}</StyledTagsWrapper>
            </div>
        )
    }
}
