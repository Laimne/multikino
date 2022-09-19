function Avys({persons}) 
{
    return (
      <div>
        {persons.map((person, index) => {
          return <div key={index} >{person}</div>;
        })}
      </div>
    );
  }
  export default Avys;