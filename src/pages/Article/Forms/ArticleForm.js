import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TextField, TextAreaField, CheckboxField, TagsField } from 'components'

export class ArticleForm extends PureComponent {
    static propTypes = {}

    state = {}

    handleFieldChange = (value, key) => {}

    render() {
        const {} = this.props

        return (
            <form>
                <TextField label="Title:" value="" id="title" name="title" onChange={() => null} />
                <TextField label="Author:" value="" id="author" name="author" onChange={() => null} />
                <TextAreaField label="Content:" value="" id="content" name="content" onChange={() => null} />
                <CheckboxField label="Is published?" value={false} id="content" name="content" onChange={() => null} />
                <TagsField label="Tags:" value="" id="tags" name="tags" tags={['eee']} onRemove={() => null} onChange={() => null} />
            </form>
        )
    }
}
