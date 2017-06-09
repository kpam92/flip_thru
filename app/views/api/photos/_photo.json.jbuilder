json.extract!(
        photo,
         :id, :image_url, :description, :author_id, :user_pic, :username
)


# json.likes do
#   json.partial! 'api/likes/like', collection: photo.likes, as: :like
# end

# json.likes do
#   photo.likes.each{ |like| json.set! like.id, like.author_id, like.photo_id }
# end

json.likes Hash[photo.likes.map{ |like| [ like.author_id, [like.id, like.photo_id.to_i] ] }]
