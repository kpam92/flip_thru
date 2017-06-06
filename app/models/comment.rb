class Comment < ActiveRecord::Base
  belongs_to(:author,
           foreign_key: :author_id,
           class_name: 'User')

  belongs_to(:photo,
             foreign_key: :photo_id,
             class_name: 'Photo')
end
