

//::::::::::::::::::::::::::::::::::::::::::
//           Nessessary Imports
//::::::::::::::::::::::::::::::::::::::::::
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



//::::::::::::::::::::::::::::::::::::::::::

//            User Page Slot
//__________________________________________
export default class Slot extends Component {
    constructor(props){
        super(props)

        this.state = {}

        this.routeChange = this.routeChange.bind(this);
    }
    
    
    
    componentDidMount(){
        if( this.props.current_user ){
            this.setState({
                username:   this.props.current_user.username,
                name_first: this.props.current_user.name_first,
                name_last:  this.props.current_user.name_last,
                email:      this.props.current_user.email
            })
        }
        else{
            this.setState({
                username:   '...',
                name_first: '',
                name_last:  '',
                email:      ''
            })
        }
    }
    
    
    
    
    
    routeChange() {
        let path = `/user`;
        this.props.history.push(path);
    }
    
    
    
    
    render(){
    return(<div className='user'>
    
        <div className='sidePanel'>
        
        
        
            {/*    First Row    */}
            <div style={{ display:'flex', flexFlow:'row' }}>
            
                <div className='image'>
                  <img src={'https://upload.wikimedia.org/wikipedia/commons/c/c6/Sierpinski_square.jpg'} alt="profile picture"/>
                </div>
                
                <div className='name'>
                    <div className='username'>{this.state.username}</div>
                    {this.state.name_first} {this.state.name_last}
                </div>
                
            </div>
            
            
            
            {/*    Second Row    */}
            <div style={{ display:'flex', flexFlow:'column' }}>
                <div className='pantryLink'onClick={this.routeChange}/>
            </div>
        
        
        
        </div>
        
        
        
        
        
        {/*    User Content Panel    */}
        <div className='contentPanel'>
            {
                this.props.children ? this.props.children
                : <div className="loading"/>
            }
        </div>
        
    </div>)}

}





//  - - -  OLD  - - - 
/*
<Row>
                <Col>
                <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                {this.props.logged_in &&
                    <Toast>
                      <ToastHeader>
                        User Name  
                      </ToastHeader>
                      <ToastBody>
                        Welcome! Lets get cooking!
                        <Nav vertical>
                            <NavItem>
                              <NavLink href="/user">Go to Dashboard</NavLink>
                            </NavItem>
                            <NavbarText>
                             About to Expire
                            </NavbarText>
                            <NavbarText>
                             Running Low On
                            </NavbarText>
                        </Nav>
                      </ToastBody>
                    </Toast>
                }
                {!this.props.logged_in &&
                    <div>
                    <Alert color="warning">
                        You need sign in to see this page!
                    </Alert>
                    </div>
                }
                </div>
                </Col>
                <Col>
                <div className="PageSlot">
                {this.props.children}
                </div>
                </Col>
            </Row>
*/