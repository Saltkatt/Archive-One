import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const onClick = (e) => {
        console.log('button is clicked')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Closed' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Archive One',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
