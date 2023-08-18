import styled from "styled-components"

const HoreView=()=>{
    return(
        <div>
<Box>
    <Card>
        <Top>
<Image/>
<Video/>
        </Top>
    </Card>
     <Dv>
        <Text>aaaaaa</Text>
        <Text>aaaaaa</Text>
        <Text>aaaaaa</Text>
     </Dv>
</Box>
        </div>
    )
}
export default HoreView

const Box =styled.div`

width: 360px;
height: 40vh;
background-color: red;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Card=styled.div`

width: 90%;
height: 40vh;
background-color: blue;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const Top=styled.div`
width: 90%;
height: 31vh;

background-color: green;
`

const Image=styled.div`
width: 22%;
height: 31vh;
background-color: red;
display: flex;
position: absolute;
justify-content: center;
    transition: all 360ms ;
    opacity: 1;

:hover{
    width: 0%;
    overflow: hidden;
    height: 31vh;
    /* transform: scale(0.1); */
    cursor: pointer;
    /* transform: scale(0.3); */
    transition: all 360ms;
    background-color: transparent;
    z-index: 1;
    opacity: 1;
}
`

const Video=styled.div`
width: 100%;
height: 31vh;
background-color: black;
/* position: absolute; */
display: flex;
justify-content: center;
`
const Text =styled.div``
const Dv =styled.div`
width: 90%;
height: 7vh;
background-color: green;
display: flex;
justify-content: space-between;
`