const Title = () => {
    return <p
    style={{
        marginLeft: "23em",
        fontSize: "2em",
    }}> Conway Game of life </p>
}

const Rules = () => {
        return <div
                style={{
                textAlign: 'justify',
                justifyContent: 'center',
                width: 'fit-content',
                }}>
                    <p>Any live cell with fewer than two live neighbours dies, as if by underpopulation.
                        Any live cell with more than three live neighbours dies, as if by overpopulation.
                        Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                    </p>
                </div>
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