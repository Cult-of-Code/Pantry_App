import React from 'react'
import { Route, Switch } from 'react-router-dom'


export default function({match}){
    
    const { params } = match
      
    let pages = {
                    "test":   params.page === 'test',
                    
                    "dude":   params.page === 'dude',
                    "posts":  params.page === 'posts'
                }
    
    
return(
    <Switch>
    
        {/*-----------------------------*/}
        {/*   Test Route 1    */}
        { pages['test'] && <Route path={match.url} render={ (props) => shoutSomething({...props,
                someProp:"a value"})
          }/>
        }
    
        {/*   Test Route 2    */}
        { pages['dude'] && <Route path={match.url}>Dude</Route> }
        {/*-----------------------------*/}
        
        
        
        {/*   Recipes Posts by the Current User    */}       {/*  TODO:  Replace 'Home' with 'Posts' component*/}
        { pages['posts'] && <Route path={match.url} render={ (props) => <Home {...props} 
                  
          />}/>
        }
        
        
        {/*   Default    */}
        <Route>User Dashboard</Route>
        
    </Switch>
)
}

//{ pages['dude'] && <Route path={match.url} component={ Content } /> }




//------------------------------------------
//               Functions
//------------------------------------------

function shoutSomething({ someProp }){
    return(<div>{someProp}</div>)
}