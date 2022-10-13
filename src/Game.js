import React,{useState} from 'react';

function MadeGoal(){
  let goal = 'Goal :)'
  return(
    <h1>{goal}</h1>
  );
}

function MissedGoal(){
  let goal = 'Missed :('
  return(
    <h1>{goal}</h1>
  );
}
let pickNumber = ()=>{
  let randomnum=Math.floor(Math.random()*2)
  return randomnum===1
}
function Game(){
  const [isGoal, seTGoal] =useState(null)
  const [count, setCount] = useState(0)
  const [records,setRecords]=useState([])
  let clickTogoal =() => {
  let pickNumbers=pickNumber()
    seTGoal(Boolean(pickNumbers))
    if(Boolean(isGoal)){
      setCount((count)=>{
        count=count+1
       return count
      })
      setRecords((records)=>{
        records.push({goal:"goal",score:1})
        return [...records]
      })
    }else{
      setCount((count)=>{
        return count=count-1
       
       })
       setRecords((records)=>{
        records.push({goal:"MissedGoal",score:1})
        return [...records]
      })
    }
  }

  let reStart = () => {
    setCount(0)
    setRecords((records)=>{
      records=[]
      return [...records]
    })
  }

  return(
    <>
    <button onClick={clickTogoal}>Try Your Shoot</button>
    <button onClick={reStart}>Restart</button>
    {isGoal==null ? <h1>Try To Shoot</h1> :isGoal? <MadeGoal/> : <MissedGoal/>}
    <h1>You Scored: {count}</h1>
    <h1>{count>10 ? "New High Score" : ""}</h1>
    {(count<0&&count<10) ? "You have penality":""}
    

    <table>
      <thead>
        <tr>
        <th>S.no</th>
        <th>Goal</th>
        <th>Score</th>
        <th>curent score</th>
        </tr>
      </thead>
      <tbody>
        {
          records.length>0 &&
          records.map((ele,i)=>{
            let curentscore=0
            curentscore=curentscore+ele.score
            return <tr>
              <td>{i+1}</td>
              <td>{ele.goal}</td>
              <td>{ele.score}</td>
              <td>{curentscore}</td>
            </tr>
          })
        }
      </tbody>
    </table>
    </>

  );
}

export { Game,MissedGoal,MadeGoal }