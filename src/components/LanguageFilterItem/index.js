// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, setActiveRepo, activeId} = props
  const {language, id} = languageDetails
  const onFilterButtonClick = () => setActiveRepo(id)

  const activeBtnStyle = id === activeId ? 'active-btn' : ''

  return (
    <li>
      <button
        className={`filter-btn ${activeBtnStyle}`}
        type="button"
        onClick={onFilterButtonClick}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
