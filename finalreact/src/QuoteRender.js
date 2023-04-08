
function QuoteRender (props) {
    const {title,author} = props
    
    return(
        <div>
            <span className = "quote-title">"{title}"</span>
            <p className = "quote-auhtor">~{author}~</p>
        </div>
    )
}
export default QuoteRender;