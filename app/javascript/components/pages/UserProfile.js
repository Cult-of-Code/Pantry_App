import React, { Component } from 'react';



class UserProfile extends Component{
  constructor(props){
    super(props)
    this.state = {
        profile: []
    }
    
    this.getProfile()
  }
  componentDidMount(){
    this.getProfile()
}

 getProfile = () => {
    const { id } = this.props.match.params
    fetch(`http://localhost:3000/users/${id}`)
    .then((response)=>{
     if(response.status === 200){
       return(response.json())
     }
   })
   .then((userInfo)=>{
     this.setState({ profile: current_user })
   })
 }

 render(){
      return (
            <React.Fragment>
                
            </React.Fragment>
        )
    }
}


          
          
export default UserProfile