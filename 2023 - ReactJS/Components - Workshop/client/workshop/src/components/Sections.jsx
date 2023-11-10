import SearchBar from "./Search"
import Table from "./Table/TableIndex"
export default function Sections(){
    return(
        <section className="card users-container">
            <SearchBar/>
            <Table/>
        </section>
    )
}