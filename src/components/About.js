import React, { useState } from 'react';

export default function About() {

    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'

    });
    const [btnText, setbtnText] = useState("Enable Dark Mode");

    const enableMode = () => {
        if (myStyle.color === 'black') {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black',
            })
            setbtnText('Enable Light Mode');
        }
        else {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtnText('Enable Dark Mode');

        }

    }

    return (
        <div className='container my-5 pt-3' style={myStyle}>
            <div className="accordion my-3" id="accordionExample"  >
                <div className="accordion-item " style={myStyle}>
                    <h2 className="accordion-header" style={myStyle}>
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Is this a multi-theme text editor?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body "  >
                            <strong>Yes.</strong> White theme is shown by default, It also conatins blue, green and dark themes.                    </div>
                    </div>
                </div>
                <div className="accordion-item " style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why do you built this project?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>Because it was my first React project</strong> and I want it to be simple, small and meaningful.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Why is sign up not working?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is a frontend project made from React </strong> and no backend is added. So how can you sign up? And it was just a practice project for both React and Bootstrap.
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <button className='btn btn-primary my-3' onClick={enableMode}>{btnText}</button>

            </div>
        </div>
    )
}
