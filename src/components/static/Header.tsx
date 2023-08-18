import styled from "styled-components"; 
import { IoIosSearch }   from "react-icons/io"
import { CiBellOn }   from "react-icons/ci"

const Header=()=>{
        return(
                <div>
                   <Box>
                        <Main>
<IconDiv>
<Icons/>
        <Icon2/>
<Ng> YouTube</Ng>
</IconDiv>

<Hloder>
<Search>  
<Input placeholder="Search"/>
<Icons3/>
</Search>
    <Icons4/>
</Hloder>

<BoxIcons>
<Caream/>
<Bell/>
<Image/>
</BoxIcons>

                        </Main>
                   </Box>
                </div>
        )
}
export default Header;

const Image =styled.div`
width: 44px;
height: 44px;
display: flex;
justify-content: center;
align-items: center;
background-color: red;
border-radius: 50%;
object-fit: cover;

:hover{
        background-color: 
silver;
        cursor: pointer;
}
`
const Bell =styled(CiBellOn)`
width: 44px;
height: 44px;
display: flex;
color: #ffffffff;
justify-content: center;
align-items: center;
/* background-color: red; */
border-radius: 50%;
object-fit: cover;

:hover{
        background-color: 
silver;
        cursor: pointer;
}
`
const Caream =styled.div`
width: 44px;
height: 44px;
display: flex;
justify-content: center;
align-items: center;
background-color: red;
border-radius: 50%;
object-fit: cover;

:hover{
        background-color: 
silver;
        cursor: pointer;
}
`
const Search =styled.div`
width: 92%;
min-height: 5vh;
display: flex;
border-radius: 50px;
border: solid 1px gray;
align-items: center;
`
const Input =styled.input`
border-radius: 50px 0px 
0px 50px;
width:85%;
height: 1.7vh;
padding: 14px;
font-size: 17px;
font-weight: 400;
outline: none;
border: 1px solid #fff;
`
const Box =styled.div`
width: 100%;
height: 10vh;
background-color: #000;
display: flex;
justify-content: center;
align-items: center;
position:fixed;
z-index: 1;
`
const Main =styled.div`
width: 95%;
height: 10vh;
/* background-color: blue; */
display: flex;
align-items: center;
justify-content: space-between;
`
const Ng=styled.div`
color: #ffff;
font-size: 20px;
font-weight: 600;
display: flex;
`
const IconDiv=styled.div`
width: 15%;
height: 6vh;
display: flex;
align-items: center;
`
const Icons4=styled.div`
width: 44px;
height: 44px;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
/* background-color: red; */
border-radius: 50%;
object-fit: cover;

:hover{
        background-color: 
silver;
        cursor: pointer;
}
`
const Icons3=styled(IoIosSearch)`
width: 65px;
height: 6vh;
font-size: 10px;
display: flex;
justify-content: center;
color: silver;
align-items: center;
background-color: red;
border-radius: 0px 50px 50px 0px;
object-fit: cover;

:hover{
        background-color: 
silver;
        cursor: pointer;
}
`
const Icon2=styled.div`
width: 19%;
height: 5vh;
background-color: red;
`
const Icons=styled.div`
width: 44px;
height: 44px;
display: flex;
justify-content: center;
align-items: center;
background-color: blue;
border-radius: 50%;
object-fit: cover;

:hover{
        background-color: silver;
        cursor: pointer;
}
`
const Hloder=styled.div`
width: 53%;
height: 9vh;
display: flex;
justify-content: space-between;
align-items: center;
`
const BoxIcons=styled.div`
width: 12%;
height: 5vh;
display: flex;
align-items: center;
justify-content: space-between;
`
