
import dummy from "../db/data.json";
import {useParams} from "react-router-dom";
import Word from "./Word";
import {useEffect,  useState } from "react";

//import useFetch from "../hooks/useFetch";


export default function Day(){
   // const day = 1;
   // const wordList = dummy.words.filter(word => 
   //     word.day === day
   // );
   // const a = useParams();

    //const{day} = useParams();
   /// const words = useFetch(`http://localhost:3002/words?day=${day}`);
    //const[words,setWords] = useState([]);

   // useEffect(() => {
    //    fetch(`http://localhost:3001/words?day=${day}`)
    //    .then(res => {
    //        return res.json();
    //    })
   //     .then(data => {
   //         setWords(data);
   //     });
   // }, [day]);

    //const wordList = dummy.words.filter(word => word.day ===Number(day));
   // console.log(a)
    //console.log(wordList);
    const{day} = useParams();
  //  const wordList = dummy.words.filter(word => word.day === Number(day));
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setWords(data);
    });
  },[day]);


    return(
    <>
            <h2>Day {day}</h2>
        <table>
            <tbody>
                {words.map(word => (

//<tr key={word.id}>
//<td>
//    <input type="checkbox"/>
//</td>
//<td>
//    {word.eng}
//</td>
//<td>
//{word.kor}
//</td>
//<td>
//<button>뜻 보기</button>
//<button class="btn_del">삭제</button>
//</td>
//</tr>

              <Word word={word} key={word.id}/>

                ))}
             
            </tbody>
        </table>
    </>
    );
}