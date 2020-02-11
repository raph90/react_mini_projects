function Machine(props){
    const { s1, s2, s3 } = props;
    return (
        <div>
            <p>{s1} {s2} {s3}</p>
            {((s1 === s2) &&(s2===s3)) ? <h2>You won!</h2> : <h2>You lost!</h2>}
        </div>
    )
}