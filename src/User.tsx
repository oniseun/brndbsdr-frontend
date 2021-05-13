import {Component} from "react";

import {Media} from 'react-bootstrap'

interface UserProps {
    username?: string;
    avatar?: string;
  }
  
interface UserState {
}

class User extends Component<UserProps, UserState> { 
    
  render(): object {
    const { username, avatar } = this.props;


    return (
        <>
            <Media>
            <img  width={30} height={30} className="mr-3" src={avatar} alt={username} />
            <Media.Body> {username}</Media.Body>
            </Media>
        </>
    );
  }
}

export default User;