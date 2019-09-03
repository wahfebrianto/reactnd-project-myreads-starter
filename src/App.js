import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Search from './Search'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  	state = {
    	bookLists: [],
  	}

	componentDidMount() {
      	this.updateBookLists()
    }

	updateBookLists = () => {
      	BooksAPI.getAll().then((bookLists) => {
          	this.setState({bookLists})
        })
    }

  	render() {
      	const { bookLists } = this.state
    	return (
      		<div className="app">
      			<Route exact path='/' render={() => 
              		<Home bookLists={bookLists} updateBookLists={this.updateBookLists}/>
				}/>
      			<Route path='/search' render={() => 
              		<Search bookLists={bookLists} updateBookLists={this.updateBookLists}/>
				}/>
      		</div>
    	)
  	}
}

export default BooksApp
