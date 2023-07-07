import { useState } from 'react'

const stateGame = [
	[0,0,0],
	[0,0,0],
	[0,0,0]
]

function App() {

	const [player, setPlayer] = useState(1)

	const checkWinner = () => {
		// check row
		for(let i=0;i<3;i++){
			if(stateGame[i][0]!==0 && stateGame[i][0]===stateGame[i][1] && stateGame[i][1]===stateGame[i][2]){
				return stateGame[i][0]
			}
		}
		// check column
		for(let i=0;i<3;i++){
			if(stateGame[0][i]!==0 && stateGame[0][i]===stateGame[1][i] && stateGame[1][i]===stateGame[2][i]){
				return stateGame[0][i]
			}
		}
		// check diagonal
		if(stateGame[0][0]!==0 && stateGame[0][0]===stateGame[1][1] && stateGame[1][1]===stateGame[2][2]){
			return stateGame[0][0]
		}
		if(stateGame[0][2]!==0 && stateGame[0][2]===stateGame[1][1] && stateGame[1][1]===stateGame[2][0]){
			return stateGame[0][2]
		}
		return 0
	}

	const handleClickBox = (x:number,y:number) => {
		if(stateGame[x][y]!==0) return
		stateGame[x][y] = player
		if(checkWinner()!==0){
			alert(`Player ${player} win`)
			window.location.reload()
		}else{
			setPlayer(player === 1 ? 2 : 1)
		}
	}

	const markPlayer = (x:number,y:number) => {
		if(stateGame[x][y]==0) return "#4b5563"
		return stateGame[x][y] === 1 ? "#dc2626" : "#2563eb"
	}

	return (
		<>
			<div className='flex flex-col items-center justify-center h-screen'>
				<h1 className='text-white text-center text-3xl mb-3'>Tic tac toc</h1>
				<h2 className='text-white text-center text-xl mb-3 font-bold' style={{color:(player === 1 ? "#dc2626" : "#2563eb")}}>Player {player}</h2>
				<div className='grid grid-cols-3 w-96 h-96 gap-4'>
					<div className='border border-gray-500 rounded' style={{backgroundColor:markPlayer(0,0)}} onClick={()=>handleClickBox(0,0)}/>
					<div className='border border-gray-500 rounded' style={{backgroundColor:markPlayer(0,1)}} onClick={()=>handleClickBox(0,1)}/>
					<div className='border border-gray-500 rounded' style={{backgroundColor:markPlayer(0,2)}} onClick={()=>handleClickBox(0,2)}/>
					<div className='border border-gray-500 rounded' style={{backgroundColor:markPlayer(1,0)}} onClick={()=>handleClickBox(1,0)}/>
					<div className='border border-gray-500 rounded' style={{backgroundColor:markPlayer(1,1)}} onClick={()=>handleClickBox(1,1)}/>
					<div className='border border-gray-500 rounded' style={{backgroundColor:markPlayer(1,2)}} onClick={()=>handleClickBox(1,2)}/>
					<div className='border border-gray-500 rounded' style={{backgroundColor:markPlayer(2,0)}} onClick={()=>handleClickBox(2,0)}/>
					<div className='border border-gray-500 rounded' style={{backgroundColor:markPlayer(2,1)}} onClick={()=>handleClickBox(2,1)}/>
					<div className='border border-gray-500 rounded' style={{backgroundColor:markPlayer(2,2)}} onClick={()=>handleClickBox(2,2)}/>
				</div>
			</div>
		</>
	)
}

export default App
