function PassingFunctions({thefunction}:{thefunction:()=> void}){
    return(
        <div>
            <h2>Passing Function</h2>
            <button onClick={thefunction} className="btn btn-primary">
                Invoke the function
            </button>
        </div>
    );
}
export default PassingFunctions;