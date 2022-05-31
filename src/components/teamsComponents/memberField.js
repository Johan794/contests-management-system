import {Component} from "react"
import styles from '../../styles/createTeam.module.css'

export default class extends Component{
    constructor(props){
        super(props)
        this.state = {members : [""]}

    }
    
    handleDelete = (e) =>{
        let aux = this.state.members
        let index = aux.indexOf(e.target.name)
        aux.splice(index,1)
        this.setState({
            members : aux
        })
    }

    handleAdd = (e) =>{
        let aux = this.state.members
        aux.push("")
        this.setState({
            members : aux
        })
    }

    handleChanged = (e) =>{
        let aux = this.state.members
        let index = aux.indexOf(e.target.name)
        aux[index] = e.target.value
        this.setState({
            members : aux
        })
        console.log(this.props.children)
    }

    render(){
        return(
        <div>
            {this.state.members.map((e)=><div>
            <input type = 'text' onChange={this.handleChanged} name = {e} value = {e}></input>
            <button type = 'button' name = {e} onClick ={this.handleDelete} className={styles.button}>-</button>
            <button type = 'button' onClick={this.handleAdd} className={styles.button}>+</button>
            </div>)}
        </div>)
    }
}