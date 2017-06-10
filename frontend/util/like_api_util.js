
export const addLike= (like) => {
  return $.ajax({
    method: 'POST' ,
    url: '/api/likes',
    like
  })
}

export const destroyLike= (id) => {
  return $.ajax({
		method: 'DELETE',
		url: `api/likes/${id}`
	});
}
