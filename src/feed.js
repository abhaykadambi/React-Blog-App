import React, {Component} from 'react';
import PostDesign from './postDesign';

export default class Feed extends Component {

constructor(props) {
    super(props)
    }

render() {
    return (
    <div>
        <div className="bg-purple-50">
            <div className="container items-center mx-auto border-4 border-gray-100">
                <p className="text-2xl py-5 text-center">Blogs For You</p>
                
                {/* replace this with the posts */}
            </div>
        </div>
    <div className="flex flex-row">
        <PostDesign />
        <PostDesign />
        <PostDesign />
    </div>
    
    </div>
    )
    }
}