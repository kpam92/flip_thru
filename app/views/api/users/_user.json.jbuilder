json.extract! user, :id, :username, :profile_pic

json.photos do
  json.partial! 'api/photos/photo', collection: user.photos, as: :photo
end
