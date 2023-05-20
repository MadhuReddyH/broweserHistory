import './index.css'

const HistoryAppItems = props => {
  const {history, deleteItem} = props
  const {id, title, logoUrl, domainUrl, timeAccessed} = history

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-items">
      <div className="history-items">
        <p className="time"> {timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title"> {title}</p>
        <p className="domain"> {domainUrl}</p>
      </div>
      <div className="button-style">
        <button
          data-testid="delete"
          className="button"
          type="button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryAppItems
