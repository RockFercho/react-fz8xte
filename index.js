import React, { Component } from "react";
import { render } from "react-dom";


// "Create a Reusable Component" Exercise
// Instructions
// 1) Add the following CSS rule to the profile image:
//    .profile-image { height: 50px; float: left;}
// 2) Add the following CSS rule to the profile <p> tag:
//    p.profile {margin-left: 65px; line-height: 50px;}
// 3) Create a parent component named App(). Nest <Profile /> in App() component several times and render <App /> to the page.
// 4) Add props to the profile component, and pass in props from <App /> so you end up with several different Avatar Images and Avatar names.
// 5) Add a separator of some sort between the avatar rows

//function Profile() {
//  return (
//    <div>
//      <img style = {{height: "50px", float: "left", "margin-left": "65px", "line-height": "50px"}}src="https://vignette.wikia.nocookie.net/phineasandferb/images/6/68/Perry_smiling_avatar.png/revision/latest?cb=20100118055301" />
//      <p>Perry the Platypus</p>
//    </div>
//  );
//}


//render(<Profile />, document.getElementById("my-app"));

function Section(props) {
  return (
    <div>
       <img style = {{height: "50px", float: "left", "margin-left": "65px", "line-height": "50px"}} src ={props.img} />
       <p>{props.name}</p>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <div>
        <Section
          img = "https://vignette.wikia.nocookie.net/phineasandferb/images/6/68/Perry_smiling_avatar.png/revision/latest?cb=20100118055301"
          name = "Perry the Platypus"
        />
        <Section
          img = "https://vignette.wikia.nocookie.net/phineasandferb/images/6/68/Perry_smiling_avatar.png/revision/latest?cb=20100118055301"
          name = "Perry the Platypus"
        />
      </div>
  );
  }
}

render(<App />, document.getElementById("my-app"));


/* - Data for profiles
Perry the Platypus
https://vignette.wikia.nocookie.net/phineasandferb/images/6/68/Perry_smiling_avatar.png/revision/latest?cb=20100118055301
     
Heinz Doofenshmirtz
https://vignette.wikia.nocookie.net/phineasandferb/images/6/6a/Doofenshmirtz_official.jpg/revision/latest/scale-to-width-down/240?cb=20140503030926

Major Monogram
https://vignette.wikia.nocookie.net/phineasandferb/images/b/be/Monogram_-_Rollercoaster_avatar_1.png/revision/latest?cb=20100131231239"

*/