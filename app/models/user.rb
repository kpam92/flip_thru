class User < ActiveRecord::Base

  has_many(:photos,
  foreign_key: :author_id,
  class_name: 'Photo')

  has_many(:likes,
  foreign_key: :author_id,
  class_name: 'Like')

  has_many(:comments,
  foreign_key: :author_id,
  class_name: 'Comment')

end
