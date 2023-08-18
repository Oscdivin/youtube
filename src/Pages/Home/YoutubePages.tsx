import HorView from "./HorView"
import styled from "styled-components"
import {BsArrowBarRight, BsArrowBarLeft} from "react-icons/bs"
import React, {useState} from "react"
import {BsThreeDotsVertical} from "react-icons/bs"

const YoutubePages =()=>{
                const  [toggle, setToggle] = useState<boolean>(false)
                const onToggle =()=>{
                        setToggle(!toggle)
                }
        return(
                <div>
<Box>
        <Main>
         
                <Bashbord w={toggle ? "ee": "" }>
aaaaa
{
        toggle? <Icon3 onClick={onToggle}/> : <Icon2 onClick={onToggle}/>
}
                </Bashbord>


                <Sceond>

       <HorView/>
       <HorView/>
       <HorView/>
          <HorView/>
    <HorView/>
    <HorView/>

                </Sceond>
        </Main>
</Box>
      
                </div>
        )
}

export default YoutubePages


const Icon3 = styled(BsArrowBarRight)`
color: #ffffff;
`
const Icon2 = styled(BsArrowBarLeft)`
color: #ffffff;
`

const Box = styled.div`
justify-content: center;
display: flex;
align-items: center;
width: 100%;
height: 120vh;
background-color: #000;
`

const Main = styled.div`
justify-content: space-between;
display: flex;
align-items: center;
width: 97%;
height: 100vh;
/* background-color: green; */

`
const Bashbord= styled.div<{w:string}>`
justify-content: end;
display: flex;
width: ${({w})=>w? "210px": "50px"};
/* position: relative; */
height: calc(118vh - 122px);
/* background-color: blue; */
border: 1px solid blue;
/* position: fixed; */
`
const Sceond= styled.div`
/* justify-content: center; */
display: flex;
/* align-items: center; */
width: 100%;
justify-content: space-between;

height: 100vh;
/* background-color: gold; */
flex-wrap: wrap;
`