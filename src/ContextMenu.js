import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

export default function ContextMenu(props) {
	const { shelfValue } = props

	const onContextMenuSelect = ({ target: { value } }) => {
		const { book, updateBookLists } = props
		BooksAPI.update(book, value).then(() => {
			updateBookLists && updateBookLists()
		})
	}
	return (
		<div className='book-shelf-changer'>
			<select onChange={e => onContextMenuSelect(e)} value={shelfValue}>
				<option value='move' disabled>
					Move to...
				</option>
				<option value='currentlyReading'>Currently Reading</option>
				<option value='wantToRead'>Want to Read</option>
				<option value='read'>Read</option>
				<option value='none'>None</option>
			</select>
		</div>
	)
}

ContextMenu.propTypes = {
	book: PropTypes.object,
	updateBookLists: PropTypes.func,
	shelfValue: PropTypes.string,
}
