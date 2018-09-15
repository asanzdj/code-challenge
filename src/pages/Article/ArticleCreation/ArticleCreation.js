import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ArticleForm } from '../Forms'

export class ArticleCreation extends PureComponent {
    static propTypes = {}

    state = {}

    render() {
        const {} = this.props

        return (
            <div>
                <ArticleForm />
            </div>
        )
    }
}
