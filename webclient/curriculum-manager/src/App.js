import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
    getCurriculums,
    createCurriculum,
    deleteCurriculum
  } from './actions/curriculum_action.js';


class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {name:''};
  }

  componentDidMount()
  {
    this.props.getCurriculums();
  }

  handleChange = (e) =>
  {
    var {value} = e.target;
    this.setState({name:value})
  }

  handleSubmit = (e) =>
  {
    e.preventDefault();
    this.props.createCurriculum(this.state);
    this.setState({name:''});
  }
  handleDelete = (e) =>
  {
    e.preventDefault();
    var {id} = e.target;
    this.props.deleteCurriculum(id);
  }


  render() {
    let {curriculums} = this.props;
    return (
      <div className="App">
        <h1>College of Computing</h1>
        {<table>
          {
              curriculums.map((curriculum,index)=>{
                return(
                  <tr>
                    <td>{curriculum.id}. </td>
                    <td>{curriculum.name}</td>
                    <td><button id={curriculum.id} onClick={this.handleDelete}>delete</button></td>
                  </tr>
                  );
              })
          }
        </table>}

        <h1>Add Curriculum</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} value={this.state.name}/> <button type='submit'>Submit</button>
        </form>
      </div>
    );


  }
}

const mapStateToProps = ({curriculums})=>{
  return {curriculums}
}

export default connect(mapStateToProps,{getCurriculums,createCurriculum,deleteCurriculum})(App);
