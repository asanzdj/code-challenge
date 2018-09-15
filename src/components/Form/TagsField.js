import React, { PureComponent } from 'react'
import { string, func, array } from 'prop-types'

import { Label } from './Label'
import { TextField } from './TextField'
import { Tag, IconButton } from 'components'

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

    handleAddTag = () => {
        this.props.onAddTag(this.state.value)
        this.setState({ value: '' })
    }

    render() {
        const { label, tags, onRemove, ...otherProps } = this.props
        const { value } = this.state

        return (
            <div>
                {label && <Label>{label}</Label>}
                <div className="flex align-items-center">
                    <TextField {...otherProps} value={value} onChange={e => this.handleInputChange(e)} />
                    <IconButton height="3rem" width="2rem" marginLeft="1rem" onClick={this.handleAddTag}>
                        add
                    </IconButton>
                </div>

                <div className="flex justify-content-start">{tags && tags.map((tag, index) => <Tag key={index} removable text={tag} onRemove={onRemove} />)}</div>
            </div>
        )
    }
}
