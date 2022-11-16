function App() {
    return (
        <div className="bg-amber-200 h-screen">
            <div className="m-auto w-[25em] pt-8">
                <h1>Reaktodo</h1>
                <p>A simple and yet eventually over-engineered todo app</p>
                <input type="text" placeholder="Walk the dog"/>
                <div> list of not completed yet</div>
                <div> list of done</div>
            </div>
        </div>
    );
}

export default App;
