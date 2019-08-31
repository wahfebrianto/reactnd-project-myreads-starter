import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class ContextMenu extends Component{
  	onContextMenuSelect = ({target: {value}}) => {
      	const { book, updateBookLists } = this.props
        BooksAPI.update(book, value).then(() => {
          	updateBookLists && updateBookLists()
        })
    }
  
 	render() {
      	const { shelfValue } = this.props
      	return(
        	<div className="book-shelf-changer">
          		<select onChange={(e) => this.onContextMenuSelect(e)} value={shelfValue}>
          			<option value="move" disabled>Move to...</option>
          			<option value="currentlyReading">Currently Reading</option>
          			<option value="wantToRead">Want to Read</option>
          			<option value="read">Read</option>
          			<option value="none">None</option>
          		</select>
          	</div>
        )
    }
}

ContextMenu.propTypes = {
  	book: PropTypes.object,
  	updateBookLists: PropTypes.func,
  	shelfValue: PropTypes.string
}

export default ContextMenu