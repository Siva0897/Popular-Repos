import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    activeId: languageFiltersData[0].id,
    popularReposList: [],
    isLoading: true,
    isErrorOccurred: false,
  }

  componentDidMount = () => {
    this.getRepoList()
  }

  getRepoList = async () => {
    try {
      const {activeId} = this.state
      this.setState({isLoading: true, isErrorOccurred: false})
      const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeId}`
      const response = await fetch(apiUrl)
      console.log(response)
      const responseData = await response.json()
      const data = responseData.popular_repos
      const updatedData = data.map(each => ({
        avatarUrl: each.avatar_url,
        forksCount: each.forks_count,
        id: each.id,
        issuesCount: each.issues_count,
        name: each.name,
        starsCount: each.stars_count,
      }))
      this.setState({popularReposList: updatedData, isLoading: false})
    } catch {
      this.setState({isErrorOccurred: true})
    }
  }

  setActiveRepo = id => this.setState({activeId: id}, this.getRepoList)

  render() {
    const {popularReposList, activeId, isLoading, isErrorOccurred} = this.state
    console.log(isErrorOccurred)
    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="title">Popular</h1>
          <ul className="filter-container">
            {languageFiltersData.map(each => (
              <LanguageFilterItem
                languageDetails={each}
                key={each.id}
                setActiveRepo={this.setActiveRepo}
                activeId={activeId}
              />
            ))}
          </ul>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
            </div>
          ) : (
            <ul className="repo-list-container">
              {popularReposList.map(each => (
                <RepositoryItem repoDetails={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
