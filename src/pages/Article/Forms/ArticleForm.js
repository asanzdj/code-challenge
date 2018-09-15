import React, { PureComponent } from 'react'
import { string, array, bool, shape } from 'prop-types'
import styled from 'styled-components'
import { filter, omit, isEmpty } from 'lodash'

import { TextField, TextAreaField, CheckboxField, TagsField, Button } from 'components'

const StyledFormWrapper = styled.div`
    width: 100%;

    form {
        min-width: 50rem;
    }
`

const StyledFormTitle = styled.h1`
    text-transform: uppercase;
    letter-spacing: 0.2rem;
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
        formTitle: string,
    }

    state = {
        author: '',
        content: '',
        published: false,
        tags: [],
        title: '',
        errors: {},
    }

    componentWillReceiveProps({ article }) {
        if (article) {
            this.setState({ ...article })
        }
    }

    handleFieldChange = (e, key) => {
        e.preventDefault()

        this.setState({ [key]: e.target.value })
    }

    handleCheckboxChange = () => {
        this.setState({ published: !this.state.published })
    }

    handleAddTag = tag => {
        this.setState({ tags: [...this.state.tags, tag] })
    }

    handleRemoveTag = tag => {
        const newTags = filter(this.state.tags, t => t !== tag)
        this.setState({ tags: newTags })
    }

    validateForm = () => {
        const requiredFields = ['title', 'author', 'content']
        let errors = {}

        /* eslint-disable */
        requiredFields.map(field => {
            if (this.state[field] === '') {
                errors = { ...errors, [field]: 'Required field' }
            }
        })
        /* eslint-enable */
        this.setState({ errors })
        return errors
    }

    cleanErrors = () => {
        this.setState({ errors: {} })
    }

    handleSubmit = e => {
        e.preventDefault()

        const errors = this.validateForm()

        if (isEmpty(errors)) {
            this.props.onSubmit(omit(this.state, 'errors'))
        }
    }

    render() {
        const { title, author, content, published, tags, errors } = this.state
        const { formTitle } = this.props

        return (
            <StyledFormWrapper className="flex justify-content-center flex-wrap">
                {formTitle && <StyledFormTitle className="text-center">{formTitle}</StyledFormTitle>}

                <form>
                    <TextField label="Title:" value={title} id="title" name="title" onChange={e => this.handleFieldChange(e, 'title')} error={errors['title']} />
                    <TextField label="Author:" value={author} id="author" name="author" onChange={e => this.handleFieldChange(e, 'author')} error={errors['author']} />
                    <TextAreaField label="Content:" value={content} id="content" name="content" onChange={e => this.handleFieldChange(e, 'content')} error={errors['content']} />
                    <CheckboxField label="Is published?" value={published} id="published" name="published" onChange={this.handleCheckboxChange} />
                    <TagsField label="Tags:" id="tags" name="tags" tags={tags} onRemove={this.handleRemoveTag} onAddTag={this.handleAddTag} />

                    <div className="flex justify-content-end">
                        <Button color="secondary" onClick={this.handleSubmit}>
                            Send
                        </Button>
                    </div>
                </form>
            </StyledFormWrapper>
        )
    }
}
