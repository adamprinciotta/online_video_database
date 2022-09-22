import './Pagination.css'


function Pagination({ postsPerPage, totalPosts, paginate}){
    const pageNumbers=[];
    console.log("The number of pages is: " + Math.ceil(totalPosts/postsPerPage))
    for(let x=0; x <=Math.ceil(totalPosts/postsPerPage); x++){
        pageNumbers.push(x+1)
    }

    return(
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(num => (
                    <li key={num} >
                        <a onClick={() => paginate(num)} href='#search' >
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