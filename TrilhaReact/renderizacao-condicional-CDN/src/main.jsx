function RenderPage(props){
    const characters = props.data.results
    const result = []
    characters.forEach(x=>{result.push(<Card name={x.name} status={x.status} image={x.image} ></Card>)})
    return(result)
}

function Card(props){
    return(
        <div className={props.status}>
            <img src={props.image} alt="" />
            <p>Nome = {props.name}</p>
            <p>Status = {props.status}</p>
        </div>
    )
}

function finallyRender(charObj){
ReactDOM.render(
    <RenderPage data={charObj}></RenderPage>,
    document.getElementById('root')
);
}

(async () => {
    const char = (await(await fetch(`https://rickandmortyapi.com/api/character`)).json());

    finallyRender(char)
})()