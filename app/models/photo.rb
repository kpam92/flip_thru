
class Photo < ActiveRecord::Base

  belongs_to(:author,
           foreign_key: :author_id,
           class_name: 'User')

  has_many(:comments,
             foreign_key: :photo_id,
             class_name: 'Comment')

  has_many(:likes,
             foreign_key: :photo_id,
             class_name: 'Like')

             before_save :verify_valid_age

end
