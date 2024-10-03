import React from 'react'

const Filter = (props) => {
  let filterData=props.filterData;
  let category=props.category;
  let setCategory=props.setCategory;

  function filterHandler(title){
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 my-2 gap-y-4 mx-auto justify-center">
      {filterData.map((data)=>{
        // hmne hr ek filter data ke liye button bana diya 
        // aur har button mai uska title daal do 
      return(<button className={`text-lg px-2 py-1 rounded-md font-medium 
      text-medium bg-black hover:bg-opacity-50 border-2 border-transparent
       transition-all space-x-4 duration-300 text-white
       ${category===data.title?"bg-opacity-60 border-white":"bg-opacity-80 border-transparent"}`}
        onClick={()=> filterHandler(data.title)}
         key={data.id}>
            {data.title}
        </button>)
      })}
    </div>
  )
}

export default Filter

