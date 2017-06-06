class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.text :description
      t.string :image_url,  null: false
      t.integer :author_id, null: false
      t.timestamps null: false
    end
  end
end
