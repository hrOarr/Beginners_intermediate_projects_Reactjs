

function getUser(name){
	const promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(name);
		},1000);
	});
	return promise;
}

function getSongs(name){
	const promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(['A', 'B']);
		},1000);
	});
	return promise;
}

function getRating(song){
	const promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(8);
		},1000);
	});
	return promise;
}
async function display(){
	const user = await getUser("ash");
	const songs = await getSongs(user);
	const rating = await getRating(songs[0]);

	console.log(rating);
}

display();

// getUser("ash")
// .then((user)=>{
// 	console.log(user);
// 	return getSongs(user);
// })
// .then((songs)=>{
// 	console.log(songs);
// 	return getRating(songs[0]);
// })
// .then((rating)=>{
// 	console.log(rating)
// })