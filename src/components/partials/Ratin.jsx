
import React from 'react'

const Ratin = ({rate}) => {

    if (rate === '5') {
    return(
    <span class="rating-stars">
    <i class="fa fa-star" aria-hidden="true" />
    <i class="fa fa-star" aria-hidden="true" />
    <i class="fa fa-star" aria-hidden="true" />
    <i class="fa fa-star" aria-hidden="true" />
    <i class="fa fa-star" aria-hidden="true" />
    </span>
    )
    }
    else if( rate === '4') {
     return(
    <span class="rating-stars">
    <i class="fa fa-star" aria-hidden="true" />
    <i class="fa fa-star" aria-hidden="true" />
    <i class="fa fa-star" aria-hidden="true" />
    <i class="fa fa-star" aria-hidden="true" />
    </span>
     )
    }
    else if( rate === '3') {
     return(
    <span class="rating-stars">
    <i class="fa fa-star" aria-hidden="true" />
    <i class="fa fa-star" aria-hidden="true" />
    <i class="fa fa-star" aria-hidden="true" />
    </span>
     )
    }
    else if( rate === '2') {
     return(
    <span class="rating-stars">
    <i class="fa fa-star" aria-hidden="true" />
    <i class="fa fa-star" aria-hidden="true" />
    </span>
     )
    }
    else if( rate === '1') {
     return(
    <span class="rating-stars">
    <i class="fa fa-star" aria-hidden="true" />
    </span>
     )
    }
}

export default Ratin;