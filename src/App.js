import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Search from './Search'
import * as BooksAPI from './BooksAPI'

export default function App() {
	const [bookLists, setBookLists] = useState([])

	const updateBookLists = () => {
		BooksAPI.getAll().then(bookLists => {
			setBookLists(bookLists)
		})
	}

	useEffect(() => {
		updateBookLists()
	})

	return (
		<div className='app'>
			<Route
				exact
				path='/'
				render={() => (
					<Home bookLists={bookLists} updateBookLists={updateBookLists} />
				)}
			/>
			<Route
				path='/search'
				render={() => (
					<Search bookLists={bookLists} updateBookLists={updateBookLists} />
				)}
			/>
		</div>
	)
}
