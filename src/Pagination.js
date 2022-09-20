


function Pagination({ postsPerPage, totalPosts}){
    const pageNumbers=[];
    console.log("Pages" + Math.ceil(totalPosts/postsPerPage))
    for(let x=0; x <=Math.ceil(totalPosts/postsPerPage); x++){
        pageNumbers.push(x)
    }

    return(
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(num => (
                    <li key={num} >
                        <a href='!#' >
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
//className="page-item"
//className="page-link"

export default Pagination