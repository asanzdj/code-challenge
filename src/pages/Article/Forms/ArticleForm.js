import React, { PureComponent } from 'react'
import { string, array, bool, shape } from 'prop-types'
import styled from 'styled-components'
import { filter } from 'lodash'

import { TextField, TextAreaField, CheckboxField, TagsField } from 'components'
import { Button } from '../../../components/Button/Button'

const StyledFormWrapper = styled.div`
    width: 100%;
`

export class ArticleForm extends PureComponent {
    static propTypes = {
        article: shape({
            author: string,
            content: string,
            published: bool,
            tags: array,
            title: string,
        }),
    }

    state = {
        author: '',
        content: '',
        published: false,
        tags: [],
        title: '',
    }

    componentWillReceiveProps({ article }) {
        if (article) {
            this.setState({ ...article })
        }
    }

    handleFieldChange = (value, key) => {
        this.setState({ [key]: value })
    }

    handleAddTag = tag => {
        this.setState({ tags: [...this.state.tags, tag] })
    }

    handleRemoveTag = tag => {
        const newTags = filter(this.state.tags, t => t !== tag)
        this.setState({ tags: newTags })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    render() {
        const { title, author, content, published, tags } = this.state

        return (
            <StyledFormWrapper className="flex justify-content-center">
                <form onSubmit={this.handleSubmit}>
                    <TextField label="Title:" value={title} id="title" name="title" onChange={e => this.handleFieldChange(e.target.value, 'title')} />
                    <TextField label="Author:" value={author} id="author" name="author" onChange={e => this.handleFieldChange(e.target.value, 'author')} />
                    <TextAreaField label="Content:" value={content} id="content" name="content" onChange={e => this.handleFieldChange(e.target.value, 'content')} />
                    <CheckboxField label="Is published?" value={published} id="published" name="published" onChange={() => this.handleFieldChange(!published, 'published')} />
                    <TagsField label="Tags:" id="tags" name="tags" tags={tags} onRemove={this.handleRemoveTag} onAddTag={this.handleAddTag} />

                    <div className="flex justify-content-end">
                        <Button type="submit" color="secondary">
                            Send
                        </Button>
                    </div>
                </form>
            </StyledFormWrapper>
        )
    }
}
