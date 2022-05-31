import {Component} from 'react'
import TeamsItem from './TeamsItem'

export default class TeamsList extends Component{

    constructor(props){
        super(props)
        this.state = {
            items : this.props.teams
        }
    }
    render(){
        
        return (
            <div>
                <div>
                {this.state.items.map((e)=>
                <TeamsItem teamName={this.props.teamName} institution={this.props.institution} members={this.props.members}  />
                )}
                </div>
            </div>
        )
    }
}