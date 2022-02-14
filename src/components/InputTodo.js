
import {Component} from 'react'
class InputTodo extends Component {
    constructor(props){
        super(props)
        this.props=props
    }
    state = {
        title : '',
       
    };
    onChange=({target:{value,name}})=>{
        this.setState({ [name]:value })
    }
    onSubmit = (event)=>{
        event.preventDefault()
        if(this.state.title.match(/\w+/)){

            const {addToDoItem} = this.props;
            addToDoItem(this.state.title)
            this.setState({title:''})
        }else {
            alert('Please insert a title')
        }
    }
    
    render() {
      return (
        <form onSubmit={this.onSubmit}>
          <input type="text" name='title' onChange={this.onChange} placeholder="Add Todo..." value={this.state.title}/>

          <button type='submit'>Submit</button>
        </form>
      )
    }
  }
  export default InputTodo