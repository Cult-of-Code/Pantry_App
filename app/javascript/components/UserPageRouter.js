

//::::::::::::::::::::::::::::::::::::::::::
//          Nessessary Imports
//::::::::::::::::::::::::::::::::::::::::::
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'



//::::::::::::::::::::::::::::::::::::::::::
//              Components
//::::::::::::::::::::::::::::::::::::::::::
import CreateNewStorage from './components/CreateNewStorage'
import AddItemToStorage from './pages/AddItemToPantry'
import CreateNewRecipePost from './components/CreateNewRecipePost'
import UserPageSlot from './pages/UserPageSlot'
import ViewUserRecipes from './pages/ViewUserRecipes'
import ViewRecipes from './pages/ViewRecipes'



//::::::::::::::::::::::::::::::::::::::::::
//                Pages
//::::::::::::::::::::::::::::::::::::::::::
import TestRoute from './components/TestRoute'
import ViewItemsInPantry from './pages/ViewItemsInPantry'
import ViewOneItem from './pages/ViewOneItem'


//::::::::::::::::::::::::::::::::::::::::::

//           User Page Router
//__________________________________________
export default function(props){
    
    const { match } = props
    const { params } = match
    

    //console.log(props)
    //console.log(match)
   
    let pages = {
                    "test":        params.page === 'test',
                    "dude":        params.page === 'dude',
                    
                    "collection":  params.page === 'collection',
                    
                    "container":   params.page ? params.page.startsWith('container') : false,
                    
                    "posts":       params.page === 'posts',
                    "post":        params.page === 'post',
                    
                    "recipes":     params.page === 'recipes'
                }
    
return(
    
   <React.Fragment>
   <UserPageSlot { ...props }>
    {props.logged_in &&
    <Switch>
    
        {/*-----------------------------*/}
        
        {/*   Test Route 1    */}
        { pages['dude'] && <Route path={match.url}>Dude</Route> }
        
        {/*   Test Route 2    */}
        { pages['test'] && <Route path={match.url} render={ (p) => shoutSomething({...p,
                someProp:"a value"})
        }/>}
        
        {/*-----------------------------*/}
        
        
        
        
        {/*   All User Items    */}       {/*  TODO:  Replace 'TestRoute' with 'Posts' component*/}
        { pages['collection'] && <Route exact path={match.url} render={ (p) => <ViewItemsInPantry {...p}
            user_id={ props.current_user }
        />}/>}
        
        {/*   Specific User Item    */}       {/*  TODO:  Replace 'TestRoute' with 'Posts' component*/}
        { pages['collection'] && <Route path={`${match.url}/:id`} render={ (p) => <ViewOneItem {...p}
            user_id={ props.current_user }

        />}/>}
        
        
        
        
        
        {/*   Container   */}
        { pages['container']  &&
            <Switch>
            
                {/*   Create    */}
                <Route path={`${match.url}/create`} render={ (p) => <CreateNewStorage {...p} 
                    submitForm={ props.handleSubmit } current_user={ props.current_user }
                />}/>
                
                {/*   Edit    */}
                <Route path={`${match.url}/:storage_name/edit`} render={ (p) => <AddItemToStorage {...p} 
                    submitForm={ props.handleSubmit } current_user={ props.current_user }
                />}/>
                
                {/*   View     */}
                <Route path={`${match.url}/:storage_name`} render={ (p) => <TestRoute {...p} 
                    
                />}/>
                
                <Route path={match.url} exact>Redirect TODO</Route>
                
            </Switch>
        }
        
        
        
        
        {/*   Posts   */}
        { pages['posts'] && <Route path={match.url} render={ (p) => <ViewUserRecipes {...p} 
                user_recipes = {props.user_recipes}  
        />}/>}
        
        
        {/*   Post Specific   */}
        { pages['post']  &&
            <Switch>
            
            
                {/*   Create    */}
                <Route path={`${match.url}/create`} render={ (p) => <CreateNewRecipePost {...p} 
                    submitForm={ props.handleSubmit } current_user={ props.current_user }
                />}/>
                
                {/*   Edit    */}
                <Route path={`${match.url}/:post_id/edit`} render={ (p) => <TestRoute {...p} 
                   submitForm={ props.handleSubmit } current_user={ props.current_user }
                />}/>
                
                {/*   View     */}
                <Route path={`${match.url}/:post_id`} render={ (p) => <TestRoute {...p} 
                    
                />}/>
                
                <Route path={match.url} exact>Redirect TODO</Route>
                
            </Switch>
        }
        
        
        
        
        {/*   Recipes Available (List)    */}
        { pages['recipes']  && <Route path={match.url} render={ (p) => <ViewRecipes {...p} 
                  current_user={ props.current_user }
        />}/>}
        
        
        
        
        {/*   ~   Default   ~   */}
        
        {/*   User Dashboard - Container list   */}
        <Route render={ (p) => <TestRoute {...p} 
            current_user={ props.current_user } 
        />}/>
        
        
        
    </Switch>
    }
    {!props.logged_in && <Redirect push to="/users/sign_up" />/* TODO : actually make it redirect*/}
    </UserPageSlot>
    </React.Fragment>

   
)
}

//{ pages['dude'] && <Route path={match.url} component={ Content } /> }




//------------------------------------------
//               Functions
//------------------------------------------

function shoutSomething({ someProp }){
    return(<div>{someProp}</div>)
}