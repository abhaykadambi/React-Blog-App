import React, {Component} from 'react';


export default class NavBar extends Component {

constructor(props) {
    super(props)
    }

render() {
    return (
    <div className="bg-purple-100">
      <div class="mx-auto p-5 container">
        <nav class="flex justify-between">
            <div>
                <a href="#">Blog</a>
            </div>
            <div class="flex flex-row">
                <a href="#" className="pr-2.5 pl-2.5 rounded-lg hover:bg-purple-300 hover:text-white">Home</a>
                <a href="#" className="pr-2.5 pl-2.5 rounded-lg hover:bg-purple-300 hover:text-white">Explore</a>
                <a href="#" className="pr-2.5 pl-2.5 rounded-lg hover:bg-purple-300 hover:text-white">Projects</a>
                <a href="#" className="pr-2.5 pl-2.5 rounded-lg hover:bg-purple-300 hover:text-white">Sign In</a>
            </div>
        </nav>
      </div>
    </div>
    
    )
    }
}