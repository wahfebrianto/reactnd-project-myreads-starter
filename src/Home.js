import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class Home extends Component {
    state = {
      	bookShelves: [
          	{
            	title: 'Currently Reading',
            	value: 'currentlyReading'
          	},
          	{
            	title: 'Want to Read',
            	value: 'wantToRead'
          	},
          	{
            	title: 'Read',
            	value: 'read'
          	},
        ]
    }

  	render() {
    	const { bookShelves } = this.state
		const { bookLists, updateBookLists } = this.props
    	return(
    		<div className="list-books">
       			<div className="list-books-title">
       				<h1>MyReads</h1>
       			</div>
       			<div className="list-books-content">
       				<div>
      					{bookShelves.map((bookShelf) => {
      							const books = bookLists.filter(book => book.shelf === bookShelf.value)
                            return <BookShelf key={bookShelf.value} books={books} updateBookLists={updateBookLists} shelfTitle={bookShelf.title} /> 
    						})
      					}
       				</div>
       				<div className="open-search">
						<Link to='/search'>Add a book</Link>
					</div>
				</div>
			</div>
    	)
  	}
}

Home.propTypes = {
  	bookLists: PropTypes.arrayOf(PropTypes.object),
  	updateBookLists: PropTypes.func
}

export default Home