class ChangePhotosTable < ActiveRecord::Migration
  def change
    add_column :photos, :user_pic, :string, null: false
    add_column :photos, :username, :string, null: false
  end
end
