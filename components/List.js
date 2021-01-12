import React from 'react'
import styles from "./List.module.css";




const List  = ({title, id, furtherInfo, tag, buttonText
                                }) => {
    return (
        <div>
            <div>
                <h3>{title} : {id}</h3>

                <div>
                    <ul>
                        <li>
                            <div>{furtherInfo}</div>
                        </li>
                        <li>
                            <div>{tag}</div>
                        </li>
                    </ul>
                </div>

            </div>

            <div >
                <button>
                    {buttonText}
                </button>
            </div>
        </div>

    )
}

export default List