


function Pagination({ postsPerPage, totalPosts}){
    const pageNumbers=[];
    for(let x=0; x <=Math.ceil(totalPosts/postsPerPage); x++){
        pageNumbers.push(x)
    }

    return(
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(num => (
                    <li key={num} className="page-item">
                        <a href='!#' className="page-link">
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination