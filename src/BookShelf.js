import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

export default function BookShelf(props) {
	const { books, updateBookLists, shelfTitle } = props
	return (
		<div className='bookshelf'>
			<h2 className='bookshelf-title'>{shelfTitle}</h2>
			<div className='bookshelf-books'>
				<ol className='books-grid'>
					{books &&
						Array.isArray(books) &&
						books.map(book => (
							<Book
								key={book.id}
								book={book}
								updateBookLists={updateBookLists}
								shelfValue={book.shelf}
							/>
						))}
				</ol>
			</div>
		</div>
	)
}

BookShelf.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object),
	updateBookLists: PropTypes.func,
	shelfTitle: PropTypes.string,
}
