import './Select_friend';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select_friend from './Select_friend';
import 'bootstrap/dist/css/bootstrap.min.css';

const friends = ["John", "Angela", "Gaylord", "Precious"];

class Hello_friend extends React.Component{
    state = {
        friend: 0
    }

    handleCallback = (childData) => {
        this.setState({ friend: childData })
    }

    render() {


        const { friend } = this.state;
        return (
            <div>

                {friend > 0 &&
                    <h1> Hello {friends[parseInt(friend-1)]}</h1>
                }

                {friend == 0 &&
                    <h1> "I&apos;m sad, I have no friends to greet." </h1>
                }

                <br />

                <Select_friend parentCallback={this.handleCallback} />

            </div>


        )
    }
}
export default Hello_friend;

