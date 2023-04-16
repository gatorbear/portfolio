import React from "react";
import Typewriter from 'typewriter-effect';

export default function TypingEffect() {
    return (
        <div className="flex flex-row">
            <h3 className="pr-1">Connor is a {' '} </h3>{' '}
            {/* <Typewriter
		onInit={(typewriter) => {
		typewriter.typeString('Hello World!')
			.callFunction(() => {
			console.log('String typed out!');
			})
			.pauseFor(2500)
			.deleteAll()
			.callFunction(() => {
			console.log('All strings were deleted');
			})
			.start();
		}}
	/> */}
            <Typewriter
                options={{
                    strings: [ ' Developer', ' Product Manager', ' Leader'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
}


