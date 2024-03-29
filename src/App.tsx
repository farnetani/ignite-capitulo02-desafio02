import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'

import GlobalStyle from './styles/global'

export const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  )
}

// import { BrowserRouter as Router } from 'react-router-dom'

// import Routes from './routes'

// import GlobalStyle from './styles/global'

// export const App = () => (
//   <>
//     <GlobalStyle />
//     <Router>
//       <Routes />
//     </Router>
//   </>
// )
