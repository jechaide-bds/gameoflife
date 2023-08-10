const Title = () => {
    return <h2
    style={{
        marginLeft: "23em",
        fontSize: "2em",
    }}> Conway's Game of life </h2>
}

const Rules = () => {
    return <p
    style={{
        textAlign: 'justify',
        justifyContent: 'center',
        width: 'fit-content',
        }}>
        Any live cell with fewer than two live neighbours dies, as if by underpopulation.<br/>
        Any live cell with two or three live neighbours lives on to the next generation.<br/>
        Any live cell with more than three live neighbours dies, as if by overpopulation.<br/>
        Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</p>
}

const Description = () => {
   return <div 
    style={{
        textAlign: 'center',
        justifyContent: 'center',
        width: 'fit-content',
        }}>
        <Title />
    </div>
}
export { Title, Rules, Description }