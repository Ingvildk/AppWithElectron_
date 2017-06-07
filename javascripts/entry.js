//  including our LESS folder to be part of our JavaScript bundle
//  (webpack will automatically compile it)
require('../less/main.less');
import React from "react";
import Application from './Application';

React.render(<Application />,
document.getElementById('content'));