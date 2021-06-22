import {useState} from 'react'

const SearchField = ({onSearch}) => {

    const searchQueries = {
        "title" : "",
        "author": ""
      } 

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [title, setTitle] = useState(query || '');
    const [author, setAuthor] = useState(query || '');

    const onSubmit = (e) => {
        e.preventDefault()

        onSearch({ title, author })
        setTitle('')
        setAuthor('')
        
    }
    
    return (
        <div>
            <form  onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search books</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="search for author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    name="s"
                ></input>
            </div>
                <button className='btn' type="submit">Search</button>

            </form>
            
        </div>
    )
}

export default SearchField
