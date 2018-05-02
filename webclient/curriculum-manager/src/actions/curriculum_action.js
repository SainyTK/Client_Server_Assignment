import axios from 'axios';

var URL = 'http://localhost:8000/api/curriculums';

export function getCurriculums()
{
	let response = axios.get(URL);
	return {
		type:'GET_CURRICULUM',
		payload:response
	};
}

export function createCurriculum(data)
{
	let response = axios.post(URL,data);
	return{
		type:'GET_CURRICULUM',
		payload:response
	}
}

export function deleteCurriculum(id)
{
	let response = axios.delete(URL+'/'+id)
	return{
		type:'GET_CURRICULUM',
		payload:response
	}
}