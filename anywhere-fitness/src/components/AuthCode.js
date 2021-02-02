// import React from 'react';

// export default class AuthCode extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             textDisplay: false,
//         }
//     }

//     ToggleButton(){
//         this.setState((currentState) => ({
//             textDisplay: currentState.textDisplay, 
//         }));
//     }

//     render(){
//         return(
//             <div>
//                 <button onClick={() => this.ToggleButton()}>
//                   I want to be an Instructor 
//                 </button>
//                 {!this.state.textDisplay && this.props.text}
//             </div>
//         )
//     }
// }