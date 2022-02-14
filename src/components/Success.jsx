import React from 'react'
import styles from './Sign.module.css'

export const Success = () => {
    return (
        <>
            <div className={styles.success}>
        
                <h4> You successfully signed up <br />
                    with the platform.
                </h4>
                <p>You can now explore all the products</p>
            </div>

        </>

    )
}
