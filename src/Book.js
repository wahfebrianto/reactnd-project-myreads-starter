import React from 'react'
import PropTypes from 'prop-types'
import ContextMenu from './ContextMenu'

export default function Book(props) {
	const { book, shelfValue, updateBookLists } = props
	return (
		<li>
			<div className='book'>
				<div className='book-top'>
					<div
						className='book-cover'
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url('${book &&
								book.imageLinks &&
								book.imageLinks.thumbnail}')`,
						}}
					/>
					<ContextMenu
						book={book}
						updateBookLists={updateBookLists}
						shelfValue={shelfValue}
					/>
				</div>
				<div className='book-title'>{book && book.title}</div>
				<div className='book-authors'>
					{book && book.authors && book.authors.join(', ')}
				</div>
			</div>
		</li>
	)
}

Book.propTypes = {
	book: PropTypes.object,
	updateBookLists: PropTypes.func,
	shelfValue: PropTypes.string,
}
