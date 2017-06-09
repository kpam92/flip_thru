class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.string :author_id, null: false
      t.string :photo_id, null: false
      t.timestamps null: false
    end
  end
end
