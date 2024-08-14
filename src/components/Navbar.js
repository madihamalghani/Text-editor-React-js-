import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';

//impt
export default function Navbar({ title = "write title here", mode, toggleMode, btnText, mode1, toggleMode1, btnText1, mode2, toggleMode2, btnText2 }) {

    return (
        // style={{ backgroundColor: mode === 'light' ? '#F6F5F5' : 'black' };{backgroundColor:mode1==='light'? '#F6F5F5' : 'purple'}} 7D8ABC

        <>

            <nav className={`navbar navbar-expand-lg  border-body`} style={{ backgroundColor: mode === 'dark' ? 'black' : mode1 === 'blue' ? '#7776B3' :mode2==='green'?'#1A5319': '#F6F5F5' }} data-bs-theme="dark"> {/* /F6F5F5 */}
                <div className="container-fluid" id='navbar'>
                    <Link className={`navbar-brand  text-${mode === 'dark' ? 'light' : mode1 === 'blue' ? 'white' :mode2==='green'?'white': 'black'}`} to="/home">{title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <Link className={`nav-link active mx-3 pr-3  text-${mode === 'dark' ? 'light' : mode1 === 'blue' ? 'white' :mode2==='green'?'white': 'black'}`} aria-current={`page`} to="/home">Home</Link>

                            <Link className={`nav-link active mx-3 pr-3  text-${mode === 'dark' ? 'light' : mode1 === 'blue' ? 'white' :mode2==='green'?'white': 'black'}`} aria-current={`page`} to="/about">About</Link>

                            {/* <a className="nav-link " href="/about">About</a> */}
                            <button className={`btn btn-${mode==='dark'?'dark':mode2==='green'?'success':'light'}`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Sign up
                            </button>
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header bg-success">
                                            <h1 className="modal-title fs-5 text-white " id="staticBackdropLabel">Sign Up </h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-3 row">
                                                <label className="col-sm-2 col-form-label text-white ">Email</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control-plaintext border" id="staticEmail" />
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label className="col-sm-2 col-form-label text-white">Password</label>
                                                <div className="col-sm-10">
                                                    <input type="password" className="form-control" id="inputPassword" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Not Now</button>
                                            <button type="button" className="btn btn-success">Sign up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="form-check form-switch mx-3" style={{ display: mode1 === 'blue' ? 'none':mode2==='green'?'none' : 'inline-block' }}>
                        <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">{btnText}</label>
                    </div>
                    <div className="form-check form-switch mx-3" style={{ display: mode === 'dark' ? 'none':mode2==='green'?'none' : 'inline-block' }}>
                        <input className="form-check-input" onClick={toggleMode1} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${mode1 === 'blue' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">{btnText1}</label>
                    </div>
                    <div className="form-check form-switch mx-3" style={{ display: mode === 'dark' ? 'none':mode1==='blue'?'none':'inline-block' }} >
                        <input className="form-check-input"  onClick={toggleMode2}  type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${mode2 === 'green' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">{btnText2}</label>
                    </div>
                </div>

            </nav>

        </>)
}
Navbar.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    mode: PropTypes.string,
};

