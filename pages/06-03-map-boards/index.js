import { useQuery,gql } from "@apollo/client"
import styled from "@emotion/styled";


const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number,
            writer,
            title,
            contents
        }
    }
`


export default function MapBoardPage(){

    const {data} = useQuery(FETCH_BOARDS);
    console.log(data);

    const Row = styled.div`
        display: flex;
        flex-direction: row;
        border: 0.5px solid gray;
    `

    const Column = styled.div`
        width: 25%;
    `

    return(
       <>
         {data?.fetchBoards.map(el=>(
            <Row>
                <Column><input type="checkbox"/></Column>
                <Column>{el.number}</Column>
                <Column>{el.title}</Column>
                <Column>{el.contents}</Column>
            </Row>
         ))}
       </>
    )
}