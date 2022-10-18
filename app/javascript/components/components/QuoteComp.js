import React, {useState, useEffect} from 'react'
import {Button} from 'reactstrap'


const QuoteComp = () => {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState(' ')

    useEffect(() => {
        getQuote()
    }, [])

    const getQuote = () => {
        let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let dataQuotes = data.quotes;
                let randomNum = Math.floor(Math.random() * dataQuotes.length)
                let randomQuotes = dataQuotes[randomNum];
                setQuote(randomQuotes.quote)
                setAuthor(randomQuotes.author)
            })
    }

    const handleClick = () => {
        getQuote()
    }

return (
    <>
            <div className = "q-box-style">
                <div className="quote-text">
                    <p>{quote}</p>
                </div>
                <div className="author"><p>{author}</p></div>
                    <div className="quote-buttons">
                        <Button onClick={handleClick} className="new-quote" color="danger">New Quote</Button>
                    </div>
        </div>
    </>
)
}

export default QuoteComp