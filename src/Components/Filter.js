import { filterData } from "../data";

function Filter (props){
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }

    function likedCategoryHandler(){
        console.log("Hello I am Liked Caategory");
        setCategory("Liked");
    }

    


    
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {props.filterData.map((data)=>{
                return( 
                <button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2
                 transition-all duration-300
                 ${category===data.title?'bg-opacity-100 border-white' : "bg-opacity-40 border-transparent"}`
                }
        key={data.id}
        onClick={()=>filterHandler(data.title)}>{data.title}</button>
        )
            })}

            <button onClick={()=>{likedCategoryHandler()}} className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2
                 transition-all duration-300 ${category==='Liked'?'bg-opacity-100 border-white' : "bg-opacity-40 border-transparent"}`
                }>Liked</button>
        </div>
    );
}

export default Filter;