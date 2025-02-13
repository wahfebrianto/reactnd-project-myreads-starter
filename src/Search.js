import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

export default function Search(props) {
	const [books, setBooks] = useState([])
	const { bookLists, updateBookLists } = props
	const onSearch = ({ target: { value } }) => {
		value
			? BooksAPI.search(value).then(books => {
					setBooks(books)
			  })
			: setBooks([])
	}
	return (
		<div className='search-books'>
			<div className='search-books-bar'>
				<Link to='/' className='close-search'>
					Close
				</Link>
				<div className='search-books-input-wrapper'>
					<input
						type='text'
						placeholder='Search by title or author'
						onChange={e => onSearch(e)}
					/>
				</div>
			</div>
			<div className='search-books-results'>
				<ol className='books-grid'>
					{books &&
						Array.isArray(books) &&
						books.map(book => {
							const sameBookInShelf = bookLists.find(
								shelfBook => shelfBook.id === book.id,
							)
							const shelfValue =
								(sameBookInShelf && sameBookInShelf.shelf) || 'none'
							return (
								<Book
									key={book.id}
									book={book}
									updateBookLists={updateBookLists}
									shelfValue={shelfValue}
								/>
							)
						})}
				</ol>
			</div>
		</div>
	)
}

Search.propTypes = {
	bookLists: PropTypes.arrayOf(PropTypes.object),
	updateBookLists: PropTypes.func,
}
