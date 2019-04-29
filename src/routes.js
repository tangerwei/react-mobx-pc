import React from "react";
import { Router, Route } from 'react-router-dom';
import Index from './pages/page1';
import { observer } from "mobx-react";

const RouteCont = observer((props) => {
    return (
        <Router {...props}>
            <div>
                <Route path="/" exact={true} component={Index} />
                {/* <Route path="路径" component={Index} /> */}
            </div>
        </Router>
    );
});

export default RouteCont;