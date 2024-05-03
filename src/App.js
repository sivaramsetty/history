import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

class App extends Component {
  state = {userList: initialHistoryList, emptyList: false}

  deleteLogo = id => {
    console.log(id)
    this.setState(prevState => ({
      userList: prevState.userList.filter(each => each.id !== id),
      emptyList: prevState.userList.length === 1,
    }))
  }

  inputChanger = event => {
    console.log(event.target.value)

    const filteredList = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(event.target.value.toLowerCase()),
    )

    this.setState({
      userList: filteredList,
      emptyList: filteredList.length === 0,
    })
  }

  render() {
    const {userList, emptyList} = this.state
    return (
      <div>
        <div className="con">
          <div className="searchCon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="logo"
              alt="app logo"
            />

            <div className="search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className=""
                alt="search"
              />
              <input
                type="search"
                placeholder="Search history"
                className="inputChange"
                onChange={this.inputChanger}
              />
            </div>
          </div>
        </div>

        <div className="userList">
          {emptyList ? <p>There is no history to show</p> : null}

          <ul>
            {userList.map(each => (
              <li key={each.id}>
                <p>{each.timeAccessed}</p>

                <img
                  src={each.logoUrl}
                  alt="domain logo"
                  className="domainLogo"
                />
                <div className="cardHistory">
                  <p className="paraLength">{each.title}</p>
                  <p>{each.domainUrl}</p>
                </div>

                <button
                  type="button"
                  className="deleteLogo"
                  onClick={() => this.deleteLogo(each.id)}
                  data-testid="delete"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
