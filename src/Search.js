import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component{
  	state = {
     	books: [] 
    }
	
	onSearch = ({target: {value}}) => {
     	value ? BooksAPI.search(value).then((books: data) => {
          	this.setState({books})
        }) : this.setState({books: []})
    }

  	render(){
      	const { bookLists, updateBookLists } = this.props
		const { books } = this.state
  		return(
      		<div className="search-books">
      			<div className="search-books-bar">
          			<Link to='/' className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" onChange={(e) => this.onSearch(e)}/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
          				{books && Array.isArray(books) && books.map((book) => {
                          	const sameBookInShelf = bookLists.find(shelfBook => shelfBook.id === book.id)
                          	const shelfValue = (sameBookInShelf && sameBookInShelf.shelf) || 'none'
          					return <Book key={book.id} book={book} updateBookLists={updateBookLists} shelfValue={shelfValue}/>
        				})}
          			</ol>
				</div>
			</div>
		)
	}
}

Search.propTypes = {
  	bookLists: PropTypes.arrayOf(PropTypes.object),
  	updateBookLists: PropTypes.func
}

export default Search