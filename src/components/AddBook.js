import { useState } from 'react'

const AddBook = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const[description, setDescription] = useState('')
    const[year, setYear] = useState('')
    const [genre, setGenre] = useState('') 
    const [language, setLanguage] = useState('')
    const[rating, setRating] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title){
            alert('Please add a title')
            return
        }

        onAdd({ title, author, description, year, genre, language, rating })

        setTitle('')
        setAuthor('')
        setDescription('')
        setYear('')
        setGenre('')
        setLanguage('english') 
        setRating(0)

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input type="text" 
                placeholder='Add Title' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Author</label>
                <input type="text" 
                placeholder='Add Author'
                value={author} 
                onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <textarea 
                type="text"
                placeholder='Add Description'
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Year</label>
                <input type="text" 
                placeholder='Add year published'
                value={year} 
                onChange={(e) => setYear(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Genre</label>
                <input type="text" 
                placeholder='Add Genre'
                value={genre} 
                onChange={(e) => setGenre(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Language</label>
                <select id="language" 
                name="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="choose">Choose</option>
                    <option value="english">English</option>
                    <option value="swedish">Swedish</option>
                    <option value="german">German</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className='form-control'>
                <label>Rating</label>
                <input type="text" 
                placeholder='Add Rating 1 - 5'
                value={rating} 
                onChange={(e) => setRating(e.target.value)}
                />
            </div>
           
            <input type="submit" value="Save Book" className='btn btn-block'/>
        </form>
    )
}

export default AddBook
