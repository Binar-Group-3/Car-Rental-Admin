import Card from "../../components/Card";
import React, {Component} from "react";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div style = {{ height: 'auto', overflowX: 'hidden' }}>
            <div className='row' style = {{ padding: 10 }}>
                <div className='col' style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 8, marginBottom: 40, justifyContent: 'center'}}>
                    <Card />
                </div>
            </div>
            </div>
         );
    }
}
 
export default Dashboard;