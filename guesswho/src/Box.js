const Box = () => {
    return(
    <>
        <div className="box">
        <div className="content">
            <h1>Guess Who?</h1>
            <p>Please select the number of characters:</p>
            <input type="radio" id="24" name="num" value="24"></input>
            <label htmlFor="24">24 (6x4)</label><br></br>  
            <input type="radio" id="20" name="num" value="20"></input>
            <label htmlFor="20">20 (5x4)</label><br></br>  
            <input type="radio" id="16" name="num" value="16"></input>
            <label htmlFor="16">16 (4x4)</label><br></br>
            <input type="radio" id="12" name="num" value="12"></input>
            <label htmlFor="12">12 (4x3)</label><br></br>
            <br></br>
            <input type="submit" value="Submit"></input>
        </div>
        </div> 
    </>
    )
}
export default Box;