import React, { PureComponent } from 'react'
import { string, func, array } from 'prop-types'

import { Label } from './Label'
import { TextField } from './TextField'
import { Tag } from 'components'

export class TagsField extends PureComponent {
    static propTypes = {
        label: string,
        onRemove: func.isRequired,
        tags: array,
    }

    render() {
        const { label, tags, onRemove, ...otherProps } = this.props

        return (
            <div>
                {label && <Label>{label}</Label>}
                <TextField {...otherProps} />
                <div className="flex justify-content-between">{tags && tags.map((tag, index) => <Tag key={index} removable text={tag} onRemove={onRemove} />)}</div>
            </div>
        )
    }
}
