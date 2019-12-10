import React, { Component } from 'react'

// import {connect} from "react-redux"
// import Classify from './pages/classify'
// import { start } from 'repl'
class App extends Component {
    render() {
        return (
            <div>
                {/* <Switch>
                    {
                        // console.log(mainRoute),
                        mainRoute.map(item=>{
                            return <Route key={item.pathname} path={item.pathname} />
                        })
                    }
                </Switch> */}
                App
                {/* <Classify/> */}
            </div>
        )
    }
}
// const mapStateToProps = start =>({
//     classify : start.classify
// })
export default App
// export default connect(mapStateToProps,null)(App)