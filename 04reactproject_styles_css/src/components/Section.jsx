import Box from "./Box";

const Section = () => {
  return (
  <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>

  {console.log(Array(5).fill(5))}
    {Array(13).fill(<Box/>)}

    <Box/>
  </div>
)};

export default Section;
