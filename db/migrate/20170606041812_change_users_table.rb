class ChangeUsersTable < ActiveRecord::Migration
  def change
    add_column :users, :profile_pic, :string, null: false
  end
end
