export const SESSION_DURATION = 5*3600*1000;


const proj = "build";
var app_call;

if(proj === "test") {
    app_call = process.env.REACT_APP_BACKEND;
} else if(proj === "build") {
    app_call = process.env.REACT_APP_BACKEND_DEV;
};

export const API = app_call;

