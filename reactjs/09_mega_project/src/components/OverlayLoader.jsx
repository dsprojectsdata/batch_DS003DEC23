import React from 'react'
import { Spinner } from 'react-bootstrap'

const OverlayLoader = ({ isLoading, children }) => {
    return (
        <div className='overlay-loader' style={{ position: "relative" }}>
            {isLoading && <div
                style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "#ffffffa8", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999 }}
            >
                <Spinner />
            </div>}

            {children}

        </div>
    )
}

export default OverlayLoader