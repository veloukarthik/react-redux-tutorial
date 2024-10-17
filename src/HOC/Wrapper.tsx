import React from 'react'

function Wrapper(Component: any) {
    return function HOC(props: any) {

        const isAuthenticate = false;

        if(!isAuthenticate){
            return <h1>You are not authenticated</h1>
        }
        

        return (
            <div>
                <h1>HOC</h1>
                <Component {...props} />
            </div>
        )
    }
}

export default Wrapper;