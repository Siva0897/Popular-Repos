// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {avatarUrl, name, starsCount, forksCount, issuesCount} = repoDetails
  return (
    <li className="repo-item">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h1 className="repo-name">{name}</h1>
      <div className="repo-data-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="repo-icon"
        />
        <p className="repo-data">{starsCount} stars</p>
      </div>
      <div className="repo-data-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="repo-icon"
        />
        <p className="repo-data">{forksCount} forks</p>
      </div>
      <div className="repo-data-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="repo-icon"
        />
        <p className="repo-data">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
